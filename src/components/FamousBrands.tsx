import {
  Cannonball,
  Jupiter,
  Keilwerth,
  PMauriat,
  Selmer,
  Yamaha,
  Yanagisawa,
} from "../images/export";

const FamousBrands = () => {
  return (
    <div className="famouns-brands">
      <div className="famouns-brands_fade" />
      <div className="famouns-brands__marquee">
        <img src={Yanagisawa} alt="Yanagisawa" />
        <img src={Keilwerth} alt="Keilwerth" />
        <img src={Selmer} alt="Selmer" />
        <img src={Yamaha} alt="Yamaha" />
        <img src={PMauriat} alt="Paul Mauriat" />
        <img src={Cannonball} alt="Cannpnball" />
        <img src={Jupiter} alt="Jupiter" />
        <img src={Yanagisawa} alt="Yanagisawa" />
        <img src={Keilwerth} alt="Keilwerth" />
        <img src={Selmer} alt="Selmer" />
        <img src={Yamaha} alt="Yamaha" />
        <img src={PMauriat} alt="Paul Mauriat" />
        <img src={Cannonball} alt="Cannpnball" />
        <img src={Jupiter} alt="Jupiter" />
      </div>
    </div>
  );
};

export default FamousBrands;
