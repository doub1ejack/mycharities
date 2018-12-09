import React, {Component} from "react";
import StarRating from "./common/StarRating";



class DishComment extends Component {

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