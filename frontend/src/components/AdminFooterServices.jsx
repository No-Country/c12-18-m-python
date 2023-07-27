export default function AdminFooterServices() {
    return (
      <div className="bg-white m-1 p-2">        
        <div className="flex justify-between my-1">
          <div className=" w-40 sm:w-48 md:w-64">
            <span className="text-black font-bold uppercase text-xs sm:text-base flex justify-end">Total Services</span>
          </div>
          <div className="flex justify-between mb-0 p-0 sm:justify-end w-80 md:w-full h-8 md:mr-4">
              <div>
                <span className="text-black text-base font-bold flex justify-end w-28 sm:w-20">
                  Total:$
                </span>
              </div>
              {/* Total de ventas */}
              <div>
                <span 
                className="text-black text-base w-32 flex justify-center sm:ustify-end sm:w-32">(total)</span>
             
              </div>
            </div>
        </div>
        <div></div>
      </div>
    );
  }
  