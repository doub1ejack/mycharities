import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

	render() {

		const menu = this.props.dishes.map( (d) => {
			return(
				<div key={d.id} className="col-12 mt-5">
					<Media tag="li">
						<Media left middle>
							<Media object src={d.image} alt={d.name} />
						</Media>
						<Media body className="ml-5">
							<Media heading>{d.name}</Media>
							<p>{d.description}</p>
						</Media>
					</Media>
				</div>
			);
		});

		return(
			<div className="container">
				<div className="row">
					<Media list>
						{menu}
					</Media>
				</div>
			</div>
		);
	}
}
 
export default Menu;