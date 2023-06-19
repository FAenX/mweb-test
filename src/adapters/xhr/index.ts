import Axios from "axios";


const initializers = {}


function returnAxiosInstance() {
  return Axios.create(initializers);
}

export async function get(url: string){
  const axios = returnAxiosInstance();
  return await axios.get(url);
}

