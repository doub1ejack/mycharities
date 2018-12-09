import React, { Component } from "react";
import { Button, Card, CardImg, CardBody, CardTitle, CardText, Collapse } from "reactstrap";
import { IoIosStar, IoIosStarOutline} from 'react-icons/io';


class DishDetail extends Component {

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

	renderStars(stars){
		const starList = [];
		const starIcon = (outline) => { return outline ? <IoIosStarOutline color={"goldenrod"} /> : <IoIosStar color={"goldenrod"} /> }

		for(let i=0; i<5; i++){
			if(i<stars) {
				starList.push( starIcon(false) );
			}
			else {
				starList.push( starIcon(true) );
			}
		}

		return(starList);
	}

	renderComments(comments) {
		const renderedComments = comments.map( (c) => {
			return(
				<React.Fragment>
					<div>
						{this.renderStars(c.rating)} - {c.author}
					</div>
				</React.Fragment>
			)
		});

		return(
			<div className="mt-3">
				{/* TODO: how to keep averageRating in State, and have it update onChange */}
				<p><strong>Reviews {this.renderStars(this.getAverageRating())}</strong></p>
				<Button outline color="primary" size="sm" onClick={this.toggleRatings} style={{ marginBottom: '1rem' }}>
					{ (this.state.showRatings) ? "Hide Reviews" : "Read Reviews" }
				</Button>
				<Collapse isOpen={this.state.showRatings}>
					{renderedComments}
				</Collapse>
			</div>
		);
	}

	render() {
		let { dish } = this.props;

		return(
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
					<CardText>{dish.description}<br/>{this.renderComments(dish.comments)}</CardText>
				</CardBody>
			</Card>
		)
	}
}

export default DishDetail;