import UIKit
import AFNetworking

class DataManager: NSObject {
// MARK: Constants
    public static let shared = DataManager()

// MARK: private
    private static let baseURL = "https://uk.api.just-eat.io"
    
    // keys
    private static let restaurantsKey = "Restaurants"
    
    //API paths
    private static let searchURL = "restaurants/bypostcode/"

    // objects
    private let networkManager = AFHTTPSessionManager.init(baseURL: URL.init(string: baseURL))
    private let decode = JSONDecoder()
    
    // Error message
    private static let errorMessage = "fetch error"
    
// MARK: public
    public func fetchRestaurant(with outCode: String, success: @escaping ([Restaurant]) -> Void, failure: @escaping (String) -> Void) {
        
        let successHandler: (URLSessionDataTask, Any?) -> Void = { task, response in
            guard let dict = response as? Dictionary<String, AnyObject>,
                  let restaurantsSection = dict[DataManager.restaurantsKey] else {
                failure(DataManager.errorMessage)
                return
            }
        
            
            // TODO: This is a hack, serializing the dict back to json and use JSONDecoder to decode it to object
            // will have nagative performance impact. This CANNOT go into production code. Given more time I would
            // properly deserialize it from the Json dict.
            do {
                let decodedList = try JSONDecoder().decode([Restaurant].self,
                                                           from: try JSONSerialization.data(withJSONObject: restaurantsSection, options: .fragmentsAllowed))
                success(decodedList)
                return
            } catch {
                failure(DataManager.errorMessage)
            }
        }
        
        let failureHandler: (URLSessionDataTask?, Error) -> Void = { task, error in
            failure(DataManager.errorMessage)
        }
        
        networkManager.get(DataManager.searchURL + outCode,
                           parameters: nil,
                           headers: nil,
                           progress: nil,
                           success: successHandler,
                           failure: failureHandler)
    }
}
