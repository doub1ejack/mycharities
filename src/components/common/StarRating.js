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
        let outline = false;

		for(let i=0; i<5; i++){
            outline = (i<stars) ? false : true
            starList.push( this.starIcon( outline, i ) );
		}

		return(starList);
    }

    // Returns either an outlined star, or a filled star
    starIcon(outline, key) { 
        const s = {verticalAlign: "text-top"}
        return outline ? <IoIosStarOutline key={key} color={"#b3b3b3"} style={s} /> : <IoIosStar key={key} color={"goldenrod"} style={s} /> 
    }
    
    // Component Render()
    render(){
        return( this.renderStars(this.props.rating) )
    }

}

export default StarRating;