import { useGetter } from "store/accessors";

export default function Dashboard() {
  const user = useGetter((state) => state.auth.user);
  return (
    <div className="bg-slate-50 grid grid-rows-a1 container-padded pt-4">
      <p className="text-slate-700">
        <span>Welcome, </span>
        <span className="font-bold">
          {user?.displayName || "Dear Customer"} !
        </span>
      </p>
      <button className="uppercase font-extrabold bg-slate-100 text-slate-600 place-self-center px-4 py-2 rounded-md shadow-outer-slate50">
        order now
      </button>
    </div>
  );
}
