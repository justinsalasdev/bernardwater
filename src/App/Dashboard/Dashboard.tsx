import { useGetter } from "store/accessors";

export default function Dashboard() {
  const user = useGetter((state) => state.auth.user);
  return <p>dashboard</p>;
}
