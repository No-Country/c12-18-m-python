import AdminFooterServices from "@/components/AdminFooterServices";
import AdminServices from "@/components/AdminServices";
import CardAdminServices from "@/components/CardAdminServices";
import AdminAccount from "@/components/AdminAccount";

export default function Allservices() {


  const [service, setService] = useState([]);
  const [deleteService, setDeleteService] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetService();
      console.log(data, " data");
      setService(data);
    };

    fetchData();
    setDeleteService(false);
  }, [deleteService]);


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
                <CardAdminServices service={service} setDeleteService={setDeleteService}/>
              ) 
            }
          </div>
          <div>
            <AdminFooterServices />
          </div>
        </div>
      </div>
    </div>
  );
}
