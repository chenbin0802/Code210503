//
//  BootstrapManager.swift
//  DishApp
//
//  Created by Bin Chen on 2021-05-05.
//

import Foundation
import UIKit
import AFNetworking

class BootstrapManager: NSObject {
    
    private static let inMemCacheSize = 2 * 1024 * 1024 // 2MB
    private static let diskCacheSize = 10 * 1024 * 1024 // 10MB
    
    static func bootsrapApp() {
        bootstrapNetworking()
    }

    private static func bootstrapNetworking() {
        let urlCache = URLCache.init(memoryCapacity: inMemCacheSize, diskCapacity: diskCacheSize)
        URLCache.shared = urlCache
        
        AFNetworkActivityIndicatorManager.shared().isEnabled = true
    }
}
