const StatsCard = () => {
  return (
    <section className="mx-auto mt-6 max-w-3xl rounded-xl bg-white px-8 py-10 shadow-sm">
      {/* Stats row */}
      <div className="flex flex-col gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        {/* Amount backed */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">$89,914</h3>
          <p className="mt-1 text-base text-gray-500">of $100,000 backed</p>
        </div>

        {/* Divider */}
        <div className="hidden h-16 w-px bg-gray-200 sm:block" />

        {/* Total backers */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">5,007</h3>
          <p className="mt-1 text-base text-gray-500">total backers</p>
        </div>

        {/* Divider */}
        <div className="hidden h-16 w-px bg-gray-200 sm:block" />

        {/* Days left */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">56</h3>
          <p className="mt-1 text-base text-gray-500">days left</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-8 h-3 w-full rounded-full bg-gray-200">
        <div className="h-full w-[80%] rounded-full bg-teal-500" />
      </div>
    </section>
  );
};

export default StatsCard;
