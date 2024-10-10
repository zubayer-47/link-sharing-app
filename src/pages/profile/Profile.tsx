import { Image, Save } from "lucide-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import githubLogo from "../../assets/github-vector-logo.png";
import linkedInLogo from "../../assets/linkedIn.png";
import phone_image from "../../assets/phone.png";
import youtubeLogo from "../../assets/youtube-logo.png";
import zdevp_pic from "../../assets/zubayer.jpg";
import LinkItem from "../../components/LinkItem";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Profile() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setSelectedFile(files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((reader.result as string) || "");
      };

      reader.readAsDataURL(files[0]);
    }
  };

  const handleSave = () => {
    // You can handle the file upload here if needed
    console.log("File submitted:", { selectedFile, formData });

    toast("Your changes have been successfully saved!", {
      icon: <Save />,
      style: {
        // borderRadius: '10px',
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-full w-full items-stretch justify-center gap-4">
      <div className="hidden rounded-lg bg-gray-50 p-5 lg:block">
        <div className="flex h-full items-center justify-center">
          <div className="relative h-fit w-fit">
            <img src={phone_image} alt="phone image" />

            <img
              src={zdevp_pic}
              alt="profile picture"
              className="absolute right-[6.5rem] top-16 h-24 w-24 rounded-full object-cover ring ring-primary"
            />

            <div className="absolute right-12 top-44 text-center">
              <h1 className="text-2xl font-bold">A B M Zubayer</h1>
              <span className="text-muted">zubayerjs.dev@gmail.com</span>
            </div>

            <div className="absolute top-[17.5rem] flex w-full flex-col gap-3 px-9">
              <LinkItem
                logo={githubLogo}
                alt="github logo"
                name="GitHub"
                color="black"
                to="https://github.com/zubayer-47"
              />

              <LinkItem
                logo={youtubeLogo}
                alt="youtube logo"
                name="YouTube"
                color="red"
                to="https://github.com/zubayer-47"
              />

              <LinkItem
                logo={linkedInLogo}
                alt="linkedin logo"
                name="LinkedIn"
                color="blue"
                to="https://github.com/zubayer-47"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 pt-10">
        <div className="mb-20 flex flex-col gap-4 px-7 md:mb-28">
          <h1 className="mb-1 text-2xl font-bold">Profile Details</h1>
          <p className="mb-4 text-wrap text-gray-600/70">
            Add your details to create a personal touch to your profile
          </p>

          <div className="flex w-full select-none flex-col gap-2 rounded-lg bg-gray-100 p-4 md:flex-row md:items-center md:justify-between md:gap-10">
            <h1 className="text-muted">Profile picture</h1>

            <div className="flex flex-col items-center gap-3 md:flex-row">
              <div className="group relative size-40 overflow-hidden">
                <img
                  src={imagePreview || zdevp_pic}
                  alt="profile pic"
                  className="size-full rounded-xl object-cover"
                />

                <label>
                  <span className="absolute inset-0 hidden cursor-pointer flex-col items-center justify-center rounded-xl bg-black/30 text-sm text-gray-100 group-hover:flex">
                    <Image strokeWidth={1.5} />
                    Change Image
                  </span>

                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
                    accept="image/png,image/jpg,image/bmp"
                  />
                </label>
              </div>

              <p className="text-muted">
                Image must be below 1024&#x2715;1024px. <br />
                Use PNG, JPG or BMP format
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-lg bg-gray-100 p-4">
            <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between md:gap-5">
              <label
                htmlFor="first_name"
                className="text-muted after:content-['*']"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="first_name"
                className="rounded-md border border-gray-200 bg-gray-50 p-2 shadow-primary focus:border-primary focus:shadow-md focus:outline-none"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between md:gap-5">
              <label
                htmlFor="last_name"
                className="text-muted after:content-['*']"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="last_name"
                className="rounded-md border border-gray-200 bg-gray-50 p-2 shadow-primary focus:border-primary focus:shadow-md focus:outline-none"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between md:gap-5">
              <label htmlFor="email" className="text-muted">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded-md border border-gray-200 bg-gray-50 p-2 shadow-primary focus:border-primary focus:shadow-md focus:outline-none"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <hr className="my-5 border-b border-gray-200" />

        <div className="mb-5 flex justify-end pr-7">
          <button
            onClick={handleSave}
            type="button"
            className="w-fit rounded-md border border-primary bg-primary px-4 py-2 font-medium text-gray-100 transition-colors hover:border-primary/90 hover:bg-primary/90"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
