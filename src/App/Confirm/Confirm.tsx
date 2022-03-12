import { useParams } from "react-router-dom";

export default function Confirm() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <div className="container-padded bg-rose-400">Confirm page</div>;
}
