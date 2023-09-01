import useFetch from "../../hooks/useFetch.js";
import "./featured.css";


const Featured = () => {
  const {data, loading} = useFetch("/koses?featured=true");
  return (
    <div className="featured">
    { loading ? ( "Loading.. Please wait") : (
      <>
     { data && data.map(item => (
     <div className="featuredItem" key={item._id}>
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2022/10/20/semarangjpg-20221020111008.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{item.city}</h1>
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
