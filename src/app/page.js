import Image from "next/image";
import Avto from "@/images/R.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6">
      <div>
        This is home page, but sinse im not a UI/UX designer it will be not fear
        to ask me generate some unbeliveble design
      </div>
      <h2>But this is template for CAR RENTAL SERVISE</h2>
      <Image
        src={Avto}
        alt="avto"
      />
    </main>
  );
}
