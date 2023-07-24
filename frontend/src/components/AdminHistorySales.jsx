export default function AdminHistorySales() {
  return (
    <div className="bg-white m-1 p-2">
      <span className="text-black text-xl font-bold">History Sales</span>
      <div className="flex justify-between my-1">
        <div className=" w-28 sm:w-48 md:w-64">
          <span className="text-black text-base flex justify-end">Service Name</span>
        </div>
        <div className="flex justify-between w-40 md:w-80 h-8 md:mr-4">
          <div>
            <span className="text-black text-base sm:flex justify-end w-20">Date</span>
          </div>
          <div>
            <span className="text-black text-base sm:flex justify-start sm:w-32">Hour</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
