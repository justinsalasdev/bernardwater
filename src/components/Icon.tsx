import { IconBaseProps, IconType } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";

export default function Icon(props: IconBaseProps & { type: iconTypes }) {
  const { type, ...restProps } = props;
  const IconFc = icons[props.type];
  return <IconFc {...restProps} />;
}

export enum iconTypes {
  fb_square = "facebook_square",
}

export const icons: { [key in iconTypes]: IconType } = {
  [iconTypes.fb_square]: FaFacebookSquare,
};
