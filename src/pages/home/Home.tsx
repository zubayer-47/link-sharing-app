import Phone from "../../assets/Phone";
import LinkItem from "./partials/LinkItem";

const Home = () => {
  return (
    <div className="flex h-full w-full items-stretch justify-center gap-4">
      <div className="hidden rounded-2xl bg-gray-50 p-5 lg:block">
        <Phone />
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
            <LinkItem />
            <LinkItem />
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
