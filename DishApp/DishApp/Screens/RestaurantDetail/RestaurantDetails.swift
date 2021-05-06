//
//  RestaurantDetails.swift
//  DishApp
//
//  Created by Bin Chen on 2021-05-05.
//

import Foundation
import UIKit
import SDWebImage

class RestaurantDetails: UIViewController {
    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var contentLabel: UILabel!
    private var restaurant: Restaurant?
    
    init(restaurant:Restaurant) {
        super.init(nibName: nil, bundle: nil)
        self.restaurant = restaurant
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let restaurant = restaurant {
            imageView.sd_setImage(with: URL(string: restaurant.logoUrl))
            contentLabel.text = String(format: "Name:\n  %@\nAddress:\n  %@,%@,%@\nOpening:\n  %@\nDelivery Start:\n  %@\nEstimated Time:\n  %d mins - %d mins",
                                       restaurant.name,
                                       restaurant.address.firstLine,
                                       restaurant.address.city,
                                       restaurant.address.postCode,
                                       restaurant.openingTimeLocal,
                                       restaurant.deliveryStartTime,
                                       restaurant.deliveryEtaMinutes?.rangeLower ?? 0,
                                       restaurant.deliveryEtaMinutes?.rangeUpper ?? 0
                                       )
        }
    }
}
