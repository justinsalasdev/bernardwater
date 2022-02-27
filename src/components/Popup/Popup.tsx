import Icon, { iconTypes } from "components/Icon";
import { useSetModal } from "components/Modal/Modal";
import { FC } from "react";

export type PopupProps<T = {}> = {
  Content: FC<T>;
  contentProps: T;
  beforeCloseHandler?: () => void;
  maxWidth?: string;
  accent?: string;
};

export default function Popup({
  maxWidth = "max-w-sm",
  accent = "bg-cyan-700",
  ...props
}: PopupProps) {
  const { resetModalContent } = useSetModal();

  function closePopup() {
    if (typeof props.beforeCloseHandler === "function") {
      props.beforeCloseHandler();
    }
    resetModalContent();
  }

  return (
    <div
      className={`grid grid-rows-a1 w-full ${maxWidth} bg-slate-50 rounded-md overflow-hidden shadow-lg shadow-slate-800/10 min-h-52`}
    >
      <div className={`${accent} p-2 flex items-center justify-end`}>
        <button
          onClick={closePopup}
          className="transform hover:scale-110 transition"
        >
          <Icon type={iconTypes.close} className="text-slate-50" size={22} />
        </button>
      </div>
      <props.Content {...props.contentProps} />
    </div>
  );
}
