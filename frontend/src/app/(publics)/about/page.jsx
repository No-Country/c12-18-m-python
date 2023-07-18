import Bannerup from "@/components/Bannerup";
import AvatarClient from "@/components/AvatarClient"
import AccountClient from "@/components/AccountMax640";
import FormClient from "@/components/FormClient";
import ClientAllServicesFilter from "@/components/FiltersClientAllServices";

export default function About() {
  return (
    <>
      <Bannerup page="about" />
      <h1>about</h1>
      <AvatarClient/>
            
        <div>
          <ClientAllServicesFilter/>
        </div>  
              
    
      
      
               
    </>
  );
}
