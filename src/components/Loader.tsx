import Icon, { iconTypes } from "./Icon";

export default function Loader(props: { classes: string; text?: string }) {
  return (
    <div className={`${props.classes} flex items-center gap-1 animate-pulse`}>
      <Icon type={iconTypes.loading} className={`animate-spin`} />
      <p className="uppercase font-mono">{props.text || "..loading"}</p>
    </div>
  );
}
