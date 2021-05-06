//
//  AppDelegate.swift
//  DishApp
//
//  Created by Bin Chen on 2021-05-05.
//

import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Bootstrap the app
        BootstrapManager.bootsrapApp()
        return true
    }
}
