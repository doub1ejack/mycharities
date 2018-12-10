import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Card, CardImg, CardBody, CardTitle, CardText, Collapse } from "reactstrap";
import DishComment from "./DishComment";
import StarRating from "./common/StarRating";


class DishDetail extends Component {

	static propTypes = {
		dish: PropTypes.object,
	};

	constructor(props) {
		super(props);
		this.toggleRatings = this.toggleRatings.bind(this);
		this.state = {
			aveRating: this.getAverageRating(),
			showRatings: false,
		}
	}

	getAverageRating(){
		const comments = this.props.dish.comments;
		const totalStars = comments.reduce( (total, comment) => { return total + comment.rating; }, 0);
		const averageStars = totalStars / (comments.length + 1);

		return Math.round(averageStars);
	}

	toggleRatings(){
		this.setState({showRatings: !this.state.showRatings})
	}

	renderComments(comments) {
		const renderedComments = comments.map( (c) => {
			return(<DishComment comment={c} key={c.id}/>)
		});

		return(
			<div className="mt-3">
				{/* TODO: how to keep averageRating in State, and have it update onChange */}
				<p>
					<strong>
						Average Rating <StarRating rating={this.getAverageRating()} />
					</strong>
					<Button outline className="float-right" color="primary" size="sm" onClick={this.toggleRatings} style={{ marginBottom: '1rem' }}>
						{ (this.state.showRatings) ? "Hide Reviews" : "Read Reviews" }
					</Button>
				</p>
				<Collapse isOpen={this.state.showRatings}>
					{renderedComments}
				</Collapse>
			</div>
		);
	}

	render() {
		let { dish } = this.props;

		return(
			<div>
			<Card>
				<CardImg top src={dish.image} alt={dish.description} />
				<CardBody>
					<CardTitle style={{
								fontFamily: "fantasy",
								fontWeight: "bold",
								background: "#d3d3d3ab",
								textAlign: "center",
								padding: "10px",
								borderRadius: "5px",
							}}>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
			{this.renderComments(dish.comments)}
		</div>
		)
	}
}

export default DishDetail;