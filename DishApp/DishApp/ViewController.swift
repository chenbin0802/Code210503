import UIKit

class ViewController: UINavigationController {

    override func viewDidLoad() {
        super.viewDidLoad()
        pushViewController(RestaurantListViewController.init(), animated: false)
    }

}

