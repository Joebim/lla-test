import amina from "../../../public/images/aboutAsset/Amina.svg";
import rukky from "../../../public/images/aboutAsset/angel.svg";
import chuks from "../../../public/images/aboutAsset/chuks.svg";
import frank from "../../../public/images/aboutAsset/frank.svg";
import nurse from "../../../public/images/aboutAsset/nurse.svg";

interface ImageData {
  id: number;
  name: string;
  dept: string;
  img: string;
}

const imgData: ImageData[] = [
  {
    id: 1,
    name: "rukky ayinde",
    dept: "head design",
    img: rukky,
  },
  {
    id: 2,
    name: "frank ezene",
    dept: "head development",
    img: frank,
  },
  {
    id: 4,
    name: "Ameenah Ameenah",
    dept: "head product",
    img: amina,
  },
  {
    id: 5,
    name: "Desmond Chuks",
    dept: "head technical",
    img: chuks,
  },
  {
    id: 6,
    name: "Techy Nurse",
    dept: "head DevOps",
    img: nurse,
  },
];

export default imgData;
