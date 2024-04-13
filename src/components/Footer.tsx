import GitHub from "../images/footer/GitHub.png";
import Instagram from "../images/footer/Instagram.png";
import LinkedIn from "../images/footer/LinkedIn.png";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["home", "main"]);

  return (
    <footer className="footer">
      <hr className="footer_divide-line" />
      <div className="footer__content">
        <form className="footer__content__subscription">
          <h3>{t("footer_email-title")}</h3>
          <div className="footer__content__subscription__form">
            <input
              className="footer__content__subscription__form_email"
              placeholder="example@email.com"
              type="email"
            />
            <button
              className="footer__content__subscription__form_submit"
              id="MailSubmit"
            >
              {t("footer_email-submit")}
            </button>
          </div>
        </form>
        <div className="footer__content__social-media">
          <div className="footer__content__social-media__title">
            <h3 className="footer__content__social-media__title_text">
              {t("footer_socials")}
            </h3>
            <div className="footer__content__social-media__title_arrow"></div>
          </div>
          <ul className="footer__content__social-media__list">
            <li className="footer__content__social-media__list_element">
              <a href="https://github.com/Daritork" target="_blank">
                <img alt="GitHub link" src={GitHub} />
              </a>
            </li>
            <li className="footer__content__social-media__list_element">
              <a
                href="https://linkedin.com/in/dmytro-diatlov-26aba7285"
                target="_blank"
              >
                <img alt="LinkedIn link" src={LinkedIn} />
              </a>
            </li>
            <li className="footer__content__social-media__list_element">
              <a href="https://www.instagram.com/dimon_lucky_/" target="_blank">
                <img alt="Instagram link" src={Instagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>
        {t("footer_text")}
        <a href="https://github.com/Daritork" target="_blank">
          {" "}
          @Daritork
        </a>
      </p>
    </footer>
  );
};

export default Footer;
