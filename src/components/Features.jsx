import React from "react";
import { FaTruck, FaShieldAlt, FaHeadset,   } from "react-icons/fa";


function Features() {
  const features = [
    {
      id: 1,
      icon: <FaTruck />,
      title: "FREE AND FAST DELIVERY",
      desc: "Get free delivery on all orders over $140",
    },
    {
      id: 2,
      icon: <FaHeadset />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "MONEY BACK GUARANTEE",
      desc: "We reurn within 30 days",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        {features.map((item) => (
          <div key={item.id} className="feature-card">
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
