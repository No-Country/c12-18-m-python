export default function AdminAppointments() {
    return (
      <div className="bg-white m-3 p-2">
        <span className="text-black text-xl font-bold">Appointments Today</span>
        <div className="flex justify-between my-2">
          <span className="text-black text-base w-60 sm:w-1/2 md:w-96 lg:w-2/5 xl:w-1/3 sm:flex justify-end">Service Name</span>
          <div className="flex justify-between w-40 sm:w-52 md:w-1/4 lg:w-1/5 xl:w-1/6 h-8 md:mr-4">
            <div className="  sm:w-1/2 ">
                <span className="text-black sm:flex justify-center text-base w-20">Date</span>
            </div>
            <div className=" sm:w-1/2 ">
                <span className="text-black sm:flex justify-end text-base w-20">Hour</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
