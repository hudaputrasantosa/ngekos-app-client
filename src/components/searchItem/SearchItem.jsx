import { Link } from "react-router-dom";
import "./searchItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siTaxiOp">Kos {item.type}</span>
        <div className="hotelAddress">
        <FontAwesomeIcon icon={faLocationDot} />
         <span className="siSubtitle">
          {item.city}
        </span>
        </div>
       
        <span className="siFeatures">
         Fasilitas : 
         <p className="siFeaturesFacility">
         { (item.facility.length > 0) ? item.facility.join(', ') : "Tidak ditampilkan"}
         </p>
        </span>
      </div>
      <div className="siDetails">
          <span className="siDetailsStock">Tersedia {item.stock} Kamar</span>
     
        <div className="siDetailTexts">
          <span className="siPrice">{(item.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).substring(0, (item.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).length - 3 )} / Bulan</span>
          <Link to={`/kos/${item._id}`}>
          <button className="siCheckButton">Cek Sekarang</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
