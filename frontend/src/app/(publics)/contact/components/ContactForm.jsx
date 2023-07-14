import { Card, Input, Button } from "@/clientComponents/TailwindComponents";

export default function ContactForm() {
  return (
    <Card color="transparent" shadow="false">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" type="text" label="Name" />
          <Input size="lg" type="email" label="Email" />
          <Input type="tel" size="lg" label="Phone" />
          <Input type="text" size="lg" label="Any Note For Us" />
        </div>

        <Button className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}
