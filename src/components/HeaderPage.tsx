import SaxBody from "../images/header/swiper/Body.png";
import Mouthpiece from "../images/header/swiper/Mouthpiece.png";
import Reed from "../images/header/swiper/Reed.png";
import Saxophone from "../images/header/neonSax.png";
import Sax_player from "../images/header/Player.png";
import Sax_playerHand from "../images/header/PlayerHand.png";

import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
          <Swiper
            // install Swiper modules
            direction={"vertical"}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img loading="lazy" alt="Sax Body" src={SaxBody} />
              <p>{t("Body_material")}</p>
              <h2>{t("Body_title")}</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                alt="Swiper Bullet 1 (Sax Mouthpiece)"
                src={Mouthpiece}
              />
              <p>{t("Mouthpiece_material")}</p>
              <h2>{t("Mouthpiece_title")}</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" alt="Swiper Bullet 1 (Sax Reed)" src={Reed} />
              <p>{t("Reed_material")}</p>
              <p>{t("Reed_strength")}</p>
              <h2>{t("Reed_title")}</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <img
        loading="lazy"
        alt="neon Alto Sax"
        className="picture fixed"
        src={Saxophone}
        id="movingSax"
      />
      <img
        loading="lazy"
        alt="Sax Player"
        className="player"
        src={Sax_player}
      />
      <img
        loading="lazy"
        alt="Sax Player"
        className="player hand"
        src={Sax_playerHand}
      />
      <div>
        <h1 className="header_notes">♫</h1>
        <h1 className="header_notes">♪</h1>
        <h1 className="header_notes">♫</h1>
        <h1 className="header_notes">♪</h1>
        <h1 className="header_notes">♫</h1>
      </div>
    </header>
  );
};

export default HeaderPage;
