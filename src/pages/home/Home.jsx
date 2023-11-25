import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import TestimoniList from "../../components/testimoniList/TestimoniList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
         <h1 className="homeTitle">Kota dengan Kos Terpopuler</h1>
        <Featured/>
        <h1 className="homeTitle">Rekomendasi Kos</h1>
        <FeaturedProperties/>
         <h1 className="homeTitle" style={{ textAlign: "center" }}>Testimoni dari Penyewa Kos</h1>
        <TestimoniList/>        
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
