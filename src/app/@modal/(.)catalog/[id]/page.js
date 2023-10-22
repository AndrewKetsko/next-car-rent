import { CarInfoModal } from "@/components/carInfoModal/CarInfoModal";
import ModalFrame from "@/components/modalFrame/ModalFrame";
import { fetchData } from "@/fetch/fetch";

export default async function CarModal({ params }) {
  const items = await fetchData();
  const item = items.find((item) => item.id === +params.id);
  return (
    <ModalFrame>
      <CarInfoModal item={item} />
    </ModalFrame>
  );
}
