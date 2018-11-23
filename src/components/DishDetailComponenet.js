import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";


class DishDetail extends Component {

	constructor(props) {
		super(props);

	}

	renderComments(comments) {
		const renderedComments = comments.map( (c) => {
			return(
				<div>{c.author}</div>
			)
		});

		return(
			<div className="mt-3">
				<strong>Reviews</strong>
				{renderedComments}
			</div>
		);
	}

	render() {
		let { dish } = this.props;

		return(
			<Card>
				<CardImg top src={dish.image} alt={dish.description} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}<br/>{this.renderComments(dish.comments)}</CardText>
				</CardBody>
			</Card>
		)
	}
}

export default DishDetail;