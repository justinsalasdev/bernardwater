import { useSetModal } from "components/Modal/Modal";
import Popup, { PopupProps } from "components/Popup/Popup";
import { useGetter } from "store/accessors";

export default function Orders() {
  const { showModal } = useSetModal();
  const products = useGetter((state) => state.products);
  console.log(products);
  return (
    <p>
      Orders{" "}
      <button onClick={() => showModal<PopupProps>(Popup, {})}>
        open modal
      </button>
    </p>
  );
}

function ModalContent() {
  return <div>hahaha</div>;
}
