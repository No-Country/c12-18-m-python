import AdminFooterServices from "@/components/AdminFooterServices";
import AdminServices from "@/components/AdminServices";
import CardAdminServices from "@/components/CardAdminServices";


export default function AdminService() {
    return (
      <div>
        <div>
          
         <AdminServices/>
        </div>
        <div className="mb-0">
          <CardAdminServices/>
          <CardAdminServices/>
          <CardAdminServices/>
          <CardAdminServices/>
          <CardAdminServices/>
          <CardAdminServices/>          
        </div>
        <div>
          <AdminFooterServices/>
        </div>
      </div>
    );
  }