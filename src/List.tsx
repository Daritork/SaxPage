import { useState } from "react";
import Sopranino from "./images/saxTypes/Sopranino.png";
import Studio_Soprano from "./images/saxTypes/Studio Soprano.png";
import Curved_Soprano from "./images/saxTypes/Curved Soprano.png";
import Alto from "./images/saxTypes/Alto.png";
import Tenor from "./images/saxTypes/Tenor.png";
import Baritone from "./images/saxTypes/Baritone.png";
import Bass from "./images/saxTypes/Bass.png";
import Contrabass from "./images/saxTypes/Contrabass.png";
import C from "./images/saxTypes/C -.png";

function List() {
  const [saxTypes] = useState<
    {
      id: any;
      name: string;
      heightCm?: number;
      heightIn?: number;
      pitch: string;
      imgPath: any;
    }[]
  >([
    {
      id: 1,
      name: "Sopranino",
      pitch: "E♭",
      heightCm: 33,
      heightIn: 13,
      imgPath: Sopranino,
    },
    {
      id: 2,
      name: "Studio Soprano",
      pitch: "B♭",
      heightCm: 71,
      heightIn: 28,
      imgPath: Studio_Soprano,
    },
    {
      id: 3,
      name: "Curved Soprano",
      pitch: "B♭",
      heightCm: 46,
      heightIn: 18,
      imgPath: Curved_Soprano,
    },
    {
      id: 4,
      name: "Alto",
      pitch: "E♭",
      heightCm: 74,
      heightIn: 29,
      imgPath: Alto,
    },
    {
      id: 5,
      name: "Tenor",
      pitch: "B♭",
      heightCm: 94,
      heightIn: 37,
      imgPath: Tenor,
    },
    {
      id: 6,
      name: "Baritone",
      pitch: "E♭",
      heightCm: 132,
      heightIn: 52,
      imgPath: Baritone,
    },
    { id: 7, name: "Bass", pitch: "B♭", imgPath: Bass },
    {
      id: 8,
      name: "Contrabass",
      pitch: "E♭",
      heightCm: 200,
      heightIn: 79,
      imgPath: Contrabass,
    },
    { id: 9, name: "C -", pitch: "C", imgPath: C },
  ]);

  function handleSubmit() {}

  return (
    <>
      <h1>Saxophone Types</h1>
      <form className="saxTypes__filter-fields" onSubmit={handleSubmit}>
        <input />
        <div className="saxTypes__filter-fields__field">
          <h3>Pitch</h3>
          <div className="saxTypes__filter-fields__field_ratios"></div>
        </div>
        <div className="saxTypes__filter-fields__field">
          <h3>Length measures</h3>
          <div className="saxTypes__filter-fields__field_ratios"></div>
        </div>
        <button onClick={handleSubmit}>Filter</button>
      </form>
      <div className="saxTypes__list">
        {saxTypes.map((saxType) => (
          <div className="saxTypes__list__item" key={saxType.id}>
            <img src={saxType.imgPath}></img>
            <h3>{saxType.name + " Saxophone"}</h3>
            <ul className="saxTypes__list__item_list  ">
              <li>
                <h4>Pitch: {saxType.pitch}</h4>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
