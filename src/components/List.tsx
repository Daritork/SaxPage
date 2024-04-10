import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
//* Images
import Soprillo from "../images/saxTypes/Soprillo.png";
import Sopranino from "../images/saxTypes/Sopranino.png";
import Studio_Soprano from "../images/saxTypes/Studio Soprano.png";
import Curved_Soprano from "../images/saxTypes/Curved Soprano.png";
import Alto from "../images/saxTypes/Alto.png";
import Tenor from "../images/saxTypes/Tenor.png";
import Baritone from "../images/saxTypes/Baritone.png";
import Bass from "../images/saxTypes/Bass.png";
import Contrabass from "../images/saxTypes/Contrabass.png";
import C from "../images/saxTypes/C -.png";
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

import { useTranslation } from "react-i18next";

function List() {
  //* i18n
  const { t } = useTranslation(["home", "main"]);

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

  return (
    <div className="saxTypes" id="Types">
      <h1>{t("Sax-types")}</h1>
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
            {t("search_subtitle")}
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
                  <h3>{saxType.name + " Saxophone"}</h3>
                  <img alt={saxType.imgPath} src={saxType.imgPath}></img>
                  <ul className="saxTypes__list__item_info-list">
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
                      <img
                        alt={saxType.pitchInfo}
                        src={saxType.pitchInfo}
                      ></img>
                    </li>
                  </ul>
                </div>
              )
          )}
        </div>
      ) : (
        <div className="saxTypes__list_no-items">
          <h2>{t("No_items")}</h2>
        </div>
      )}
    </div>
  );
}

export default List;
