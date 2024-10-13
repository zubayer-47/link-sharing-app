import { createContext, PropsWithChildren, useReducer } from "react";
import githubLogo from "../assets/github-vector-logo.png";
import linkedInLogo from "../assets/linkedIn.png";
// import youtubeLogo from "../assets/youtube-logo.png";
import zdevp from "../assets/zubayer.jpg";
import {
  Action,
  DefaultContextValueType,
  InitialStateType,
  LinkType,
  ProfileInfoType,
} from "./types";

const defaultContextValue: DefaultContextValueType = {
  state: {
    first_name: "",
    last_name: "",
    email: "",
    profile_pic: "",
    links: [],
  },
  setProfileInfo() {},
  updateSingleLink() {},
  updateLinks() {},
};

export const DataContext = createContext(defaultContextValue);

const initialState: InitialStateType = {
  first_name: "A B M",
  last_name: "Zubayer",
  email: "zubayerjs.dev@gmail.com",
  profile_pic: zdevp,
  links: [
    {
      id: "1",
      order: 1,
      name: "GitHub",
      logo: githubLogo,
      color: "black",
      alt: "github logo",
      to: "https://github.com/zubayer-47",
    },
    // {
    //   id: "2",
    //   order: 2,
    //   name: "YouTube",
    //   logo: youtubeLogo,
    //   color: "red",
    //   alt: "youtube logo",
    //   to: "https://github.com/zubayer-47",
    // },
    {
      id: "2",
      order: 2,
      name: "LinkedIn",
      logo: linkedInLogo,
      color: "blue",
      alt: "linkedin logo",
      to: "https://github.com/zubayer-47",
    },
  ],
};

const dataReducer = (
  state: InitialStateType,
  action: Action,
): InitialStateType => {
  switch (action.type) {
    case "SET_PROFILE_INFO":
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        profile_pic: action.payload.profile_pic,
      };
    case "UPDATE_SINGLE_LINK":
      return {
        ...state,
        links: state.links.map((link) =>
          link.id === action.payload.id ? action.payload : link,
        ),
      };
    case "UPDATE_LINKS":
      return {
        ...state,
        links: action.payload,
      };
    default:
      return state;
  }
};

export default function DataProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const setProfileInfo = (info: ProfileInfoType) => {
    dispatch({
      type: "SET_PROFILE_INFO",
      payload: info,
    });
  };

  const updateSingleLink = (link: LinkType) => {
    console.log("firing");
    dispatch({ type: "UPDATE_SINGLE_LINK", payload: link });
  };

  const updateLinks = (links: LinkType[]) => {
    dispatch({ type: "UPDATE_LINKS", payload: links });
  };

  const value = {
    state,
    setProfileInfo,
    updateSingleLink,
    updateLinks,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
