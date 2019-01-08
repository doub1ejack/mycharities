import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DISHES from '../shared/dishes';

/**
 * Displays the menu and selected item components.  
 * 
 * Todo: fix this naming & organization.  "Main" is a meaningless term and 
 * this component doesn't appear to help organize the app - at least not yet.
 */
class Main extends Component {

	constructor(props) {
		super(props);
		this.state = { dishes: DISHES };
	}

	render() {
		return (
			<div>

				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>

                {/* Display Menu & Selected item */}
				<Menu dishes={this.state.dishes } />

			</div>
		);
	}
}

export default Main;