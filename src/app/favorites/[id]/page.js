import { CarInfoModal } from "@/components/CarInfoModal/CarInfoModal";
import { findedCar } from "@/filters/filters";

export default async function CarPage({ params }) {
  const item = await findedCar(params.id);
  return (
    <>
      <h1>{params.id}</h1>
      <CarInfoModal item={item} />
    </>
  );
}
