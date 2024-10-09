import { Image } from 'lucide-react'
import zdevp_pic from '../../assets/zubayer.jpg'

export default function Profile() {
  return (
    <div className="flex justify-center items-stretch gap-4 h-full w-full">
    <div className="p-5 bg-gray-50 rounded-lg">
      <h1>Hello this is mobile ui</h1>
    </div>

    <div className="pt-10 bg-gray-50 rounded-lg">
      <div className="px-7">

        <h1 className="text-2xl font-bold font-inter mb-1">Profile Details</h1>
        <p className="text-gray-600 mb-8">Add your details to create a personal touch to your profile</p>

        <div className="flex flex-col gap-4 my-4">
        <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center select-none">
          <h1>Profile picture</h1>

          <div className="flex items-center gap-3">
            <div className="size-32 relative">
            <img src={zdevp_pic} alt="profile pic" className='size-full object-cover rounded-xl' />

            <span className='absolute inset-0 bg-black/30 rounded-xl text-gray-100 flex flex-col justify-center items-center'>
            <Image />
            Change Image
            </span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <hr className="border-b border-gray-200 my-5" />

      <div className="flex justify-end pr-7 mb-5">
      <button type="button" className="bg-purple-700 hover:bg-purple-900 border border-purple-700 hover:border-purple-900 w-fit text-gray-100 px-4 py-2 rounded-md font-inter font-medium transition-colors">Save</button>
      </div>
    </div>
  </div>
  )
}
