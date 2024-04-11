import { useTranslation } from "react-i18next";

import deco from "../images/history/deco.png";

const History = () => {
  const { t } = useTranslation(["home", "main"]);

  return (
    <article className="history" id="History">
      <h1>{t("History")}</h1>
      <p className="history_article" data-i18n="History_article">
        {t("History_article_1")}
        <span className="gold">{t("History_article_span_1")}</span>
        {t("History_article_2")}
        <span className="gold">{t("History_article_span_2")}</span>
        {t("History_article_3")}
        <span className="gold">{t("History_article_span_3")}</span>
        {t("History_article_4")}
        <span className="gold">{t("History_article_span_4")}</span>.
      </p>
      <img src={deco} alt="deco" />
    </article>
  );
};

export default History;
