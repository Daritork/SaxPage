import { useState } from "react";
import Soprillo from "./images/saxTypes/Soprillo.png";
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
  //*Saxophone List
  const [saxTypes] = useState<
    {
      id: any;
      name: string;
      heightCm: number;
      heightIn: number;
      pitch: string;
      imgPath: any;
    }[]
  >([
    {
      id: 1,
      name: "Soprillo",
      pitch: "B",
      heightCm: 33,
      heightIn: 13,
      imgPath: Soprillo,
    },
    {
      id: 2,
      name: "Sopranino",
      pitch: "Es",
      heightCm: 68,
      heightIn: 27,
      imgPath: Sopranino,
    },
    {
      id: 3,
      name: "Studio Soprano",
      pitch: "B",
      heightCm: 71,
      heightIn: 28,
      imgPath: Studio_Soprano,
    },
    {
      id: 4,
      name: "Curved Soprano",
      pitch: "B",
      heightCm: 46,
      heightIn: 18,
      imgPath: Curved_Soprano,
    },
    {
      id: 5,
      name: "Alto",
      pitch: "Es",
      heightCm: 74,
      heightIn: 29,
      imgPath: Alto,
    },
    {
      id: 6,
      name: "Tenor",
      pitch: "B",
      heightCm: 94,
      heightIn: 37,
      imgPath: Tenor,
    },
    {
      id: 7,
      name: "Baritone",
      pitch: "Es",
      heightCm: 132,
      heightIn: 52,
      imgPath: Baritone,
    },
    {
      id: 8,
      name: "Bass",
      pitch: "B",
      heightCm: 133,
      heightIn: 52,
      imgPath: Bass,
    },
    {
      id: 9,
      name: "Contrabass",
      pitch: "Es",
      heightCm: 200,
      heightIn: 79,
      imgPath: Contrabass,
    },
    {
      id: 10,
      name: "C -",
      pitch: "C",
      heightCm: 64,
      heightIn: 25,
      imgPath: C,
    },
  ]);
  //* Use content prefer
  const [filter, setFilter] = useState<{ pitch: string; lengthIn: string }>({
    pitch: "All",
    lengthIn: "cm",
  });
  //* Search value
  const [search, setSearch] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  function onPitchChange(newPitch: string) {
    setFilter({ pitch: newPitch, lengthIn: filter.lengthIn });
  }

  function onLengthInChange(newMeasures: string) {
    setFilter({ pitch: filter.pitch, lengthIn: newMeasures });
  }

  function onChangeSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <>
      <h1>Saxophone Types</h1>
      <form
        className="saxTypes__filter-fields"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="saxTypes__filter-fields_searchbar"
          placeholder="Search"
          value={search}
          onChange={(e) => onChangeSearch(e)}
        />
        <div className="saxTypes__filter-fields__field">
          <h3>Pitch:</h3>
          <div className="saxTypes__filter-fields__field_radios">
            <input
              id="All"
              type="radio"
              value={"All"}
              name="Pitch"
              checked={filter.pitch === "All"}
              onChange={() => onPitchChange("All")}
            />
            <input
              id="Es"
              type="radio"
              value={"Es"}
              name="Pitch"
              checked={filter.pitch === "Es"}
              onChange={() => onPitchChange("Es")}
            />
            <input
              id="B"
              type="radio"
              value={"B"}
              name="Pitch"
              checked={filter.pitch === "B"}
              onChange={() => onPitchChange("B")}
            />
            <input
              id="C"
              type="radio"
              value={"C"}
              name="Pitch"
              checked={filter.pitch === "C"}
              onChange={() => onPitchChange("C")}
            />
          </div>
        </div>
        <div className="saxTypes__filter-fields__field">
          <h3>Length measures:</h3>
          <div className="saxTypes__filter-fields__field_radios">
            <input
              id="cm"
              type="radio"
              value={"cm"}
              name="lenght"
              checked={filter.lengthIn === "cm"}
              onChange={() => onLengthInChange("cm")}
            />
            <input
              id="in"
              type="radio"
              value={"in"}
              name="lenght"
              checked={filter.lengthIn === "in"}
              onChange={() => onLengthInChange("in")}
            />
          </div>
        </div>
      </form>
      <div className="saxTypes__list">
        {saxTypes.map(
          (saxType) =>
            (saxType.pitch === filter.pitch || filter.pitch === "All") && (
              <div className="saxTypes__list__item" key={saxType.id}>
                <img src={saxType.imgPath}></img>
                <h3>{saxType.name + " Saxophone"}</h3>
                <ul className="saxTypes__list__item_list">
                  <li>
                    <h4>Pitch: {saxType.pitch}</h4>
                  </li>
                  <li>
                    <h4>
                      Height: ~
                      {filter.lengthIn === "cm"
                        ? saxType.heightCm + " cm"
                        : saxType.heightIn + " in"}
                    </h4>
                  </li>
                </ul>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default List;
