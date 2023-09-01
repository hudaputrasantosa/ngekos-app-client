import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

function TruncateText({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <span className="fpName">{text}</span>;
  } else {
    const truncatedText = text.substring(0, maxLength) + ' ..';
    return <span className="fpName" title={text}>{truncatedText}</span>;
  }
}

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/koses?limit=8");
  return (
    <div className="fp">     
{  loading ? ("Loading.. please wait") :  
(<>
{ data && data.map(item =>(
  <div className="fpItem" key={item._id}>
    <img
      src={item.photos}
      alt=""
      className="fpImg"
    />
    <TruncateText text={item.name} maxLength={28} />
    <span className="fpCity">{item.city}</span>
    <span className="fpPrice">{(item.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} / Bulan</span>
    <div className="fpRating">
      <button>4.5</button>
      <span>Kos {item.type}</span>
    </div>
  </div>
  ))}
  </>)
    }
    
    </div>
  );
};

export default FeaturedProperties;
