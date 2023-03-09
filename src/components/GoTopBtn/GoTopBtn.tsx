import Image from "next/image";
import React from "react";
import Up from "./up-arrow.png";
export default function GoTopBtn() {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        padding: 0,
        opacity: 0.6,
      }}
    >
      <Image onClick={() => gotoTop()} src={Up} alt="" width={50} height={50} />
    </div>
  );
}
