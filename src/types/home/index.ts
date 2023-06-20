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
     * @param {string} coverageStatusDisplayValue
     * @param {string} coverageStatusOptionKey
     * @param {Array<Product>} products
     * @param {string} promoCode
     * @param {string} promoCodeCategory
     * @param {string} promoCodeDescription
     * @param {string} promoCodeSubcategory
     * @param {string} promoCodeTagLine
     * @param {string} promoProductDescription
     * @param {string} promoProductTagline
     * @param {string} promoUrlSlug
     * @param {string} provider
     * 
     * */
    coverageStatusDisplayValue: string
    coverageStatusOptionKey: string
    products: Array<Product>
    promoCode: string
    promoCodeCategory: string
    promoCodeDescription: string
    promoCodeSubcategory: string
    promoCodeTagLine: string
    promoProductDescription: string
    promoProductTagline: string
    promoUrlSlug: string
    provider: string
    
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
     * @param {string} category
     * @param {string} chargePeriod
     * @param {string} displayPrice
     * @param {string} productName
     * @param {number} productRate
     * 
     * */
    category: string
    chargePeriod: string
    displayPrice: string
    productName: string
    productRate: number
    

}




export type { Campaign, Provider, PriceRange, Product }