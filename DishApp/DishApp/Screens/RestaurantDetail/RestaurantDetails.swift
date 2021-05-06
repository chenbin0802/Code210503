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
    @IBAction func onButtonClicked(_ sender: Any) {
        self.dismiss(animated: true)
    }
    public var restaurant: Restaurant?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let restaurant = restaurant {
            imageView.sd_setImage(with: URL(string: restaurant.logoUrl))
            contentLabel.text = String(format: "Name:\n  %@\nAddress:\n  %@,%@,%@\nOpening:\n  %@\nDelivery Start:\n  %@\nEstimated Time:\n  %@ mins - %@ mins",
                                       restaurant.name,
                                       "",//restaurant.Address.FirstLine,
                                       "",//restaurant.Address.City,
                                       "",//restaurant.Address.Postcode,
                                       restaurant.openingTimeLocal,
                                       restaurant.deliveryStartTime,
                                       "",//restaurant.deliveryEtaMinutes.RangeLower,
                                       ""//restaurant.deliveryEtaMinutes.RangeUpper,
                                       )
        }
    }
}
