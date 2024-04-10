import Yanagisawa from "../images/famousBrands/Yanagisawa.png";
import Keilwerth from "../images/famousBrands/Keilwerth.png";
import Selmer from "../images/famousBrands/Selmer.png";
import Yamaha from "../images/famousBrands/Yamaha.png";
import PMauriat from "../images/famousBrands/PMauriat.png";
import Cannonball from "../images/famousBrands/Cannonball.png";
import Jupiter from "../images/famousBrands/Jupiter.png";

const FamousBrands = () => {
  return (
    <div className="famouns-brands">
      <div className="famouns-brands__marquee">
        <span>
          <img src={Yanagisawa} alt="Yanagisawa" />
          <img src={Keilwerth} alt="Keilwerth" />
          <img src={Selmer} alt="Selmer" />
          <img src={Yamaha} alt="Yamaha" />
          <img src={PMauriat} alt="Paul Mauriat" />
          <img src={Cannonball} alt="Cannpnball" />
          <img src={Jupiter} alt="Jupiter" />
        </span>
        <span>
          <img src={Yanagisawa} alt="Yanagisawa" />
          <img src={Keilwerth} alt="Keilwerth" />
          <img src={Selmer} alt="Selmer" />
          <img src={Yamaha} alt="Yamaha" />
          <img src={PMauriat} alt="Paul Mauriat" />
          <img src={Cannonball} alt="Cannpnball" />
          <img src={Jupiter} alt="Jupiter" />
        </span>
      </div>
    </div>
  );
};

export default FamousBrands;
