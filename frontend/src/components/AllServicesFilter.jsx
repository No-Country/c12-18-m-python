import { Card, Typography, List, ListItem, Checkbox } from "@/clientComponents/TailwindComponents";
import CardsServices from "@/components/CardsServices";

export default function AllServicesFilter() {
  return (
    <div className="flex flex-row">
      {/* Sidebar con con nombre de los filtros */}
      <Card className="top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray" className="font-manrope font-bold">
            FILTERS
          </Typography>
        </div>
        <List>
          <Typography variant="h6" color="blue-gray" className="font-manrope font-bold">
            Alphabetically
          </Typography>
          <ListItem>
            <Checkbox label="Order A-Z" id="A-Z" />
          </ListItem>
          <ListItem>
            <Checkbox label="Order Z-A" id="Z-A" />
          </ListItem>
          <Typography variant="h6" color="blue-gray" className="font-manrope font-bold">
            Price Range
          </Typography>
          <ListItem>
            <Checkbox label="Under $25" id="under25" />
          </ListItem>
          <ListItem>
            <Checkbox label="$25 - $100" id="25-100" />
          </ListItem>
          <ListItem>
            <Checkbox label="$100- $500" id="100-500" />
          </ListItem>
        </List>
      </Card>
      <div>
        {/* Render de las Cards , le paso la prop de la pagina "services" para renderizado condicional */}
        <CardsServices page="services" />
      </div>
    </div>
  );
}
