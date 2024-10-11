// import githubLogo from "../../assets/github-vector-logo.png";
// import linkedInLogo from "../../assets/linkedIn.png";
// import youtubeLogo from "../../assets/youtube-logo.png";
import LinkItem from "../../components/LinkItem";
import useData from "../../hooks/useData";

export default function Preview() {
  const { state } = useData();

  return (
    <div className="custom-shadow flex h-fit w-full max-w-72 flex-col items-center justify-center rounded-2xl bg-gray-100 p-10">
      <img
        src={state.profile_pic}
        alt="profile picture"
        className="h-24 w-24 rounded-full object-cover ring ring-primary"
      />

      <h1 className="mt-7 text-2xl font-bold">
        {state.first_name} {state.last_name}
      </h1>
      <span className={`mt-3 text-muted ${state.email ? "block" : "hidden"}`}>
        {state.email}
      </span>

      <div className="mt-10 flex w-full flex-col gap-3">
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
      </div>
    </div>
  );
}
