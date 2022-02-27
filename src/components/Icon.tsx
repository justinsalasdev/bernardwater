import { IconBaseProps, IconType } from "react-icons";
import {
  AiOutlineLoading3Quarters,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookSquare, FaUserCircle } from "react-icons/fa";

import { MdDeliveryDining } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoGridOutline, IoWater } from "react-icons/io5";

export default function Icon(props: IconBaseProps & { type: iconTypes }) {
  const { type, ...restProps } = props;
  const IconFc = icons[props.type];
  return <IconFc {...restProps} />;
}

export enum iconTypes {
  arrowRight = "BsArrowRight",
  fb = "FaFacebookSquare",
  loading = "AiOutlineLoading3Quarters",
  close = "GrClose",
  plus = "AiOutlinePlus",
  minus = "AiOutlineMinus",
  user = "FaUserCircle",
  motor = "MdDeliveryDining",
  grid = "IoGridOutline",
  waterDrop = "IoWater",
  error = "BiErrorCircle",
}

export const icons: { [key in iconTypes]: IconType } = {
  [iconTypes.arrowRight]: BsArrowRight,
  [iconTypes.close]: IoMdClose,
  [iconTypes.error]: BiErrorCircle,
  [iconTypes.fb]: FaFacebookSquare,
  [iconTypes.grid]: IoGridOutline,
  [iconTypes.loading]: AiOutlineLoading3Quarters,
  [iconTypes.minus]: AiOutlineMinus,
  [iconTypes.motor]: MdDeliveryDining,
  [iconTypes.plus]: AiOutlinePlus,
  [iconTypes.user]: FaUserCircle,
  [iconTypes.waterDrop]: IoWater,
};
