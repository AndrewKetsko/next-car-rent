import Image from "next/image";
import styles from "./page.module.css";
import Avto from "@/images/R.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ textAlign: "center" }}>
        This is home page, but sinse im not a UI/UX designer it will be not fear
        to ask me generate some unbeliveble design
      </div>
      <h2 style={{ textAlign: "center" }}>
        But this is template for CAR RENTAL SERVISE
      </h2>
      <Image
        src={Avto}
        alt="avto"
        style={{ display: "block", margin: "10px auto" }}
      />
    </main>
  );
}
