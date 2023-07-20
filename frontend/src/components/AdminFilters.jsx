"use client";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  Checkbox,
  List,
  ListItem,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import AdminSelectMonth from "./AdminSelectMonth";

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

export default function AdminFilters() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  return (
    <Fragment>
      {/*Pantalla mobil y tablets*/}
      <Accordion className="mx-3 w-70 sm:w-full" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="text-white w-1/6 p-0 m-1 text-center md:hidden hover:text-pink" onClick={() => handleOpen(1)}>
          <div className="text-base w-80 sm:text-lg sm:w-1/5" style={{ margin: "auto", width: "fit-content" }}>
            Filters Admin
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Card className="w-auto sm:w-1/2">
            <List className="grid grid-cols-2 w-full">
              <div>
                <Typography variant="h6" color="blue-gray" className="font-manrope font-bold">
                  Alphabetically
                </Typography>
                <div className=" w-full flex flex-col sm:m-0 sm:p-0">
                  <ListItem className="p-0 m-0">
                    <Checkbox label="Order A-Z" id="A-Z" />
                  </ListItem>
                  <ListItem className="p-0 m-0">
                    <Checkbox label="Order Z-A" id="Z-A" />
                  </ListItem>
                </div>
              </div>
              <div className="sm:mx-2">
                <Typography variant="h5" color="blue-gray" className="font-manrope font-bold ml-4">
                  Status
                </Typography>
                <div className="grid grid-cols-1 w-full ml-2">
                  <ListItem className="p-0 m-0">
                    <Checkbox label="Complete" id="under25" />
                  </ListItem>
                  <ListItem className="p-0 m-0">
                    <Checkbox label="Canceled" id="25-100" />
                  </ListItem>
                  <ListItem className="p-0 m-0">
                    <Checkbox label="Active" id="100-500" />
                  </ListItem>
                </div>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="font-manrope font-bold">
                  Date
                </Typography>
                <div className="grid grid-cols-1 w-full">
                  <ListItem className="p-0 m-0">
                    <Checkbox label="Descending" />
                  </ListItem>
                  <ListItem className="p-0 m-0">
                    <Checkbox label="Ascending" />
                  </ListItem>
                  <div className="my-4">
                    <AdminSelectMonth />
                  </div>
                </div>
              </div>
            </List>
          </Card>
        </AccordionBody>
      </Accordion>
      {/*Pantalla grandes*/}
      <div className="hidden  md:block md:p-2  ">
        <Card className="w-0">
          <div className="w-60 p-0 m-1">
            <Card>
              <List>
                <div className="flex flex-row">
                  <Card className="h-auto w-0 shadow-xl shadow-blue-gray-900/5 ">
                    <div className="mb-2 p-2">
                      <Typography variant="h5" color="blue-gray" className="font-manrope font-bold">
                        <div className="w-80">Filters Admin</div>
                      </Typography>
                    </div>
                    <List className="flex flex-col w-full">
                      <div>
                        <Typography variant="h6" color="blue-gray" className="font-manrope font-bold">
                          Alphabetically
                        </Typography>
                        <div className="w-full flex flex-col">
                          <ListItem className="p-0 m-0 w-70 text-center">
                            <Checkbox label="Order A-Z" id="A-Z" />
                          </ListItem>
                          <ListItem className="p-0 m-0 w-70 text-center">
                            <Checkbox label="Order Z-A" id="Z-A" />
                          </ListItem>
                        </div>
                      </div>
                      <div>
                        <Typography variant="h6" color="blue-gray" className="font-manrope font-bold">
                          Status
                        </Typography>
                        <div className="w-full flex flex-col">
                          <ListItem className="p-0 m-0">
                            <Checkbox label="Complete" id="under25" />
                          </ListItem>
                          <ListItem className="p-0 m-0">
                            <Checkbox label="Canceled" id="25-100" />
                          </ListItem>
                          <ListItem className="p-0 m-0">
                            <Checkbox label="Active" id="100-500" />
                          </ListItem>
                        </div>
                      </div>
                      <div>
                        <Typography variant="h6" color="blue-gray" className="font-manrope font-bold">
                          Date
                        </Typography>
                        <div className="flex flex-col w-full">
                          <ListItem className="p-0 m-0">
                            <Checkbox label="Descending" />
                          </ListItem>
                          <ListItem className="p-0 m-0">
                            <Checkbox label="Ascending" />
                          </ListItem>
                          <div className="my-4">
                            <AdminSelectMonth />
                          </div>
                        </div>
                      </div>
                    </List>
                  </Card>
                </div>
              </List>
            </Card>
          </div>
        </Card>
      </div>
    </Fragment>
  );
}
