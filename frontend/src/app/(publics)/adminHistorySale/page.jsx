import AdminFooterHistorySales from "@/components/AdminFooterHistorySales";
import AdminHistorySales from "@/components/AdminHistorySales";
import CardHistorySales from "@/components/CardHistorySales";

export default function HistorySales() {
  return (
    <div>
      <div>
        <div>
          <AdminHistorySales />
        </div>
        <CardHistorySales />
      </div>
      <div>
        <AdminFooterHistorySales />
      </div>
    </div>
  );
}
