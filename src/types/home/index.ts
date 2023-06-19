interface Campaign {
    /**
     * @param {string} code
     * @param {string} category
     * @param {string} description
     * @param {boolean} isDefaultCampaign
     * @param {boolean} isPrivateCampaign
     * @param {boolean} isStandardCampaign
     * @param {Array<string>} links
     * @param {string} name
     * @param {Array<string>} promocodes
     * @param {string} urlSlug
     * */
    code: string
    category: string
    description: string
    isDefaultCampaign: boolean
    isPrivateCampaign: boolean
    isStandardCampaign: boolean
    links: Array<string>
    name: string
    promocodes: Array<string>
    urlSlug: string
}


interface Provider {
    /**
     * @param {string} name
     * 
     * */
    name: string
}


interface PriceRange {
    /**
     * @param {number} min
     * @param {number} max
     *  */
    min: number
    max: number

}

interface Product {
    /**
     * @param {string} name
     * @param {string} description
     * @param {string} urlSlug
     * 
     * */
    name: string
    description: string
    urlSlug: string

}




export type { Campaign, Provider, PriceRange, Product }