import { CarInfoModal } from "@/components/CarInfoModal/CarInfoModal";
import { fetchData } from "@/fetch/fetch";

export default async function CarPage({ params }) {
  const items = await fetchData();
  const item = items.find((item) => item.id === +params.id);

  return (
    <>
      <h1>{params.id}</h1>
      <CarInfoModal item={item} />
    </>
  );
}
