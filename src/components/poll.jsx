import React, { Component } from 'react';

class Poll extends Component {
    render() { 
        console.log(this.props);
        return (
            <div className="container">
                <div className="row m-2">
                    <button onClick={() => this.props.onVoteOne(this.props.poll)} 
                            className="btn col-sm bg-info text-dark">
                    {this.props.poll.nameOne}
                    </button>
                    <button onClick={() => this.props.onVoteTwo(this.props.poll)}
                            className="btn col-sm bg-dark text-light">
                    {this.props.poll.nameTwo}
                    </button>
                </div>
                <div>
                    <p>Number of People Who Voted {this.props.poll.nameOne}: {this.props.poll.numVotesOne}</p>
                    <p>Number of People Who Voted {this.props.poll.nameTWo}: {this.props.poll.numVotesTwo}</p>
                </div> 
            </div>
        );
    }
}
 
export default Poll;