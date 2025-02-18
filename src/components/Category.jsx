import { useRef } from "react";
import "./Category.css";
import electronics from "../assets/electronics.png";
import shirts from "../assets/shirts.png";
import jacket from "../assets/jacket.png";
import bags from "../assets/bags.png";
import gadgets from "../assets/gadgets.png";
import pants from "../assets/pants.png";
import shoes from "../assets/shoes.png";
import watch from "../assets/watch.png";
import accessories from "../assets/accessories.png";

const categories = [
  {
    id: 1,
    name: "Electronics",
    img: electronics,
  },
  {
    id: 2,
    name: "Shirts",
    img: shirts,
  },
  {
    id: 3,
    name: "Jackets",
    img: jacket,
  },
  {
    id: 4,
    name: "Pants",
    img: pants,
  },
  {
    id: 5,
    name: "Shoes",
    img: shoes,
  },
  {
    id: 6,
    name: "Watches",
    img: watch,
  },
  {
    id: 7,
    name: "Accessories",
    img: accessories,
  },
  {
    id: 8,
    name: "Bags",
    img: bags,
  },
  {
    id: 9,
    name: "Gadgets",
    img: gadgets,
  },
];

const Category = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="top-categories">
      <div className="title-name">
        <h2 className="category-title">Top Categories</h2>
      </div>

      {/* Category Section */}
      <div className="categories-container" ref={containerRef}>
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* Left Nav Button */}
      <button className="scroll-btn left" onClick={scrollLeft}>
        ❮
      </button>
      {/* Right Nav Button */}
      <button className="scroll-btn right" onClick={scrollRight}>
        ❯
      </button>
    </div>
  );
};

export default Category;
