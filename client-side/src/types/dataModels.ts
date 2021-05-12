import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InboxIcon from "@material-ui/icons/Inbox";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

const inputFieldRows = [
  {
    label: "What's your full name?",
    name: "username",
    placeholder: "enter name",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "enter email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "enter password",
    type: "password",
  },
];
const sideNavBottomItems = [
  {
    Icon: SettingsRoundedIcon,
    name: "Settings",
  },
  {
    Icon: ExitToAppRoundedIcon,
    name: "Logout",
    path: "/login"
  },
];
const sideNavMiddleItems = [
  {
    img: "../../../public/image/avatar.png",
    name: "Patrica M.",
    role: "Teacher",
  },
  {
    img: "../../../public/image/avatar.png",
    name: "Liu Yangdong",
    role: "Principal",
  },
  {
    img: "../../../public/image/avatar.png",
    name: "Paul Literi",
    role: "Counselor",
  },
  {
    img: "../../../public/image/avatar.png",
    name: "Chen Ying",
    role: "Counselor",
  },
  {
    img: "../../../public/image/avatar.png",
    name: "Justin S.",
    role: "Teacher",
  },
  {
    img: "../../../public/image/avatar.png",
    name: "Chris J.",
    role: "Teacher",
  },
];
const sideNavTopItems = [
  {
    Icons: HomeRoundedIcon,
    name: "Home",
  },
  {
    Icons: EmojiObjectsRoundedIcon,
    name: "My Pilots",
  },
  {
    Icons: InboxIcon,
    name: "Inbox",
  },
  {
    Icons: GroupRoundedIcon,
    name: "My Team",
  },
];

export {
  inputFieldRows,
  sideNavBottomItems,
  sideNavMiddleItems,
  sideNavTopItems,
};
