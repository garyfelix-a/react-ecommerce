import Carousel from "../components/Carousel"
import Category from "../components/Category"
import { getProducts } from "../services/api";
import './Home.css';


const Home = () => {

  const products = getProducts();

  console.log(products);

  return (
    <div className="home">
        <section className="hero">
          <Carousel />
        </section>
        <section className="home-marquee">
          <marquee direction="left">
            <p>Fresh Looks for a Fresh Season - Shop Now <span><i className="fa-solid fa-star" style={{color: "#EB5406"}}></i></span> Buy More, Worry Less - Free Shipping on All Orders! <span><i className="fa-solid fa-star" style={{color: "#EB5406"}}></i></span> Exclusive Offers, Just for You - Shop Before It’s Gone! <span><i className="fa-solid fa-star" style={{color: "#EB5406"}}></i></span> Trend Alert: Hottest Styles at Coolest Prices!</p>
          </marquee>
        </section>
        <section className="category">
          <Category />
        </section>
        <section className="featured products">

        </section>
    </div>
  )
}

export default Home