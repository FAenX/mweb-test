
import { get } from "..";


const CAMPAIGNSURL = "https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public"


export async function getCampaigns(): Promise<any> {
  return await get(CAMPAIGNSURL);
}