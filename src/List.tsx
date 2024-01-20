import { useState } from "react";

function List() {
  const [saxTypes, setsaxTypes] = useState<
    {
      id: any;
      name: string;
      heightCm?: number;
      heightIn?: number;
      pitch: string;
    }[]
  >([
    { id: 1, name: "Sopranino", pitch: "E♭", heightCm: 33, heightIn: 13 },
    { id: 2, name: "Studio Soprano", pitch: "B♭", heightCm: 71, heightIn: 28 },
    { id: 3, name: "Curved Soprano", pitch: "B♭", heightCm: 46, heightIn: 18 },
    { id: 4, name: "Alto", pitch: "E♭", heightCm: 74, heightIn: 29 },
    { id: 5, name: "Tenor", pitch: "B♭", heightCm: 94, heightIn: 37 },
    { id: 6, name: "Baritone", pitch: "E♭", heightCm: 132, heightIn: 52 },
    { id: 7, name: "Bass", pitch: "B♭" },
    { id: 8, name: "Contrabass", pitch: "E♭", heightCm: 200, heightIn: 79 },
    { id: 9, name: "C -", pitch: "C" },
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
            <img src={"./src/images/saxTypes/" + saxType.name + ".png"}></img>
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
