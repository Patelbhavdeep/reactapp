import React from "react";
import "./App.css";

const App = () => {
  
  const a = [
    {
      id: 1,
      title: "Blue Himalayan Poppy",
      description:
        "A rare blue flower that adds elegance and calm to your space.",
      image:
        "https://www.jaipurcraftonline.com/cdn/shop/files/71iKVrCKakL._SL1500.jpg",
      link: "#",
      price: "$49.99",
      category: "Home Decor – Flowers",
      extraContent: "Comes with a ceramic pot. Symbol of peace and beauty.",
    },
    {
      id: 2,
      title: "Handcrafted Ceramic Vase",
      description:
        "Elegant vase ideal for modern home decor and minimal interiors.",
      image:
        "https://5.imimg.com/data5/MI/OZ/WH/SELLER-52149104/img-20200210-wa0031-500x500.jpg",
      link: "#",
      price: "$45.00",
      category: "Home Decor",
      extraContent:
        "Sleek design, handcrafted finish, perfect for living spaces.",
    },
    {
      id: 3,
      title: "Vintage Wall Clock",
      description: "Classic wall clock perfect for any interior style.",
      image:
        "https://cdn.shopify.com/s/files/1/0632/2526/6422/files/wall-clock-regal-roma-wall-clock-1.jpg?v=1752866578",
      link: "#",
      price: "$15.50",
      category: "Home Decor",
      extraContent: "Elegant design with antique finish. Battery operated.",
    },
    {
      id: 4,
      title: "Portable Smart Gadget",
      description: "Compact and stylish tech gadget for everyday use.",
      image:
        "https://homedecoremporium.co.uk/cdn/shop/collections/home-decor-home-decor-emporium.jpg?v=1709169246",
      link: "#",
      price: "$99.00",
      category: "Gadgets",
      extraContent: "Lightweight, durable, and travel-friendly.",
    },
    {
      id: 5,
      title: "Recycled Notebooks Set",
      description: "Eco-friendly stationery made with recycled paper.",
      image:
        "https://zoozle.in/_next/image?url=https%3A%2F%2Fcdn.zoozle.in%2Fv3%2Fecom%2Fproduct%2Fvariant%2FB772F7D099174155A611ABE16411E09B.webp&w=2048&q=75",
      link: "#",
      price: "$12.75",
      category: "Stationery",
      extraContent: "Pack of 3. Smooth writing and sustainable design.",
    },
    {
      id: 6,
      title: "Decorative Heritage Jar",
      description: "Premium ceramic jar with gold accents.",
      image:
        "https://cdn.shopify.com/s/files/1/0055/1151/2154/files/heritage-blue-n-gold-decorative-jar-for-home-decor_480x480.jpg?v=1645099650",
      link: "#",
      price: "$150.00",
      category: "Furniture",
      extraContent: "Hand-painted finish. Adds a royal touch to interiors.",
    },
    {
      id: 7,
      title: "Mini Table Decor Pair",
      description: "Stylish figurine set for tables or shelves.",
      image: "https://decorhomz.com/cdn/shop/files/pair-dick.jpg?v=1708517267",
      link: "#",
      price: "$8.99",
      category: "Accessories",
      extraContent: "Made from resin. Lightweight and modern.",
    },
    {
      id: 8,
      title: "Family Quote Wall Hanging",
      description: "Beautiful wall decor with motivational quote.",
      image:
        "https://www.jiomart.com/images/product/original/rvq2rwkbod/sehaz-artworks-family-quote-home-decor-items-wall-hanging-wall-decore-items-wall-hanging-accessory-home-decor-items-room-decoration-decoration-for-office-0023-product-images-orvq2rwkbod-p600865381-3-202304241448.jpg?im=Resize=(420,420)",
      link: "#",
      price: "$65.00",
      category: "Home Decor",
      extraContent: "Wooden finish. Easy to hang and maintain.",
    },
    {
      id: 9,
      title: "Home Workout Mat",
      description: "Lightweight mat ideal for yoga and fitness routines.",
      image:
        "https://www.dekorcompany.com/cdn/shop/files/DEK9871.png?v=1748521053",
      link: "#",
      price: "$23.49",
      category: "Fitness",
      extraContent: "Anti-slip surface. Rollable and easy to store.",
    },
    {
      id: 10,
      title: "Modern Shoulder Bag",
      description: "Trendy bag with minimal design and smooth finish.",
      image:
        "https://5.imimg.com/data5/ECOM/Default/2024/12/471358255/OY/SR/LA/108587650/kxcph-512-500x500.webp",
      link: "#",
      price: "$75.20",
      category: "Fashion",
      extraContent: "Available in multiple colors. Lightweight & spacious.",
    },
  ];

  return (
    <>
      <div className="main">
        <h1>Home Decor Collection</h1>
        
      </div>
      <div className="container">
        {a.map((e, i) => {
          return (
            <div className="card" key={i}>
              <img src={e.image} alt={e.title} />
              <h2>{e.title}</h2>
              <p className="category">{e.category}</p>
              <p className="description">{e.description}</p>
              <p className="extra">{e.extraContent}</p>
              <p className="price">{e.price}</p>
              <button>Read More</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
