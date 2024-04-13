import {
  bandImage,
  mineralWool,
  metalJacketing,
  mineralWoolBricks,
  hardPipeCover,
} from "./images/index";

const specificMaterialList = [
  {
    title: "Estimate bands",
    description: "Estimate bands",
    link: "/estimate-bands",
    image: bandImage,
  },
  {
    title: "Estimate Insulation",
    description: "estimate mineral wool",
    link: "/insulation-landing",
    image: mineralWool,
  },
  {
    title: "Estimate Metal ",
    description: "estimate metal jacketing",
    link: "/estimate-metal",
    image: metalJacketing,
  },
];

const insulationLinkList = [
  {
    title: "Sheets",
    description: "Sheet insulation",
    link: "/estimate-mineral-wool",
    image: mineralWoolBricks,
  },
  {
    title: "Formed Pipe Cover",
    description: "Formed Pipe Cover",
    link: "/estimate-formed-insulation",
    image: hardPipeCover,
  },
];

const homeLinksList = [
  {
    title: "Estimate everything",
    description: "Insulation, metal, and bands",
    link: "/estimate-sheet-insulation",
    image: metalJacketing,
  },
  {
    title: "Estimate Specific Material",
    description: "One material at a time",
    link: "/specific-material-landing",
    image: mineralWool,
  },
];

export { specificMaterialList, insulationLinkList, homeLinksList };
