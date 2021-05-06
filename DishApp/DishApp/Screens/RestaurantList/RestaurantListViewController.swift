//
//  RestaurantListViewController.swift
//  DishApp
//
//  Created by Bin Chen on 2021-05-05.
//

import UIKit
import SDWebImage

class RestaurantListViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var searchBar: UISearchBar!
    
    private var restaurants: [Restaurant] = []
    private static let rowHeight: CGFloat = 100

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Restaurants"
        searchBar.delegate = self
        tableView.delegate = self
        tableView.dataSource = self
        tableView.keyboardDismissMode = .onDrag
        let cellNib = UINib(nibName: "RestaurantCell", bundle: nil)
        tableView.register(cellNib, forCellReuseIdentifier: "RestaurantCell")
    }

}


extension RestaurantListViewController: UISearchBarDelegate {
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        searchBar.endEditing(true)
        guard let input = searchBar.text, input.count > 0 else {
            let alert = UIAlertController.init(title: "", message: "Please Enter Postal Code",
                                               preferredStyle: .alert)
            alert.addAction(UIAlertAction.init(title: "OK",
                                               style: .default,
                                               handler: nil))
            present(alert, animated: true, completion: nil)
            return
        }
        
        DataManager.shared.fetchRestaurant(with: input.trimmingCharacters(in: .whitespaces)) { [weak self] restaurants in
            self?.restaurants = restaurants
            DispatchQueue.main.async {
                self?.tableView.reloadData()
            }
        } failure: { [weak self] errorMessage in
            let alert = UIAlertController.init(title: "Data fetch failed",
                                               message: errorMessage,
                                               preferredStyle: .alert)
            alert.addAction(UIAlertAction.init(title: "OK",
                                               style: .default,
                                               handler: nil))
            self?.present(alert, animated: true, completion: nil)
        }
    }
}

extension RestaurantListViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.restaurants.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "RestaurantCell", for: indexPath) as! RestaurantCell
        let restaurant = restaurants[indexPath.row]
        cell.iconView.sd_setImage(with: URL(string: restaurant.logoUrl))
        cell.contentLabel.text = String(format: "%@\nCount:%d  Average:%.2f  StarRating:%.2f\nCuisines:\n%@\n %@",
                                        restaurant.name,
                                        restaurant.numberOfRatings,
                                        restaurant.ratingAverage,
                                        restaurant.ratingStars,
                                        restaurant.cuisineTypes.reduce("", { result, type in
                                            result + " | "  + type.name
                                        }),
                                        restaurant.isOpenNow ? "Open Now" : "Closed")
        return cell
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return RestaurantListViewController.rowHeight
    }
}

extension RestaurantListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let restaurant = restaurants[indexPath.row]
        let vc = RestaurantDetails.init(restaurant: restaurant)
        self.navigationController?.pushViewController(vc, animated: true)
    }
}
