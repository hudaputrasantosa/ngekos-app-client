import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  const { data, loading, error, reFetch } = useFetch(`/koses?city=${destination}&min=${min || 0}&max=${max || 100000000}`)
  const handleClick = () =>{
    reFetch();
  }
  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Pencarian</h1>
            <div className="lsItem">
              <label>Lokasi</label>
              <input placeholder={destination} onChange={e=>setDestination(e.target.value)} type="text" />
            </div>
            <div className="lsItem">
              <label>Pilihan</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Set Harga Minimal
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Set Harga Maksimal
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Cari Sekarang</button>
          </div>
          <div className="listResult">
           { loading? "Loading, Please wait.." : <>
           { data && data.map(item =>(
            <SearchItem item={item} key={item._id} />
            ))}
           </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
