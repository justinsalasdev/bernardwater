export default function TextInput(props: {
  title: string;
  placeholder: string;
  isEditing: boolean;
}) {
  return (
    <div className="mb-4">
      <label className="uppercase text-xs font-bold text-slate-600">
        {props.title}
      </label>
      <input
        readOnly={!props.isEditing}
        placeholder={props.placeholder}
        type="text"
        className="mt-1 w-full bg-slate-50 text-slate-700 shadow-inner p-4 rounded-md
         focus:outline-none focus:ring-1 focus:ring-cyan-600/30 placeholder:text-slate-300 
         read-only:shadow-none read-only:focus:ring-0 read-only:bg-white read-only:border-b 
         read-only:rounded-none"
      />
    </div>
  );
}
