import React from "react";
import "./ProPage.css";

function ProPage() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹9.99/month",
      features: ["Access to basic tools", "Standard support", "Limited analytics"],
      backgroundColor: "#f9f9f9",
    },
    {
      name: "Pro Plan",
      price: "₹29.99/month",
      features: ["Access to all tools", "Priority support", "Advanced analytics"],
      backgroundColor: "#e0f7fa",
    },
    {
      name: "Premium Plan",
      price: "₹49.99/month",
      features: ["Everything in Pro", "Exclusive content", "24/7 support"],
      backgroundColor: "#fff8e1",
    },
  ];

  return (
    <div className="pro-page">
      <h1 className="title">Choose Your SkillSphere Pro Plan</h1>
      <div className="plans">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="plan-card"
            style={{ backgroundColor: plan.backgroundColor }}
          >
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="subscribe-btn">Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProPage;
