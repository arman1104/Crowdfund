const StatsCard = () => {
  return (
    <section className="mx-auto mt-6 max-w-3xl rounded-xl bg-white px-6 md:px-8 py-8 md:py-10 shadow-sm">
      {/* Stats row */}
      <div className="flex flex-col gap-6 md:gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        {/* Amount backed */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-2xl font-bold">$89,914</h3>
          <p className="mt-1 text-sm md:text-base text-gray-500">of $100,000 backed</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-gray-200" />

        {/* Total backers */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-2xl font-bold">5,007</h3>
          <p className="mt-1 text-sm md:text-base text-gray-500">total backers</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-gray-200" />

        {/* Days left */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-2xl font-bold">56</h3>
          <p className="mt-1 text-sm md:text-base text-gray-500">days left</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 md:mt-8 h-3 w-full rounded-full bg-gray-200">
        <div className="h-full w-[80%] rounded-full bg-teal-500" />
      </div>
    </section>
  );
};

export default StatsCard;
