export default function AdminAppointments() {
    return (
      <div className="bg-white m-3 p-2">
        <span className="text-black text-xl font-bold">Appointments Today</span>
        <div className="flex justify-between my-2">
          <span className="text-black text-base w-60">Service Name</span>
          <div className="flex justify-between w-40 md:w-60 h-8 md:mr-4">
            <div>
              <span className="text-black text-base w-20">Date</span>
            </div>
            <div>
              <span className="text-black text-base w-20">Hour</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }