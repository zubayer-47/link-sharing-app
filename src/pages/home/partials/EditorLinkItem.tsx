import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import clsx from "clsx";
import { Equal } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import CustomSelect from "../../../components/CustomSelect";
import { LinkType } from "../../../context/types";
import useData from "../../../hooks/useData";
import { debounce } from "../../../lib/debounce";

export type KeyType = "github" | "linkedin" | "youtube";
export type Option = {
  label: string;
  icon: string;
  key: KeyType;
};

type Props = LinkType & { index: number; className?: string };

const EditorLinkItem = ({ index, className, ...link }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option>({
    icon: link.logo,
    label: link.name,
    key: link.name.toLowerCase() as KeyType,
  });
  const [value, setValue] = useState(link.to);
  const [isDragging, setIsDragging] = useState(false);
  const [closestEdge, setClosestEdge] = useState<string | null>(null);
  const [dndPreview, setDndPreview] = useState<HTMLElement | null>(null);
  const { updateSingleLink } = useData();

  const draggableRef = useRef<HTMLButtonElement | null>(null);
  const dropTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const draggableEl = draggableRef.current;
    const dropTargetEl = dropTargetRef.current;

    if (!draggableEl || !dropTargetEl) return;

    return combine(
      draggable({
        element: draggableEl,
        getInitialData: () => ({ type: "link", id: link.id }),

        onGenerateDragPreview({ nativeSetDragImage }) {
          setCustomNativeDragPreview({
            nativeSetDragImage,
            getOffset: pointerOutsideOfPreview({
              x: "16px",
              y: "8px",
            }),
            render({ container }) {
              setDndPreview(container);

              return () => setDndPreview(null);
            },
          });
        },

        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      }),

      dropTargetForElements({
        element: dropTargetEl,
        getData: ({ input, element }) => {
          const data = { type: "link", id: link.id };

          return attachClosestEdge(data, {
            input,
            element,
            allowedEdges: ["top", "bottom"],
          });
        },
        // getIsSticky: () => true,
        onDragEnter(args) {
          if (args.source.data.id !== link.id) {
            setClosestEdge(extractClosestEdge(args.self.data));
          }
        },

        onDrag({ self, source }) {
          const isSource = source.element === dropTargetEl;
          if (isSource) {
            setClosestEdge(null);
            return;
          }

          const closestEdge = extractClosestEdge(self.data);

          const sourceIndex = source.data.index as number;

          const isItemBeforeSource = index === sourceIndex - 1;
          const isItemAfterSource = index === sourceIndex + 1;

          const isDropIndicatorHidden =
            (isItemBeforeSource && closestEdge === "bottom") ||
            (isItemAfterSource && closestEdge === "top");

          if (isDropIndicatorHidden) {
            setClosestEdge(null);
            return;
          }

          setClosestEdge(closestEdge);
        },

        onDragLeave: () => {
          setClosestEdge(null);
        },

        onDrop: () => {
          setClosestEdge(null);
        },
      }),
    );
  }, [link, index]);

  const getSelectedOption = (option: Option) => {
    setSelectedOption(option);
  };

  const debouncedUpdateSingleLink = useMemo(
    () =>
      debounce((updatedLink: LinkType) => {
        updateSingleLink(updatedLink);
      }, 1000),
    [updateSingleLink],
  );

  const handleLinkUpdate = (updatedLink: LinkType) => {
    debouncedUpdateSingleLink(updatedLink);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    handleLinkUpdate({
      ...link,
      logo: selectedOption.icon,
      name: selectedOption.label,
      to: newValue,
    });
  };

  return (
    <>
      <div
        // className={`indicator select-none space-y-2 rounded-lg bg-gray-100 p-4 ${isDragging ? "bg-gray-400 shadow-lg" : ""} ${closestEdge}`}
        className={clsx(
          "indicator select-none rounded-lg bg-gray-100 p-4",
          {
            "bg-gray-400 shadow-lg": isDragging,
          },
          closestEdge,
          className,
        )}
        ref={dropTargetRef}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <button type="button" ref={draggableRef}>
              <Equal className="text-muted" />
            </button>
            <span className="text-muted">Link #{link.order}</span>
          </div>
          <button type="button" className="text-muted hover:text-gray-800">
            Remove
          </button>
        </div>
        <CustomSelect
          getSelectedOption={getSelectedOption}
          selectedOption={selectedOption}
        />

        <div>
          <label className="text-gray-600">Link</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 focus:outline-none"
            placeholder="https://example.com"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>

      {dndPreview &&
        ReactDOM.createPortal(
          <EditorLinkItem
            {...link}
            index={index}
            className="w-full bg-gray-300"
          />,
          dndPreview,
        )}
    </>
  );
};

export default EditorLinkItem;
