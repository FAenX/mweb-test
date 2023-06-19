import { CompaniesProvider } from "../../contexts/home";
import {Component} from "../../components/home";


// export default Component;

export default function ComponentHost (){
    

    return (
        <CompaniesProvider >
            <Component />
        </CompaniesProvider >
    );
};