import { CarInfoModal } from "@/components/CarInfoModal/CarInfoModal";
import { fetchData } from "@/fetch/fetch";

export default async function CarPage({ params }) {
  const items = await fetchData();
  const item = items.find((item) => item.id === params.id);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <CarInfoModal item={item} />
      </div>
    </div>
  );
}
