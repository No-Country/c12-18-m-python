import AdminFooterUsers from "@/components/AdminFooterUsers";
import AdminUser from "@/components/AdminUsers";
import CardUsers from "@/components/CardUsers";

export default function AdminUsers() {
  return (
    <div>
      <div>
        <AdminUser />
      </div>
      <div>
        <CardUsers />
        <CardUsers />
        <CardUsers />
        <CardUsers />
        <CardUsers />
      </div>
      <div>
        <AdminFooterUsers/>
      </div>
    </div>
  );
}
