import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index";
import {
  BaseEventPayload,
  ElementDragType,
} from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { reorder } from "@atlaskit/pragmatic-drag-and-drop/reorder";
import { SaveIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import githubLogo from "../../assets/github-vector-logo.png";
import PhonePreview from "../../components/PhonePreview";
import { LinkType } from "../../context/types";
import useData from "../../hooks/useData";
import EditorLinkItem from "./partials/EditorLinkItem";

const Home = () => {
  const { state, updateLinks } = useData();
  const [links, setLinks] = useState(state.links);

  const reorderLinks = useCallback(
    ({
      startIndex,
      finishIndex,
    }: {
      startIndex: number;
      finishIndex: number;
    }): LinkType[] => {
      const data: LinkType[] = JSON.parse(JSON.stringify(links));

      const updatedLinks = reorder({
        list: data,
        startIndex,
        finishIndex,
      });

      return updatedLinks;
    },
    [links],
  );

  const handleDrop = useCallback(
    ({ location, source }: BaseEventPayload<ElementDragType>) => {
      const data: LinkType[] = JSON.parse(JSON.stringify(links));
      const destination = location.current.dropTargets.length;
      if (!destination) return;

      if (source.data.type === "link") {
        const draggedLinkId = source.data.id;
        const sourceData = data.find(
          (link: LinkType) => link.id === draggedLinkId,
        );

        if (sourceData) {
          const draggedLinkIndex = data.findIndex(
            (link: LinkType) => link.id === draggedLinkId,
          );

          if (draggedLinkIndex === -1) return;

          const [targetedLink] = location.current.dropTargets;
          const targetedLinkIndex = data.findIndex(
            (link) => link.id === targetedLink.data.id,
          );

          if (targetedLinkIndex !== -1) {
            const closestEdgeOfTarget = extractClosestEdge(targetedLink.data);

            const destinationIndex = getReorderDestinationIndex({
              startIndex: draggedLinkIndex,
              indexOfTarget: targetedLinkIndex,
              closestEdgeOfTarget,
              axis: "vertical",
            });

            const updatedLinks = reorderLinks({
              startIndex: draggedLinkIndex,
              finishIndex: destinationIndex,
            });

            if (updatedLinks) {
              const updatedLinksWithOrder = updatedLinks.map((link, index) => ({
                ...link,
                order: index + 1,
              }));

              setLinks(updatedLinksWithOrder);
            }
          }
        }
      }
    },
    [links, reorderLinks],
  );

  useEffect(() => {
    return monitorForElements({
      onDrop: handleDrop,
    });
  }, [links, handleDrop]);

  const addNewLink = () => {
    const newLink: LinkType = {
      id: uuidv4(),
      order: links.length + 1,
      name: "GitHub",
      logo: githubLogo,
      color: "black",
      alt: "github",
      to: "",
    };

    setLinks((prev) => [...prev, newLink]);
    updateLinks([...links, newLink]);
  };

  const handleSave = () => {
    toast("Your changes have been successfully saved!", {
      icon: <SaveIcon />,
    });
    updateLinks(links);
  };

  return (
    <div className="flex w-full items-stretch justify-center gap-4">
      <PhonePreview />

      <div className="rounded-2xl bg-gray-50 pt-10">
        <div className="mb-5 flex h-[39.5rem] flex-col gap-4 overflow-y-auto px-7 scrollbar-none">
          <div className="flex flex-col">
            <h1 className="mb-1 text-2xl font-bold">Customize your links</h1>
            <p className="mb-8 text-muted">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>

            <button
              type="button"
              onClick={addNewLink}
              className="w-full rounded-md border border-primary bg-transparent px-4 py-2 font-medium text-primary transition-colors hover:bg-primary/90 hover:text-gray-100"
            >
              &#43; Add new link
            </button>
          </div>

          {/* <div className="my-6 flex flex-col gap-4"> */}
          {links.map((link, ind) => (
            <EditorLinkItem key={link.id} index={ind} {...link} />
          ))}
          {/* </div> */}
        </div>

        <hr className="my-5 border-b border-gray-200" />

        <div className="mb-5 flex justify-end pr-7">
          <button
            type="button"
            onClick={handleSave}
            className="w-fit rounded-md border border-primary bg-primary px-4 py-2 font-medium text-gray-100 transition-colors hover:border-primary/90 hover:bg-primary/90"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
