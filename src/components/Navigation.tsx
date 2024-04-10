import Logo from "../images/nav/logo.svg";

import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation(["home", "main"]);

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  };

  return (
    <nav className="nav">
      <a href="#">
        <img alt="logo" src={Logo} className="nav_logo" />
      </a>
      <div className="nav_right-side">
        <ul className="nav__links navbar-nav">
          <li className="nav-item">
            <a className="nav-link" id="scrollToWelcome">
              {t("nav__link_welcome")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="scrollToSaxophoneParts">
              {t("Sax-parts")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="scrollToHistory">
              {t("History")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="scrollToTypesOfSax">
              {t("Sax-types")}
            </a>
          </li>
        </ul>
        <form
          id="languageChange"
          className="nav__language-change"
          onChange={onClickLanguageChange}
        >
          <div className="nav_divide-line"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.5vh"
            height="3.5vh"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFF"
              d="M12 22q-2.05 0-3.875-.788t-3.187-2.15q-1.363-1.362-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188q-1.362 1.362-3.175 2.15T12 22m0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.825-.787-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55m5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55M4.25 14h3.4q-.075-.5-.112-.987T7.5 12q0-.525.038-1.012T7.65 10h-3.4q-.125.5-.187.988T4 12q0 .525.063 1.013T4.25 14m5.4 0h4.7q.075-.5.113-.987T14.5 12q0-.525-.038-1.012T14.35 10h-4.7q-.075.5-.112.988T9.5 12q0 .525.038 1.013T9.65 14m6.7 0h3.4q.125-.5.188-.987T20 12q0-.525-.062-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12q0 .525-.038 1.013T16.35 14m-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8M10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8"
            />
          </svg>
          <select
            className="nav__language-change_changer"
            form="languageChange"
            id="changer"
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="ukr">Українська</option>
            <option value="ru">русский язік</option>
          </select>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
