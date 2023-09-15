import { Link } from "react-router-dom";
import "./searchItem.css";

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
        <span className="siSubtitle">
          {item.city}
        </span>
        <span className="siFeatures">
         Fasilitas : { (item.facility.length > 0) ? item.facility.join(', ') : "Tidak ditampilkan"}
        </span>
        <span className="siDistance">{item.description}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <button>Tersedia {item.stock} Kamar</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{(item.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).substring(0, (item.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).length - 3 )}</span>
          <Link to={`/kos/${item._id}`}>
          <button className="siCheckButton">Cek Sekarang</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
