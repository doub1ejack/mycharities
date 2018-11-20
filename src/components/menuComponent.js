import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Row, Container, CardImgOverlay} from 'reactstrap';

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null
		}
	}

	onDishSelect(dish) {
		this.setState( {selectedDish: dish} );
	}

	renderDish(d) {
		if(d != null) {
			return(
				<Card>
					<CardImg top src={d.image} alt={d.description} />
					<CardBody>
						<CardTitle>{d.name}</CardTitle>
						<CardText>{d.description}</CardText>
					</CardBody>
				</Card>
			)
		}
		else {
			return(<div/>);
		}
	}

	render() {

		const menuCards = this.props.dishes.map( (d) => {
			return(
				<div key={d.id} className="col-12 col-md-5 m-3">
					<Card onClick={ ( ) => {this.onDishSelect(d)} }>
						<CardImg top src={d.image} alt={d.description} />
						<CardImgOverlay>
							<CardTitle>{d.name}</CardTitle>
						</CardImgOverlay>
						<CardBody>
							<CardText>{d.description}</CardText>
						</CardBody>
					</Card>
				</div>
			);
		});

		return(
			<Container>
				<Row>
					{menuCards}
				</Row>
				<Row>
					{this.renderDish(this.state.selectedDish)}
				</Row>
			</Container>
		);
	}
}

export default Menu;