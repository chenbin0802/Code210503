import UIKit

class RestaurantListViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var searchBar: UISearchBar!
    
    private var restaurants: [Restaurant] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Restaurant"
        searchBar.delegate = self
        tableView.delegate = self
        tableView.dataSource = self
    }
}


extension RestaurantListViewController: UISearchBarDelegate {
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        guard let input = searchBar.text, input.count > 0 else {
            let alert = UIAlertController.init(title: "Oops",
                                               message: "Please input something",
                                               preferredStyle: .alert)
            alert.addAction(UIAlertAction.init(title: "OK",
                                               style: .default,
                                               handler: nil))
            present(alert, animated: true, completion: nil)
            return
        }
        
        DataManager.shared.fetchRestaurant(with: input) { [weak self] restaurants in
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
        let cellID = "RestaurantListViewControllerTableViewCell"
        let cell = tableView.dequeueReusableCell(withIdentifier: cellID) ?? UITableViewCell.init(style: .default, reuseIdentifier: cellID)
                
        cell.textLabel?.text = restaurants[indexPath.row].name
        return cell
    }
}

extension RestaurantListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        // TODO
    }
}
