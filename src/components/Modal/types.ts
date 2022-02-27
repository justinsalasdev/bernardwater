import { ReactNode, FC } from "react";

export type Handler = () => void;
export type Opener = <T = {}>(Content: FC<T>, props: T) => void;
export type Handlers = {
  setModalContent: Opener;
  resetModalContent: Handler;
};
export interface Props {
  classes: string;
  children: ReactNode;
}
