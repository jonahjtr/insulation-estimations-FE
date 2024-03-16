import BandImage from "./images/heroLinks/bands2.jpg";
import mineralWool from "./images/heroLinks/mineralWool.jpeg";
import metalJacketing from "./images/heroLinks/metal.jpeg";
import MineralWoolBricks from "./images/heroLinks/mineralWoolBricks.jpeg";
import HardPipeCover from "./images/heroLinks/hardPipeCover.jpeg";
import tempWrap from "./images/heroLinks/tempWrap.jpg";

const heroLinkList = [
  {
    title: "Estimate bands",
    description: "Estimate bands",
    link: "/estimate-bands",
    image: BandImage,
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
    image: MineralWoolBricks,
  },
  {
    title: "Formed Pipe Cover",
    description: "Formed Pipe Cover",
    link: "/estimate-formed-insulation",
    image: HardPipeCover,
  },
];

export { heroLinkList, insulationLinkList };
