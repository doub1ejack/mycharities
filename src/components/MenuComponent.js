import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardImg, CardTitle, Row, Col, Container, CardImgOverlay} from 'reactstrap';
import DishDetail from './DishDetailComponenet';

class Menu extends Component {

	static propTypes = {
		dishes: PropTypes.array,
	}

	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null
		}
	}

	onDishSelect(dish) {
		this.setState( {selectedDish: dish} );
	}

	renderSelectedDish(d) {
		if(d != null) {
			return(
				<DishDetail dish={d} />
			)
		}
		else {
			return(
				<div className="p-3" style={{width: "100%", fontSize: 30, backgroundColor: "#eee", textAlign: "center"}} >
					Click a menu item for details
				</div>
			);
		}
	}

	render() {

		const menuCards = this.props.dishes.map( (d) => {
			return(
				<div key={d.id} className="col-md-6 p-3">
					<Card onClick={ ( ) => {this.onDishSelect(d)} }>
						<CardImg top src={d.image} alt={d.description} />
						<CardImgOverlay>
							<CardTitle style={{
								fontFamily: "sans-serif",
								fontWeight: "bold",
								background: "#ffffffcc",
								textAlign: "center",
								padding: "10px",
								borderRadius: "5px",
							}}>{d.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		return(
			<Container style={{ 
				backgroundColor: "#ffffff99", 
				padding: "40px",
				height: "100vh"
				}}>
				<Row>
					{/* menu item grid */}
					<Col md={7}>
						<Row>
							{menuCards}
						</Row>
					</Col>

					{/* sidebar for selected dish */}
					<Col md={5}  style={{padding: 20}}>
						{this.renderSelectedDish(this.state.selectedDish)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Menu;