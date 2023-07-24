import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export default function ContactForm() {
  return (
    <Card color="transparent" shadow={false} className="">
      
      <form className="mt-8 mb-2   sm:w-96">
        <div className="mb-4 flex flex-col w-full gap-6 justify-center" >
          <Input  label="Name" />
          <Input label="Email" />
          <Input type="password"  label="Password" />
        </div>    

        <Button
            className=" shadow-none bg-[#422A3C] hover:shadow-none hover:bg-white hover:text-black focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
           
            
          >
            send 
          </Button>
       
      </form>
    </Card>
  );
}