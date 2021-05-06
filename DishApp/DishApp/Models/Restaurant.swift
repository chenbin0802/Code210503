//
//  Restaurant.swift
//  DishApp
//
//  Created by Bin Chen on 2021-05-05.
//

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
//    .deliveryEtaMinutes.RangeLower,
//    .deliveryEtaMinutes.RangeUpper,
//    let CuisineTypes
//    let Address
    
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
//        case CuisineTypes
        //    let Address
    }
}
