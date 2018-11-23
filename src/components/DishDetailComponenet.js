import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";


class DishDetail extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		let { dish } = this.props;

		return(
			<Card>
				<CardImg top src={dish.image} alt={dish.description} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		)
	}
}

export default DishDetail;