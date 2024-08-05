import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { SaxList, saxTypes } from "./SaxList";

function List() {
  //* i18n
  const { t } = useTranslation(["home", "main"]);
  console.log(i18next.language);

  //*Auto-Animate
  const [parent] = useAutoAnimate({ duration: 200 });

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
  const [searchResult, setSearchResult] = useState<SaxList[]>([]);

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
        type.name[1].toLowerCase().includes(filter.searchTerm.toLowerCase())
      );
      setSearchResult(results);
    } else {
      const results: any[] = saxTypes.filter(
        (type) =>
          type.name[0]
            .toLowerCase()
            .includes(filter.searchTerm.toLowerCase()) &&
          type.pitch[0] === filter.pitch
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
            placeholder={t("filter_placeholder")}
            value={filter.searchTerm}
            onChange={(e) => onChangeSearch(e)}
          />
        </div>
        <div className="saxTypes__filter-fields__field">
          <h3>{t("filter_pitch")}</h3>
          <div className="saxTypes__filter-fields__field_radios">
            <input
              id={t("filter_all")}
              type="radio"
              value={"All"}
              name="Pitch"
              checked={filter.pitch === "All"}
              onChange={() => onPitchChange("All")}
            />
            <input
              id={t("filter_Es")}
              type="radio"
              value={"Es"}
              name="Pitch"
              checked={filter.pitch === "Es"}
              onChange={() => onPitchChange("Es")}
            />
            <input
              id={t("filter_B")}
              type="radio"
              value={"B"}
              name="Pitch"
              checked={filter.pitch === "B"}
              onChange={() => onPitchChange("B")}
            />
            <input
              id={t("filter_C")}
              type="radio"
              value={"C"}
              name="Pitch"
              checked={filter.pitch === "C"}
              onChange={() => onPitchChange("C")}
            />
          </div>
        </div>
        <div className="saxTypes__filter-fields__field">
          <h3>{t("filter_length")}</h3>
          <div className="saxTypes__filter-fields__field_radios">
            <input
              id={t("filter_cm")}
              type="radio"
              value={"cm"}
              name="lenght"
              checked={filter.lengthIn === "cm"}
              onChange={() => onLengthInChange("cm")}
            />
            <input
              id={t("filter_in")}
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
                  <h3>
                    {t("sax_name_" + saxType.name) + " " + t("saxophone")}
                  </h3>
                  <img alt={saxType.imgPath} src={saxType.imgPath}></img>
                  <ul className="saxTypes__list__item_info-list">
                    <li>
                      <h4>
                        {t("filter_pitch")} {t("filter_" + saxType.pitch)}
                      </h4>
                    </li>
                    <li>
                      <h4>
                        {t("height")} ~
                        {filter.lengthIn === "cm"
                          ? saxType.heightCm + " " + t("filter_cm")
                          : saxType.heightIn + " " + t("filter_in")}
                      </h4>
                    </li>
                    <img
                      alt={saxType.pitchInfo}
                      src={saxType.pitchInfo}
                      className="svg"
                    ></img>
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
