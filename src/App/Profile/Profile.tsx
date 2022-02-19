export default function Profile() {
  return (
    <form className="justify-self-center self-start mt-8 w-full max-w-md rounded-md">
      <p className="font-bold text-lg text-slate-600 mb-4 uppercase ">
        Contact details
      </p>
      <TextInput title="Name" />
      <TextInput title="Phone number" />
      <TextInput title="Address" />
      <TextInput title="Others" />
      <button
        type="button"
        className="bg-cyan-600 w-full p-4 rounded-full   mt-4 shadow-md shadow-cyan-500/30
       uppercase font-bold text-slate-50 hover:bg-cyan-500 hover:shadow-xl hover:shadow-cyan-400/30
       transform active:translate-x-1 transition"
      >
        save
      </button>
    </form>
  );
}

function TextInput(props: { title: string }) {
  return (
    <div className="mb-4">
      <label className="uppercase text-xs font-bold text-slate-600">
        {props.title}
      </label>
      <input
        type="text"
        className="mt-1 w-full bg-slate-50 text-slate-700 shadow-inner p-4 rounded-md focus:outline-none"
      />
    </div>
  );
}
