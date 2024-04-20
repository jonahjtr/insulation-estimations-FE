import {
  bandImage,
  mineralWool,
  metalJacketing,
  mineralWoolBricks,
  hardPipeCover,
  tank,
  vessel,
  tower,
  pipes,
} from "./images/index";

const pathNames = {
  estimateBands: "/estimate-bands",
  estimateMetal: "/estimate-metal",
  estimateMineralWool: "/estimate-mineral-wool",
  insulationLanding: "/insulation-landing",
  estimateFormedInsulation: "/estimate-formed-insulation",
  estimateSheetInsulation: "/estimate-sheet-insulation",
  specificMaterialLanding: "/specific-material-landing",
  estimateAllPipeMaterialLanding: "/estimate-all-pipe-material-landing",
  chooseProjectType: "/choose-type-of-project",
  estimateAllPipeFormedInsulation: "/estimate-all-pipe-formed-insulation",
  estimateAllPipeSheetInsulation: "/estimate-all-pipe-sheet-insulation",
};
const chooseProjectTypeList = [
  // {
  //   title: "Tower",
  //   description: "Tower",
  //   // link: pathNames.estimateBands,
  //   image: tower,
  // },
  // {
  //   title: "Tank",
  //   description: "Tank",
  //   // link: pathNames.estimateBands,
  //   image: tank,
  // },
  // {
  //   title: "Vessel",
  //   description: "Vessel",
  //   // link: pathNames.estimateBands,
  //   image: vessel,
  // },
  {
    title: "Pipes",
    description: "Pipes",
    link: pathNames.estimateAllPipeMaterialLanding,
    image: pipes,
  },
];

const specificMaterialList = [
  {
    title: "Estimate bands",
    description: "Estimate bands.",
    link: pathNames.estimateBands,
    image: bandImage,
  },
  {
    title: "Estimate Insulation",
    description: "estimate mineral wool.",
    link: pathNames.insulationLanding,
    image: mineralWool,
  },
  {
    title: "Estimate Metal ",
    description: "estimate metal jacketing.",
    link: pathNames.estimateMetal,
    image: metalJacketing,
  },
];
const estimateEverythingList = [
  {
    title: "Sheet insulation",
    description: "Sheet insulation, calcium bricks, perlite, mineral wool.",
    link: pathNames.estimateAllPipeSheetInsulation,
    image: mineralWoolBricks,
  },
  {
    title: "Formed Pipe Cover",
    description: "Preformed insulation, calcium, perlite, ect.",
    link: pathNames.estimateAllPipeFormedInsulation,
    image: hardPipeCover,
  },
];

const insulationLinkList = [
  {
    title: "Sheets",
    description: "Sheet insulation.",
    link: pathNames.estimateMineralWool,
    image: mineralWoolBricks,
  },
  {
    title: "Formed Pipe Cover",
    description: "Hard insulation, calcium, perlite, ect.",
    link: pathNames.estimateFormedInsulation,
    image: hardPipeCover,
  },
];

const homeLinksList = [
  {
    title: "Estimate everything",
    description: "Insulation, metal, bands. all at once.",
    link: pathNames.chooseProjectType,
    image: metalJacketing,
  },
  {
    title: "Estimate Specific Material",
    description: "One material at a time.",
    link: pathNames.specificMaterialLanding,
    image: mineralWool,
  },
];

export {
  chooseProjectTypeList,
  specificMaterialList,
  insulationLinkList,
  homeLinksList,
  estimateEverythingList,
  pathNames,
};
