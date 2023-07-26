'use client'
import AdminFooterServices from "@/components/AdminFooterServices";
import AdminServices from "@/components/AdminServices";
import CardAdminServices from "@/components/CardAdminServices";
import AdminAccount from "@/components/AdminAccount";
import { GetService, fetchservices } from "@/stateComponents/ProbarServicios";
import { useState, useEffect } from "react";

export default function Allservices() {

  const [service, setService] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetService();
      console.log(data, " data");
      setService(data);
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-row col-2 ">
      <div className="">
        <AdminAccount />
      </div>
      <div className=" bg-white m-4 w-full justify-center">
        <div>
          <div>
            <AdminServices />
          </div>
          <div className="mb-0">
            {
              service.map(service => 
                <CardAdminServices service={service}/>
              ) 
            }
          </div>
          <div>
            <AdminFooterServices total={service.length}/>
          </div>
        </div>
      </div>
    </div>
  );
}
