import Foundation
import UIKit
import AFNetworking

class BootstrapManager: NSObject {
    
// MARK: Constants
    private static let inMemCacheSize = 2 * 1024 * 1024 // 2MB
    private static let diskCacheSize = 10 * 1024 * 1024 // 10MB
    
// MARK: public
    static func bootsrapApp() {
        bootstrapNetworking()
    }

// MARK: private
    private static func bootstrapNetworking() {
        let urlCache = URLCache.init(memoryCapacity: inMemCacheSize, diskCapacity: diskCacheSize)
        URLCache.shared = urlCache
        
        AFNetworkActivityIndicatorManager.shared().isEnabled = true
    }
}
