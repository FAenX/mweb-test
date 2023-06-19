import Axios from "axios";

const url = ""

const initializers = {}


function returnAxiosInstance() {
  return Axios.create(initializers);
}

export async function get(url: string){
  const axios = returnAxiosInstance();
  return await axios.get(url);
}

