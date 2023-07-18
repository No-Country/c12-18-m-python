"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function FormClient() {
    return (
      <Card className="m-5" color="transparent" shadow={false}>
        <Typography className="my-2" variant="h4" color="blue-gray">
          Contact Information
        </Typography>
  
        <form className="mb-2 w-auto max-w-screen-xl">
            <div className="my-4">
            <Input size="lg" label="Email" />
            </div>            
          <div className="mb-4 flex flex-col lg:grid grid-cols-2 gap-4">            
            <Input size="lg" label="First Name"  />
            <Input size="lg" label="Last Name" />
            <Input size="lg" label="Username" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
            <Button
              className="text-xl bg-pink hover:bg-blue-500 active:bg-pink lg:w-1/2 md:text-lg"
              fullWidth
            >
              Edit Information
            </Button>
            <Button
              className="text-2xl bg-pink  hover:bg-blue-500 active:bg-pink lg:w-1/2 lg:justify-self-end"
              fullWidth
            >
              Save
            </Button>
          </div>
        </form>
      </Card>
    );
  }
  
