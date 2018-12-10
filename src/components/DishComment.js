import React, {Component} from "react";
import PropTypes from 'prop-types';
import StarRating from "./common/StarRating";


class DishComment extends Component {

static propTypes = {
    comment: PropTypes.object,
};

constructor(props){
    super(props);
}

render(){
    const comment = this.props.comment;
    return(
        <div style={{paddingLeft: "1em", border: "1px solid #ececec", borderLeft: "3px solid lightgrey", marginBottom: "1em"}}>
            <StarRating rating={comment.rating} /> - 
            <span style={{color: "grey", fontVariant: "small-caps", fontSize: "small", marginLeft: ".5em"}}>{comment.author}</span>
            <p>{comment.comment}</p>
        </div>
    );
}

}

export default DishComment;