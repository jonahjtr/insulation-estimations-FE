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
    description: "Estimate bands.",
    link: "/estimate-bands",
    image: bandImage,
  },
  {
    title: "Estimate Insulation",
    description: "estimate mineral wool.",
    link: "/insulation-landing",
    image: mineralWool,
  },
  {
    title: "Estimate Metal ",
    description: "estimate metal jacketing.",
    link: "/estimate-metal",
    image: metalJacketing,
  },
];
const estimateEverythingList = [
  {
    title: "Sheet insulation",
    description: "Sheet insulation, calcium bricks, perlite, mineral wool.",
    link: "/estimate-everything-sheet-insulation",
    image: mineralWoolBricks,
  },
  {
    title: "Formed Pipe Cover",
    description: "Preformed insulation, calcium, perlite, ect.",
    link: "/estimate-everything-formed-insulation",
    image: hardPipeCover,
  },
];

const insulationLinkList = [
  {
    title: "Sheets",
    description: "Sheet insulation.",
    link: "/estimate-mineral-wool",
    image: mineralWoolBricks,
  },
  {
    title: "Formed Pipe Cover",
    description: "Hard insulation, calcium, perlite, ect.",
    link: "/estimate-formed-insulation",
    image: hardPipeCover,
  },
];

const homeLinksList = [
  {
    title: "Estimate everything",
    description: "Insulation, metal, bands. all at once.",
    link: "/estimate-everything-landing",
    image: metalJacketing,
  },
  {
    title: "Estimate Specific Material",
    description: "One material at a time.",
    link: "/specific-material-landing",
    image: mineralWool,
  },
];

export {
  specificMaterialList,
  insulationLinkList,
  homeLinksList,
  estimateEverythingList,
};
