
const StatCard = ({ s }) => {
  return (
    <div className="rounded-2xl shadow-2xl text-center p-5">
      <h3 className="text-lg text-blue-500 font-bold">{s?.label}</h3>
      <p className="text-4xl text-blue-900 font-extrabold">
        {s?.value}
      </p>
    </div>
  );
};

export default StatCard;
