import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
//* Images
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
//*PichesInfo
import P_Soprillo from "./images/saxTypes/pitches/Soprillo.svg";
import P_Sopranino from "./images/saxTypes/pitches/Sopranino.svg";
import P_Soprano from "./images/saxTypes/pitches/Soprano.svg";
import P_Alto from "./images/saxTypes/pitches/Alto.svg";
import P_Tenor from "./images/saxTypes/pitches/Tenor.svg";
import P_Baritone from "./images/saxTypes/pitches/Baritone.svg";
import P_Bass from "./images/saxTypes/pitches/Bass.svg";
import P_Contrabass from "./images/saxTypes/pitches/Contrabass.svg";
import P_C from "./images/saxTypes/pitches/C.svg";

function List() {
  //*Auto-Animate
  const [parent] = useAutoAnimate({ duration: 200 });
  //*Saxophone List
  const [saxTypes] = useState<
    {
      id: number;
      name: string;
      heightCm: number;
      heightIn: number;
      pitch: string;
      imgPath: any;
      pitchInfo: any;
      infoBox: boolean;
    }[]
  >([
    {
      id: 1,
      name: "Soprillo",
      pitch: "B",
      heightCm: 33,
      heightIn: 13,
      imgPath: Soprillo,
      pitchInfo: P_Soprillo,
      infoBox: false,
    },
    {
      id: 2,
      name: "Sopranino",
      pitch: "Es",
      heightCm: 68,
      heightIn: 27,
      imgPath: Sopranino,
      pitchInfo: P_Sopranino,
      infoBox: false,
    },
    {
      id: 3,
      name: "Studio Soprano",
      pitch: "B",
      heightCm: 71,
      heightIn: 28,
      imgPath: Studio_Soprano,
      pitchInfo: P_Soprano,
      infoBox: false,
    },
    {
      id: 4,
      name: "Curved Soprano",
      pitch: "B",
      heightCm: 46,
      heightIn: 18,
      imgPath: Curved_Soprano,
      pitchInfo: P_Soprano,
      infoBox: false,
    },
    {
      id: 5,
      name: "Alto",
      pitch: "Es",
      heightCm: 74,
      heightIn: 29,
      imgPath: Alto,
      pitchInfo: P_Alto,
      infoBox: false,
    },
    {
      id: 6,
      name: "Tenor",
      pitch: "B",
      heightCm: 94,
      heightIn: 37,
      imgPath: Tenor,
      pitchInfo: P_Tenor,
      infoBox: false,
    },
    {
      id: 7,
      name: "Baritone",
      pitch: "Es",
      heightCm: 132,
      heightIn: 52,
      imgPath: Baritone,
      pitchInfo: P_Baritone,
      infoBox: false,
    },
    {
      id: 8,
      name: "Bass",
      pitch: "B",
      heightCm: 158,
      heightIn: 62,
      imgPath: Bass,
      pitchInfo: P_Bass,
      infoBox: false,
    },
    {
      id: 9,
      name: "Contrabass",
      pitch: "Es",
      heightCm: 200,
      heightIn: 79,
      imgPath: Contrabass,
      pitchInfo: P_Contrabass,
      infoBox: false,
    },
    {
      id: 10,
      name: "C - Melody",
      pitch: "C",
      heightCm: 64,
      heightIn: 25,
      imgPath: C,
      pitchInfo: P_C,
      infoBox: false,
    },
  ]);

  //* User content prefer
  const [filter, setFilter] = useState<{
    pitch: string;
    lengthIn: string;
    searchTerm: string;
  }>({
    pitch: "All",
    lengthIn: "cm",
    searchTerm: "",
  });

  //*Search result
  const [searchResult, setSearchResult] = useState<
    {
      id: number;
      name: string;
      heightCm: number;
      heightIn: number;
      pitch: string;
      imgPath: any;
      pitchInfo: any;
      infoBox: boolean;
    }[]
  >([]);

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  //*Filter Changers
  function onPitchChange(newPitch: string) {
    //*Filter settings change
    setFilter({
      pitch: newPitch,
      lengthIn: filter.lengthIn,
      searchTerm: filter.searchTerm,
    });
  }

  function onLengthInChange(newMeasures: string) {
    //*Filter settings change
    setFilter({
      pitch: filter.pitch,
      lengthIn: newMeasures,
      searchTerm: filter.searchTerm,
    });
  }

  //* Search Function
  function onChangeSearch(e: any) {
    setFilter({
      pitch: filter.pitch,
      lengthIn: filter.lengthIn,
      searchTerm: e.target.value,
    });
  }

  //* Search method
  useEffect(() => {
    if (filter.pitch === "All") {
      const results: any[] = saxTypes.filter((type) =>
        type.name.toLowerCase().includes(filter.searchTerm.toLowerCase())
      );
      setSearchResult(results);
    } else {
      const results: any[] = saxTypes.filter(
        (type) =>
          type.name.toLowerCase().includes(filter.searchTerm.toLowerCase()) &&
          type.pitch === filter.pitch
      );
      setSearchResult(results);
    }
  }, [filter]);

  //** InfoBox methods */

  function infoBox(itemId: any) {
    setFilter({
      pitch: filter.pitch,
      lengthIn: filter.lengthIn,
      searchTerm: filter.searchTerm,
    });
    searchResult.map((saxtype) => {
      if (saxtype.id == itemId) {
        saxtype.infoBox = !saxtype.infoBox;
      } else {
        saxtype.infoBox = false;
      }
      return saxtype;
    });
  }

  return (
    <>
      <h1>Saxophone Types</h1>
      <form
        className="saxTypes__filter-fields"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="saxTypes__filter-fields__searchbar">
          <input
            type="text"
            className="saxTypes__filter-fields__searchbar_input"
            placeholder="Search Name"
            value={filter.searchTerm}
            onChange={(e) => onChangeSearch(e)}
          />
          <span className="saxTypes__filter-fields__searchbar_span">
            Saxophone
          </span>
        </div>
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
      {searchResult.length > 0 ? (
        <div className="saxTypes__list" ref={parent}>
          {searchResult.map(
            (saxType) =>
              (saxType.pitch === filter.pitch || filter.pitch === "All") && (
                <div className="saxTypes__list__item" key={saxType.id}>
                  <button
                    className="info-but"
                    onClick={() => infoBox(saxType.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4em"
                      height="4em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fdbd01"
                        d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
                      />
                    </svg>
                  </button>
                  <img alt={saxType.imgPath} src={saxType.imgPath}></img>
                  <h3>{saxType.name + " Saxophone"}</h3>
                </div>
              )
          )}
        </div>
      ) : (
        <div className="saxTypes__list_no-items">
          <h2>🎷 No Items Found 🎷</h2>
        </div>
      )}
      {saxTypes.map((saxType) => (
        <div
          className={saxType.infoBox === false ? "info-box" : "info-box active"}
          key={saxType.id + "Info"}
        >
          <button onClick={() => infoBox(saxType.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 24 24"
            >
              <path
                fill="gray"
                d="m8.4 16.308l3.6-3.6l3.6 3.6l.708-.708l-3.6-3.6l3.6-3.6l-.708-.708l-3.6 3.6l-3.6-3.6l-.708.708l3.6 3.6l-3.6 3.6zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
              />
            </svg>
          </button>
          <div className="info-box_columns">
            <img alt={saxType.imgPath} src={saxType.imgPath}></img>
            <div className="info-box_second">
              <h2>
                <u>{saxType.name}</u>
              </h2>
              <ul className="info-box_list">
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
                <li>
                  <img alt={saxType.pitchInfo} src={saxType.pitchInfo}></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
