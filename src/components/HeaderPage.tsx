import SaxBody from "../images/header/swiper/Body.png";
import Mouthpiece from "../images/header/swiper/Mouthpiece.png";
import Reed from "../images/header/swiper/Body.png";
import Saxophone from "../images/header/neonSax.png";

import { useTranslation } from "react-i18next";

const HeaderPage = () => {
  const { t } = useTranslation(["home", "main"]);

  return (
    <header className="header" id="Welcome">
      <div className="header_title">
        <span>S</span>
        <span>a</span>
        <span>x</span>
        <span>o</span>
        <span>p</span>
        <span>h</span>
        <span>o</span>
        <span>n</span>
        <span>e</span>
      </div>
      <div className="header__second-slide">
        <div className="header__second-slide_swiper">
          <h2>{t("Sax-parts")}</h2>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img alt="Swiper Bullet 1 (Sax Body)" src={SaxBody} />
              </div>
              <div className="swiper-slide">
                <img alt="Swiper Bullet 1 (Sax Mouthpiece)" src={Mouthpiece} />
              </div>
              <div className="swiper-slide">
                <img alt="Swiper Bullet 1 (Sax Reed)" src={Reed} />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <img
        alt="neon Alto Sax"
        className="picture fixed"
        src={Saxophone}
        id="movingSax"
      />
    </header>
  );
};

export default HeaderPage;
