import useFetch from "../../hooks/useFetch.js";
import "./featured.css";


const Featured = () => {
  const {data, loading, error} = useFetch("/koses?featured=true")

  return (
    <div className="featured">
    { loading ? ( "Loading.. Please wait") : (
      <>
     { data.map(item => (
     <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{item.city}</h1>
          <h2> properties</h2>
        </div>
      </div>
     )) 
     
      }
      </>
      )}
    </div>
  );
};

export default Featured;
