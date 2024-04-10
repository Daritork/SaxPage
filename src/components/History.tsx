import { useTranslation } from "react-i18next";

import deco from "../images/history/deco.png";

const History = () => {
  const { t } = useTranslation(["home", "main"]);

  return (
    <article className="history" id="History">
      <h1>{t("History")}</h1>
      <p className="history_article" data-i18n="History_article">
        The saxophone is one of the few instruments in wide use today that were
        invented by a<span className="gold"> single individual</span>. The
        inventer,
        <span className="gold"> Antoine-Joseph Sax (1814 - 1894)</span>, was
        known by his nickname "Adolphe Sax", that is why it is called the
        saxophone. History tells us that Adolphe Sax was a musical instrument
        designer born in Dinant, Belgium who could play, design and create many
        wind instruments. His idea was to
        <span className="gold">
          {" "}
          an instrument that combined the best qualities of a woodwind
          instrument with the best qualities of a brass instrument,
        </span>
        and in the 1840s he conceived the saxophone. This invention was
        <span className="gold">patented in Paris in 1846</span>.
      </p>
      <img src={deco} alt="deco" />
    </article>
  );
};

export default History;
