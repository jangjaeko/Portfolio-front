import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/header.module.scss";
import Headerimg from "./headerimg.png";
interface Props {}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.flexItems}>
        <Link href="/" className={styles.box}>
          <Image src={Headerimg} width={51} height={58} alt={""} />
        </Link>
      </div>
    </header>
  );
}
