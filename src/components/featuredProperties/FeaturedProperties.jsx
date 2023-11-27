import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

function TruncateText({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <span className="fpName">{text}</span>;
  } else {
    const truncatedText = text.substring(0, maxLength) + " ..";
    return (
      <span className="fpName" title={text}>
        {truncatedText}
      </span>
    );
  }
}

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/koses?limit=8");
  return (
    <div className="fp">
      {loading ? (
        "Loading.. please wait"
      ) : (
        <>
          {data &&
            data.map((item) => (
              <div className="fpItem" key={item._id}>
                <img src={item.photos[0]} alt="" className="fpImg" />
                <TruncateText text={item.name} maxLength={28} />
                <span className="fpCity">
                  {item.city} <button className="btn-detail-rate">4.5</button>
                </span>
                <span className="fpPrice">
                  {item.price
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                    .substring(
                      0,
                      item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).length - 3
                    )}{" "}
                  / Bulan
                </span>
                <div className="fpRating">
                  <span>Kos {item.type}</span>
                  <Link to={`/kos/${item._id}`}>
                    <button className="btn-detail">Lihat Detail</button>
                  </Link>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
