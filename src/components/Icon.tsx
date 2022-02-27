import { IconBaseProps, IconType } from "react-icons";
import { FaFacebookSquare, FaUserCircle } from "react-icons/fa";
import {
  AiOutlineLoading3Quarters,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";

export default function Icon(props: IconBaseProps & { type: iconTypes }) {
  const { type, ...restProps } = props;
  const IconFc = icons[props.type];
  return <IconFc {...restProps} />;
}

export enum iconTypes {
  fb = "FaFacebookSquare",
  loading = "AiOutlineLoading3Quarters",
  close = "GrClose",
  plus = "AiOutlinePlus",
  minus = "AiOutlineMinus",
  user = "FaUserCircle",
  motor = "MdDeliveryDining",
  grid = "IoGridOutline",
}

export const icons: { [key in iconTypes]: IconType } = {
  [iconTypes.fb]: FaFacebookSquare,
  [iconTypes.loading]: AiOutlineLoading3Quarters,
  [iconTypes.close]: IoMdClose,
  [iconTypes.plus]: AiOutlinePlus,
  [iconTypes.minus]: AiOutlineMinus,
  [iconTypes.user]: FaUserCircle,
  [iconTypes.motor]: MdDeliveryDining,
  [iconTypes.grid]: IoGridOutline,
};
