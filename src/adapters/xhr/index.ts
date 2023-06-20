import Axios from "axios";


const initializers = {}


function errorHandler(error: any) {
  if (error.response) {
    return {
      error: true,
      message: error.response.data.message || 'Server error',
    };
  } 
  if (error.request) {
    return {
      error: true,
      message: 'Request failed, check your internet connection',
    };
  }
  return {
    message: 'Application failure.',
    error: true,
  };
}


function returnAxiosInstance() {
  return Axios.create(initializers);
}

export async function get(url: string){
  try{
    const axios = returnAxiosInstance();
    return await axios.get(url);
  }catch(error){
    console.log(error);
    return errorHandler(error)
  }
  
}

