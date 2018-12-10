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
        <div>
            <StarRating rating={comment.rating} /> - {comment.author}
        </div>
    );
}

}

export default DishComment;