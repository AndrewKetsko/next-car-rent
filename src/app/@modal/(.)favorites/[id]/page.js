import { CarInfoModal } from "@/components/CarInfoModal/CarInfoModal";
import Modal from "@/components/Modal/Modal";
import { findedCar } from "@/filters/filters";

export default async function CarModal({ params }) {
  const item = await findedCar(params.id);
  return (
    <Modal>
      <CarInfoModal item={item} />
    </Modal>
  );
}
