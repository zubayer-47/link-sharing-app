export type LinkType = {
  id: string;
  order: number;
  name: string;
  logo: string;
  color: "red" | "black" | "blue";
  alt: string;
  to: string;
};

export type ProfileInfoType = {
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: string;
};

export type InitialStateType = {
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: string;
  links: LinkType[];
};

export type DefaultContextValueType = {
  state: InitialStateType;
  setProfileInfo: (info: ProfileInfoType) => void;
  updateLink: (link: LinkType) => void;
};

export type Action =
  | {
      type: "SET_PROFILE_INFO";
      payload: ProfileInfoType;
    }
  | { type: "UPDATE_LINK"; payload: LinkType };
