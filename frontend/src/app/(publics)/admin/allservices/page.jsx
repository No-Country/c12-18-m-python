'use client'
import { Typography } from "@material-tailwind/react";

export default function Allservices() {
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