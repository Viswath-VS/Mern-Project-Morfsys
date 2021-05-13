import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InboxIcon from "@material-ui/icons/Inbox";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import PersonIcon from '@material-ui/icons/Person';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
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

const cardItemImpact = [
  {
    title: "Reading Comprehension",
    buttonName:"High",
    Icon: PersonIcon,
    iconName:"Student",
    ToolIcon: BuildRoundedIcon,
    toolText:"3 tools",
    img: "../../../public/image/avatar.png",
    className:"btn-rounded danger",
    text: "29 Sept - 10 Nov"
  },{
    title: "Career Development",
    buttonName:"Medium",
    Icon: PersonIcon,
    iconName:"Student",
    ToolIcon: BuildRoundedIcon,
    toolText:"0 tools",
    img: "../../../public/image/avatar.png",
    className: "btn-rounded warning",
    text: "20 Oct - 10 Nov"
  }
]
const cardItemTool = [
  {
    title: "ReadToMe: Houde Pilot 1",
    buttonName:"InProgress",
    Icon: WatchLaterIcon ,
    iconName:"Fall 2020",
    ToolIcon: DoneRoundedIcon,
    toolText:"Student Pod",
    img: "../../../public/image/avatar.png",
    className: "btn-rounded success",
    text: "$50K/year"
  }, {
    title: "Paragon one: Houde Pilot 2",
    buttonName:"Awaiting",
    Icon: WatchLaterIcon ,
    iconName:"Fall 2020",
    ToolIcon: ClearRoundedIcon,
    toolText:"Student Pod",
    img: "../../../public/image/avatar.png",
    className: "btn-rounded info",
    text: "$50K/year"
  },{
    title: "Paragon one: Houde Pilot 2",
    buttonName:"Requested",
    Icon: WatchLaterIcon ,
    iconName:"Fall 2020",
    ToolIcon: ClearRoundedIcon,
    toolText:"Student Pod",
    img: "../../../public/image/avatar.png",
    className: "btn-rounded warning",
    text: "$50K/year"
  },
]
const cardItemLearn = [
  {
    img: "../../../public/image/hill.png",
    title: "ClassCraft",
    description:"writing composition"
  },{
    img: "../../../public/image/paragon.png",
    title: "Paragon One",
    description:"Creative Thinking"
  },{
    img: "../../../public/image/readtome.png",
    title: "ReadToMe",
    description:"Creative Thinking"
  },{
    img: "../../../public/image/discovery.png",
    title: "Discovery Education",
    description:"Creative Thinking"
  },
]
export {
  inputFieldRows,
  sideNavBottomItems,
  sideNavMiddleItems,
  sideNavTopItems,
  cardItemImpact,
  cardItemTool,
  cardItemLearn
};
