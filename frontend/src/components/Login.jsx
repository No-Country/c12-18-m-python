import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function Login() {
  return (
    <div className=" justify-center flex flex-row flex-wrap divide-x divide-gray-400">
      {/* registro */}
      <Card color="transparent" shadow={false} className="p-8 items-center">
        <Typography variant="h4" color="blue-gray" className="font-playfair">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-manrope">
          Are you new in Vanity Reserve?
        </Typography>
        <Typography color="gray" className="mt-1 font-manrope">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>

          <Button
            className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
          >
            Register
          </Button>
        </form>
      </Card>
      {/* iniciar sesión  */}

      <Card color="transparent" shadow={false} className="p-8 items-center">
        <Typography variant="h4" color="blue-gray" className="font-playfair">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-manrope">
          Enter your details to start
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>

          <Button
            className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
