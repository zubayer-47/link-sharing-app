import phone_image from "../../assets/phone.png";
import LinkItem from "../../components/LinkItem";
import LinkPlaceholder from "../../components/LinkPlaceholder";
import useData from "../../hooks/useData";
import EditorLinkItem from "./partials/EditorLinkItem";

const Home = () => {
  const { state } = useData();

  return (
    <div className="flex h-full w-full items-stretch justify-center gap-4">
      <div className="hidden rounded-2xl bg-gray-50 p-5 lg:block">
        <div className="flex h-full items-center justify-center">
          <div className="relative h-fit w-fit">
            <img src={phone_image} alt="phone image" />

            <img
              src={state.profile_pic}
              alt="profile picture"
              className="absolute right-[6.5rem] top-16 h-24 w-24 rounded-full object-cover ring ring-primary"
            />

            <div className="absolute top-44 w-full text-center">
              <h1 className="text-2xl font-bold">
                {state.first_name} {state.last_name}
              </h1>
              <span
                className={`text-muted ${state.email ? "block" : "hidden"}`}
              >
                {state.email}
              </span>
            </div>

            <div className="absolute top-[17.5rem] flex w-full flex-col gap-3 px-9">
              {state.links.map((link) => (
                <LinkItem
                  key={link.id}
                  order={link.order}
                  logo={link.logo}
                  alt={link.alt}
                  name={link.name}
                  color={link.color}
                  to={link.to}
                />
              ))}

              <LinkPlaceholder linksLength={state.links.length} />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-50 pt-10">
        <div className="px-7">
          <h1 className="mb-1 text-2xl font-bold">Customize your links</h1>
          <p className="mb-8 text-muted">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <button
            type="button"
            className="w-full rounded-md border border-primary bg-transparent px-4 py-2 font-medium text-primary transition-colors hover:bg-primary/90 hover:text-gray-100"
          >
            &#43; Add new link
          </button>

          <div className="my-6 flex flex-col gap-4">
            <EditorLinkItem />
            <EditorLinkItem />
          </div>
        </div>

        <hr className="my-5 border-b border-gray-200" />

        <div className="mb-5 flex justify-end pr-7">
          <button
            type="button"
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
