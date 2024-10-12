import PhoneUI from "../assets/PhoneUI";
import { LinkType } from "../context/types";
import useData from "../hooks/useData";
import LinkItem from "./LinkItem";
import LinkPlaceholder from "./LinkPlaceholder";

type Props = {
  profile_pic?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  links?: LinkType[];
};

export default function PhonePreview({
  email,
  first_name,
  last_name,
  profile_pic,
  links,
}: Props) {
  const { state } = useData();

  return (
    <div className="hidden rounded-2xl bg-gray-50 px-20 py-5 lg:block">
      <div className="flex h-full items-center justify-center">
        <div className="relative h-fit w-fit">
          <PhoneUI />

          <img
            src={profile_pic || state.profile_pic}
            alt="profile picture"
            className="absolute right-[6.5rem] top-16 h-24 w-24 rounded-full object-cover ring ring-primary"
          />

          <div className="absolute top-44 w-full text-center">
            <h1 className="text-2xl font-bold">
              {first_name || state.first_name} {last_name || state.last_name}
            </h1>
            <span className={`text-muted ${email ? "block" : "hidden"}`}>
              {email || state.email}
            </span>
          </div>

          <div className="absolute top-[17.5rem] flex w-full flex-col gap-3 px-9">
            {!links?.length
              ? state.links.map((link) => (
                  <LinkItem
                    key={link.id}
                    order={link.order}
                    logo={link.logo}
                    alt={link.alt}
                    name={link.name}
                    color={link.color}
                    to={link.to}
                  />
                ))
              : links.map((link) => (
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

            <LinkPlaceholder
              linksLength={links?.length || state.links.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
