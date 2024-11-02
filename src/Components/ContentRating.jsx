
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike:() => {
            this.setState((prevstate) => ({
                likes: prevstate.likes +1,
                totalRatings: prevstate.totalRatings +1
            }));

        },
        handleDislike:() => {
            this.setState((prevstate) =>({
                dislikes: prevstate.dislikes +1,
                totalRatings: prevstate.totalRatings +1
            }));

        }
    };  
}
  render() {
    return (
     <div className='content-rating'>
        <p>add text here</p>
        <div className='rating-buttons'>
            <button className= 'like-button' onClick={this.state.handleLike}>
                like ({this.state.likes})
            </button>
            <button className= "dislike-button" onClick={this.state.handleDislike}>
                dislike ({this.state.dislikes})
            </button>
        </div>
        <p>Total Rating: {this.state.totalRatings}</p>
     </div>
    );
  }
}

export default ContentRating;
