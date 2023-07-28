import { Card, Typography, List, ListItem, Checkbox } from "@material-tailwind/react";
import CardsServices from "./CardsServices";

export default function AllServicesFilter() {
  return (
    <div className="flex flex-row">
      
        <CardsServices page="services" />
      </div>
    
  );
}
