//
//  ViewController.swift
//  DishApp
//
//  Created by Bin Chen on 2021-05-05.
//

import UIKit

class ViewController: UINavigationController {

    override func viewDidLoad() {
        super.viewDidLoad()
        pushViewController(RestaurantListViewController.init(), animated: false)
    }

}

