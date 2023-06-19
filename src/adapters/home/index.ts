
import { get } from "..";


export async function getAllCompanies(): Promise<any> {
  return await get("https://jsonplaceholder.typicode.com/posts");
}