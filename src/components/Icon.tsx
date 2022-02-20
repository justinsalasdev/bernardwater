import { IconBaseProps, IconType } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Icon(props: IconBaseProps & { type: iconTypes }) {
  const { type, ...restProps } = props;
  const IconFc = icons[props.type];
  return <IconFc {...restProps} />;
}

export enum iconTypes {
  fb = "FaFacebookSquare",
  loading = "AiOutlineLoading3Quarters",
}

export const icons: { [key in iconTypes]: IconType } = {
  [iconTypes.fb]: FaFacebookSquare,
  [iconTypes.loading]: AiOutlineLoading3Quarters,
};
