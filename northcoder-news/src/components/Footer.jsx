import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>{`${new Date()}`.slice(0, 25)}</p>
    </div>
  );
};

export default Footer;
