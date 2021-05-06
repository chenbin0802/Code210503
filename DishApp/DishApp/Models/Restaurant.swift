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
    }
}
