import { createContext, ReactNode, useContext, useState } from "react";
import { Handlers, Opener, Props } from "./types";

export default function Modal(props: Props) {
  const [Content, setContent] = useState<ReactNode>();

  const setModalContent: Opener = (Content, props) => {
    setContent(<Content {...props} />);
  };

  function resetModalContent() {
    if (Content === undefined) {
      return;
    }
    setContent(undefined);
  }

  return (
    <setContext.Provider
      value={{
        setModalContent,
        resetModalContent,
      }}
    >
      {!!Content && (
        <>
          <div className={props.classes}>{Content}</div>
        </>
      )}

      {props.children}
    </setContext.Provider>
  );
}
const setContext = createContext<Handlers>({
  setModalContent: () => {},
  resetModalContent: () => {},
});

export const useSetModal = () => useContext(setContext);
