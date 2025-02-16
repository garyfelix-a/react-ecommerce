import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-top">
        <marquee direction="left">
          <p>Welcome to Sorgam - The Paradise Of E-commerce <span><i className="fa-solid fa-star" style={{color: "lightgreen"}}></i></span> One Stop Shop for Everything - Best Deals, Best Prices, Every Day!</p>
        </marquee>
      </div>
      <div className="navbar-bottom">
        <div className="site-title">
          <h2>Sorgam</h2>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search Products" />
            <button><i className="fa-brands fa-searchengin"></i></button>
        </div>
        <div className="navbar-buttons">
            <a href="#"><i className="fa-solid fa-user"></i> Sign In</a>
            <a href="#"><i className="fa-solid fa-shopping-cart"></i> Cart</a>
            <a href="#"><i className="fa-solid fa-heart"></i> Favorites</a>
            <a href="#"><i className="fa-solid fa-history"></i> Orders</a>
        </div>
      </div>
      {/* bottom - nav menu - title left, center - search bar, right-login, orders, cart */}
    </nav>
  );
};

export default Navbar;
