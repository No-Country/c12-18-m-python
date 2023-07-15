import { Typography, Card } from "@/clientComponents/TailwindComponents";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import BannerUp from "@/components/BannerUp";

export default function Signin() {
  return (
    <div className="justify-center ">
      <BannerUp text="Login / Signup" />
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
          <RegisterForm />
        </Card>

        <Card color="transparent" shadow={false} className="p-8 items-center">
          <Typography variant="h4" color="blue-gray" className="font-playfair">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-manrope">
            Enter your details to start
          </Typography>
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}
