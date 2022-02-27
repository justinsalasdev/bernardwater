import { useSetModal } from "components/Modal/Modal";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function useCloseModalOnRouteChange() {
  const pathRef = useRef<string>();
  const { resetModalContent } = useSetModal();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathRef.current !== pathname) {
      resetModalContent();
      pathRef.current = pathname;
    }
    //eslint-disable-next-line
  }, [pathname]);
}
