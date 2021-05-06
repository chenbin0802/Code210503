//
//  Restaurant.swift
//  DishApp
//
//  Created by Bin Chen on 2021-05-05.
//
struct CuisineType: Codable {
    let name: String
    
    private enum CodingKeys: String, CodingKey {
        case name = "Name"
    }
}

struct Address: Codable {
    let city: String
    let firstLine: String
    let postCode: String
    
    private enum CodingKeys: String, CodingKey {
        case city = "City"
        case firstLine = "FirstLine"
        case postCode = "Postcode"
    }
}

struct DeliveryEtaMinutes: Codable {
    let rangeLower: Int?
    let rangeUpper: Int?
    
    private enum CodingKeys: String, CodingKey {
        case rangeLower = "RangeLower"
        case rangeUpper = "RangeUpper"
    }
}


struct Restaurant: Codable {
    let name: String
    let city: String
    let postcode: String
    let ratingStars: Float
    let logoUrl: String
    let isOpenNow: Bool
    let isOpenNowForCollection: Bool
    let isOpenNowForDelivery: Bool
    let isOpenNowForPreorder: Bool
    let numberOfRatings: Int
    let ratingAverage: Float
    let openingTimeLocal: String
    let deliveryStartTime: String
    let cuisineTypes: [CuisineType]
    let address: Address
    let deliveryEtaMinutes: DeliveryEtaMinutes?

    private enum CodingKeys: String, CodingKey {
        case name = "Name"
        case city = "City"
        case postcode = "Postcode"
        case ratingStars = "RatingStars"
        case logoUrl = "LogoUrl"
        case isOpenNow = "IsOpenNow"
        case isOpenNowForCollection = "IsOpenNowForCollection"
        case isOpenNowForDelivery = "IsOpenNowForDelivery"
        case isOpenNowForPreorder = "IsOpenNowForPreorder"
        case numberOfRatings = "NumberOfRatings"
        case ratingAverage = "RatingAverage"
        case openingTimeLocal = "OpeningTimeLocal"
        case deliveryStartTime = "DeliveryStartTime"
        case cuisineTypes = "CuisineTypes"
        case address = "Address"
        case deliveryEtaMinutes = "DeliveryEtaMinutes"
    }
    

}
