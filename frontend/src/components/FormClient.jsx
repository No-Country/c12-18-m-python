"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function FormClient({user}) {
  console.log(user, "soy user")
    return (
      <Card className="m-5 bg-white w-1/2" color="transparent" shadow={false} >
        <Typography className="my-2" variant="h4" color="blue-gray">
          Contact Information
        </Typography>
  
        <form className="mb-2 w-auto max-w-screen-xl">
            {/* renderizado condicional provicional hasta que se bloquee ruta */}
            {user !== null ? (
              <>
              <div className="my-4">
              <Input size="lg" value={user.email} />
              </div>              
               <div className="mb-4 flex flex-col lg:grid grid-cols-2 gap-4">            
               <Input size="lg" value={user.first_name}  />
               <Input size="lg" value={user.last_name}/>
               <Input size="lg" value={user.username}/>
               <Input type="password" size="lg" value="definido"/>
             </div> 
             </>
            ):(
              <>
              <div className="my-4">
              <Input size="lg" value="no definido" />
              </div>
              <div className="mb-4 flex flex-col lg:grid grid-cols-2 gap-4">            
              <Input size="lg" value="no definido"  />
              <Input size="lg" value="no definido"/>
              <Input size="lg" value="no definido"/>
              <Input type="password" size="lg" value="no definido"/>
            </div> 
            </>
            )}            
                   
        </form>
      </Card>
    );
  }
  
