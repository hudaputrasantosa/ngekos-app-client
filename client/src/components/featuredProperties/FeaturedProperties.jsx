import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/koses");

  return (
    <div className="fp">
      
{  loading ? ("Loading.. please wait") :  
(<>
{ data.map(item =>(
  <div className="fpItem">
    <img
      src={item.photos}
      alt=""
      className="fpImg"
    />
    <span className="fpName">{item.name}</span>
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
