import React from "react";

export default function FirstSection() {
  const gotodown = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{ marginTop: "100px", height: "1000px", backgroundColor: "blue" }}
    >
      <h1 onClick={() => gotodown()}> FirstSection</h1>
    </div>
  );
}
