import React from "react";
import "./Services.css";

function Services() {
  const service_arr = [
    {
      title: "Branding",
      content:
        "See growth in current account deposits,transactions volumes,fee based income and more",
    },
    {
      title: "Social media ",
      content:
        "See growth in current account deposits,transactions volumes,fee based income and more",
    },
    {
      title: "Web development",
      content:
        "See growth in current account deposits,transactions volumes,fee based income and more",
    },
    {
      title: "Advertisement",
      content:
        "See growth in current account deposits,transactions volumes,fee based income and more",
    },
  ];

  let services = service_arr.map((el, index) => {
    return (
      <div key={index} className="services">
        <div className="service-heading">{el.title}</div>
        <div className="service-content">{el.content}</div>
      </div>
    );
  });

  return <div className="services-container">{services}</div>;
}

export default Services;
