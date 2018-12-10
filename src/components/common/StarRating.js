import React, {Component} from "react";
import PropTypes from 'prop-types';
import { IoIosStar, IoIosStarOutline} from 'react-icons/io';

class StarRating extends Component {

    static propTypes = {
        rating: PropTypes.number,
    };

    // Renders a five star review.
    // Uses the provided number of stars and pads with empty stars.
	renderStars(stars){
		const starList = [];

		for(let i=0; i<5; i++){
            starList.push( this.starIcon( (i<stars) ? false : true ) );
		}

		return(starList);
    }

    // Returns either an outlined star, or a filled star
    starIcon(outline) { 
        return outline ? <IoIosStarOutline color={"goldenrod"} /> : <IoIosStar color={"goldenrod"} /> 
    }
    
    // Component Render()
    render(){
        return( this.renderStars(this.props.rating) )
    }

}

export default StarRating;