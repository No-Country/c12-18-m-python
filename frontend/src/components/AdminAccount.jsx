"use client";
import React, { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, Card, List, ListItem, Typography } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function AdminAccount() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  return (
    <Fragment>
      <Accordion className="w-1/3 m-1" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="text-white p-0 m-1 text-center md:hidden hover:text-pink" onClick={() => handleOpen(1)}>
          <div className="text-base sm:text-xl" style={{ margin: "auto", width: "fit-content" }}>
            Account Admin
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Card className="w-full">
            <List>
              <ListItem className="hover:text-pink   p-0 m-0" selected={selected === 1} onClick={() => setSelectedItem(1)}>
                Contact Information
              </ListItem>
              <ListItem className="hover:text-pink p-0 m-0" selected={selected === 2} onClick={() => setSelectedItem(2)}>
                Appointments
              </ListItem>
            </List>
          </Card>
        </AccordionBody>
      </Accordion>
      <div className="hidden  md:block md:p-2 md:w-70">
        <Card className="md:w-60">
          <Typography variant="h5" color="blue-gray" className="sm:text-2xl  sm:mx-4 lg:text-xl">
            Account Admin
          </Typography>
          <List className="">
            <ListItem className="hover:text-pink " selected={selected === 1} onClick={() => setSelectedItem(1)}>
              Contact Information
            </ListItem>
            <ListItem className="hover:text-pink" selected={selected === 2} onClick={() => setSelectedItem(2)}>
              Appointments
            </ListItem>
            <ListItem className="hover:text-pink" selected={selected === 2} onClick={() => setSelectedItem(2)}>
              History Sales
            </ListItem>
            <ListItem className="hover:text-pink" selected={selected === 2} onClick={() => setSelectedItem(2)}>
              Users
            </ListItem>
            <ListItem className="hover:text-pink" selected={selected === 2} onClick={() => setSelectedItem(2)}>
              Services
            </ListItem>
            <ListItem className="hover:text-pink" selected={selected === 2} onClick={() => setSelectedItem(2)}>
              Calendar
            </ListItem>
          </List>
        </Card>
      </div>
    </Fragment>
  );
}
