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
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="text-white w-1/2 ml-2 text-center lg:hidden hover:text-pink" onClick={() => handleOpen(1)}>
          Filters
        </AccordionHeader>
        <AccordionBody>
          <Card className="w-auto lg:w-1/2">
            <List>
              <ListItem className="hover:text-pink px-0 mx-0" selected={selected === 1} onClick={() => setSelectedItem(1)}>
                Contact Information
              </ListItem>
              <ListItem className="hover:text-pink px-0 mx-0" selected={selected === 2} onClick={() => setSelectedItem(2)}>
                Appointments
              </ListItem>
            </List>
          </Card>
        </AccordionBody>
      </Accordion>
      <div className="hidden sm:w-1/4 lg:block lg:p-2 lg:w-1/3">
        <Card className="sm:w-1/4 lg:w-1/2">
        <Typography variant="h5" color="blue-gray" className="sm:text-2xl sm:mx-4 lg:text-xl">
          Account
        </Typography>
          <List className="sm:w-1/4 " >
            <ListItem className="hover:text-pink" selected={selected === 1} onClick={() => setSelectedItem(1)}>
              Contact Information
            </ListItem>
            <ListItem className="hover:text-pink" selected={selected === 2} onClick={() => setSelectedItem(2)}>
              Appointments
            </ListItem>
          </List>
        </Card>
      </div>
    </Fragment>
  );
}



