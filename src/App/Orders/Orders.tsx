import { useSetModal } from "components/Modal/Modal";
import Popup, { PopupProps } from "components/Popup/Popup";

export default function Orders() {
  const { showModal } = useSetModal();

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
