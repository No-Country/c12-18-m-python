"use client";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  List, 
  ListItem, 
  Typography 
} from "@material-tailwind/react";
import Link from "next/link";

 
function Icon({ id, open }) {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function AccountMax640() {
  const [open, setOpen] = useState(0); 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);
 
  return (
    <Fragment>
      <Accordion className="w-1/3 m-1" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="text-white p-0 m-1 text-center lg:hidden hover:text-pink" onClick={() => handleOpen(1)}>
        <div className="text-lg sm:text-xl" style={{ margin: "auto", width: "fit-content" }}>
            Account
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Card className="w-full">
            <List>
              <Link href="/client">
              <ListItem className="hover:text-pink   p-0 m-0" selected={selected === 1} onClick={() => setSelectedItem(1)}>
                Contact Information
              </ListItem>
              </Link>
              <Link href="/client/appointments">
              <ListItem className="hover:text-pink p-0 m-0" selected={selected === 2} onClick={() => setSelectedItem(2)}>
                Appointments
              </ListItem>
              </Link>
            </List>
          </Card>
        </AccordionBody>
      </Accordion>
      <div className="hidden  lg:block md:p-2 md:w-70">
        <Card className="md:w-60">
        <Typography variant="h5" color="blue-gray" className="sm:text-2xl  sm:mx-4 lg:text-xl">
          Account
        </Typography>
          <List className="" >
          <Link href="/client">
            <ListItem className="hover:text-pink " selected={selected === 1} onClick={() => setSelectedItem(1)}>
              Contact Information
            </ListItem>
            </Link>
            <Link href="/client/appointments">
            <ListItem className="hover:text-pink" selected={selected === 2} onClick={() => setSelectedItem(2)}>
              Appointments
            </ListItem>
            </Link>
          </List>
        </Card>
      </div>
    </Fragment>
  );
}



