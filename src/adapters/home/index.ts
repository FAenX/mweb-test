
import { get } from "..";


const CAMPAIGNSURL = "https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public"
const PROMOCODES =(codes: string)=> `https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/${codes}?sellable_online=true`

export async function getCampaigns(): Promise<any> {
  return await get(CAMPAIGNSURL);
}

export async function getProviders(codes: Array<string>): Promise<any> {
  const joinedCodes = codes.join(",");
  return await get(PROMOCODES(joinedCodes));
}