//* Images
import {
  Alto,
  Baritone,
  Bass,
  C,
  Contrabass,
  Curved_Soprano,
  Sopranino,
  Soprillo,
  Studio_Soprano,
  Tenor,
} from "../images/export";

//*PichesInfo
import P_Soprillo from "../images/saxTypes/pitches/Soprillo.svg";
import P_Sopranino from "../images/saxTypes/pitches/Sopranino.svg";
import P_Soprano from "../images/saxTypes/pitches/Soprano.svg";
import P_Alto from "../images/saxTypes/pitches/Alto.svg";
import P_Tenor from "../images/saxTypes/pitches/Tenor.svg";
import P_Baritone from "../images/saxTypes/pitches/Baritone.svg";
import P_Bass from "../images/saxTypes/pitches/Bass.svg";
import P_Contrabass from "../images/saxTypes/pitches/Contrabass.svg";
import P_C from "../images/saxTypes/pitches/C.svg";

//? List type
export interface SaxList {
  id: number;
  name: string;
  heightCm: number;
  heightIn: number;
  pitch: string;
  imgPath: any;
  pitchInfo: any;
}

//? Actual list with Saxophones including their info
export const saxTypes: SaxList[] = [
  {
    id: 1,
    name: "Soprillo",
    pitch: "B",
    heightCm: 33,
    heightIn: 13,
    imgPath: Soprillo,
    pitchInfo: P_Soprillo,
  },
  {
    id: 2,
    name: "Sopranino",
    pitch: "Es",
    heightCm: 68,
    heightIn: 27,
    imgPath: Sopranino,
    pitchInfo: P_Sopranino,
  },
  {
    id: 3,
    name: "Studio Soprano",
    pitch: "B",
    heightCm: 71,
    heightIn: 28,
    imgPath: Studio_Soprano,
    pitchInfo: P_Soprano,
  },
  {
    id: 4,
    name: "Curved Soprano",
    pitch: "B",
    heightCm: 46,
    heightIn: 18,
    imgPath: Curved_Soprano,
    pitchInfo: P_Soprano,
  },
  {
    id: 5,
    name: "Alto",
    pitch: "Es",
    heightCm: 74,
    heightIn: 29,
    imgPath: Alto,
    pitchInfo: P_Alto,
  },
  {
    id: 6,
    name: "Tenor",
    pitch: "B",
    heightCm: 94,
    heightIn: 37,
    imgPath: Tenor,
    pitchInfo: P_Tenor,
  },
  {
    id: 7,
    name: "Baritone",
    pitch: "Es",
    heightCm: 132,
    heightIn: 52,
    imgPath: Baritone,
    pitchInfo: P_Baritone,
  },
  {
    id: 8,
    name: "Bass",
    pitch: "B",
    heightCm: 158,
    heightIn: 62,
    imgPath: Bass,
    pitchInfo: P_Bass,
  },
  {
    id: 9,
    name: "Contrabass",
    pitch: "Es",
    heightCm: 200,
    heightIn: 79,
    imgPath: Contrabass,
    pitchInfo: P_Contrabass,
  },
  {
    id: 10,
    name: "C - Melody",
    pitch: "C",
    heightCm: 64,
    heightIn: 25,
    imgPath: C,
    pitchInfo: P_C,
  },
];
