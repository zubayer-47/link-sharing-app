import githubLogo from "../../assets/github-vector-logo.png";
import linkedInLogo from "../../assets/linkedIn.png";
import youtubeLogo from "../../assets/youtube-logo.png";
import zdevpLogo from "../../assets/zubayer.jpg";
import LinkItem from "../../components/LinkItem";

export default function Preview() {
  return (
    <div className="custom-shadow flex h-fit w-full max-w-72 flex-col items-center justify-center rounded-2xl bg-gray-100 p-10">
      <img
        src={zdevpLogo}
        alt="profile picture"
        className="h-24 w-24 rounded-full object-cover ring ring-primary"
      />

      <h1 className="mt-7 text-2xl font-bold">A B M Zubayer</h1>
      <span className="mt-3 text-muted">zubayerjs.dev@gmail.com</span>

      <div className="mt-10 flex w-full flex-col gap-3">
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
  );
}
