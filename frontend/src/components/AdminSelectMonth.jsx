"use client";
import { Select, Option } from "@material-tailwind/react";
 
export default function AdminSelectMonth() {
  return (
    <div className="w-1/3">
      <Select label="Select Month">
        <Option className="p-0 m-0" >Ene</Option>
        <Option className="p-0 m-0">Feb</Option>
        <Option className="p-0 m-0">Mar</Option>
        <Option className="p-0 m-0">Abr</Option>
        <Option className="p-0 m-0">May</Option>        
        <Option className="p-0 m-0">Jun</Option>
        <Option className="p-0 m-0">Jul</Option>
        <Option className="p-0 m-0">Ago</Option>
        <Option className="p-0 m-0">Sep</Option>
        <Option className="p-0 m-0">Oct</Option>
        <Option className="p-0 m-0">Nov</Option>
        <Option className="p-0 m-0">Dic</Option>
      </Select>
    </div>
  );
}