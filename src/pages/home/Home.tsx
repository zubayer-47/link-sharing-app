import LinkItem from "./components/LinkItem"

const Home = () => {
  return <div className="flex justify-center items-stretch gap-4 h-full w-full">
    <div className="p-5 bg-gray-50 rounded-lg">
      <h1>Hello this is mobile ui</h1>
    </div>

    <div className="pt-10 bg-gray-50 rounded-lg">
      <div className="px-7">

        <h1 className="text-2xl font-bold font-inter mb-1">Customize your links</h1>
        <p className="text-gray-600 mb-8">Add/edit/remove links below and then share all your profiles with the world!</p>

        <button type="button" className="bg-transparent hover:bg-purple-700 border border-purple-700 w-full text-purple-700 hover:text-gray-100 px-4 py-2 rounded-md font-inter font-medium transition-colors">
          &#43; Add new link
        </button>

        <div className="flex flex-col gap-4 my-4">
          <LinkItem />
        </div>
      </div>

      <hr className="border-b border-gray-200 my-5" />

      <div className="flex justify-end pr-7 mb-5">
      <button type="button" className="bg-purple-700 hover:bg-purple-900 border border-purple-700 hover:border-purple-900 w-fit text-gray-100 px-4 py-2 rounded-md font-inter font-medium transition-colors">Save</button>
      </div>
    </div>
  </div>
}

export default Home
