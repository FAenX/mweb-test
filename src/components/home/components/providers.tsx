import { useContext } from "react";
import { CampaignsContext, ProvidersContext } from "../../../contexts/home";


export default function Component() {
    const {selectedCampaign} = useContext(CampaignsContext);
    const {providers} = useContext(ProvidersContext);
    console.log(selectedCampaign)
    console.log(providers)
    return (
        <div>
        <h1>Home</h1>
        
        </div>
    );
}