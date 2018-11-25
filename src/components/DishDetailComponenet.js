import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { IoIosStar, IoIosStarOutline} from 'react-icons/io';


class DishDetail extends Component {

	constructor(props) {
		super(props);
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