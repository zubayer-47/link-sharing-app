import { Image, SaveIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import zdevp_pic from "../../assets/zubayer.jpg";
import Input from "../../components/Input";
import PhonePreview from "../../components/PhonePreview";
import useData from "../../hooks/useData";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
}

export default function Profile() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const { state, setProfileInfo } = useData();

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

    const { email, last_name, first_name } = formData;

    if (!first_name || !last_name) {
      toast.error("First name and last name are required.");

      setFormErrors(() => ({
        ...(first_name
          ? { first_name: "" }
          : { first_name: "First name is required." }),
        ...(last_name
          ? { last_name: "" }
          : { last_name: "Last name is required." }),
      }));

      return;
    }

    setFormErrors({});

    setProfileInfo({
      email,
      first_name,
      last_name,
      profile_pic: imagePreview || zdevp_pic,
    });

    toast("Your changes have been successfully saved!", {
      icon: <SaveIcon />,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-full w-full items-stretch justify-center gap-4">
      <PhonePreview
        email={formData.email}
        first_name={formData.first_name}
        last_name={formData.last_name}
        profile_pic={imagePreview || zdevp_pic}
        // links={[]}
      />

      <div className="rounded-lg bg-gray-50 pt-10">
        <div className="mb-20 flex flex-col gap-4 px-7">
          <h1 className="mb-1 text-2xl font-bold">Profile Details</h1>
          <p className="mb-4 text-wrap text-gray-600/70">
            Add your details to create a personal touch to your profile
          </p>

          <div className="flex w-full flex-col gap-2 rounded-lg bg-gray-100 p-4 md:flex-row md:items-center md:justify-between md:gap-10">
            <h1 className="text-muted">Profile picture</h1>

            <div className="flex flex-col items-center gap-10 md:flex-row">
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

              <p className="text-sm text-muted">
                Image must be below 1024&#x2715;1024px. <br />
                Use PNG, JPG or BMP format
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-lg bg-gray-100 p-4">
            <Input
              label="First Name"
              name="first_name"
              id="first_name"
              value={formData.first_name}
              defaultValue={state.first_name}
              onChange={handleChange}
              error={formErrors.first_name}
            />

            <Input
              label="Last Name"
              name="last_name"
              id="last_name"
              value={formData.last_name}
              defaultValue={state.last_name}
              onChange={handleChange}
              error={formErrors.last_name}
            />

            <Input
              label="Email"
              name="email"
              id="email"
              value={formData.email}
              defaultValue={state.email}
              onChange={handleChange}
              type="email"
            />
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
