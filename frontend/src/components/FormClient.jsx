"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function FormClient({ user }) {
  console.log(user, "soy user");
  return (
    <div className="w-full p-4 md:w-full">
    <Card className="w-full" color="transparent" shadow={false}>
      <Typography className="my-2" variant="h4" color="blue-gray">
        Contact Information
      </Typography>

      <form className="mb-2 w-full">
        {/* renderizado condicional provicional hasta que se bloquee ruta */}
        {user !== null ? (
          <>
            <div className="my-4">
              <Input size="md" value={user.email} />
            </div>
            <div className="mb-4 flex flex-col sm:grid grid-cols-2 gap-4">
              <Input size="md" value={user.first_name} />
              <Input size="md" value={user.last_name} />
              <Input size="md" value={user.username} />
              <Input type="password" size="md" value="definido" />
            </div>
          </>
        ) : (
          <>
            <div className="my-4">
              <Input size="lg" value="no definido" />
            </div>
            <div className="mb-4 flex flex-col sm:grid grid-cols-2 gap-4">
              <Input size="lg" value="no definido" />
              <Input size="lg" value="no definido" />
              <Input size="lg" value="no definido" />
              <Input type="password" size="lg" value="no definido" />
            </div>
          </>
        )}
      </form>
    </Card>
    </div>
  );
}

  
