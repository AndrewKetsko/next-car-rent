import { CarInfoModal } from "@/components/CarInfoModal/CarInfoModal";
import Modal from "@/components/Modal/Modal";
import { fetchData } from "@/fetch/fetch";

export default async function CarModal({ params }) {
  const items = await fetchData();
  const item = items.find((item) => item.id === +params.id);
  return (
    <Modal>
      <CarInfoModal item={item} />
    </Modal>
  );
}
