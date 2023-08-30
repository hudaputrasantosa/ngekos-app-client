import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error, reFetch } = useFetch("/koses/countByType");
  const images = [
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
  ];
  return (
    <div className="pList">
 { loading? ("Loading.. please wait") : ( <>
{ data && images.map((img, i) => ( 
<div className="pListItem">
        <img
        src={ img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles" key={i}>
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} Kos {data[i]?.type}</h2>
        </div>
      </div>
)
    )}
      </> ) }  
    </div>
  );
};

export default PropertyList;
