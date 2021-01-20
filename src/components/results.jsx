import React, { Component } from 'react';

class Results extends Component {
    render() { 
        return ( 
            <div>
                <p>Number of People Who Voted {this.props.poll.nameOne}: {this.props.poll.numVotesOne}</p>
                <p>Number of People Who Voted {this.props.poll.nameTWo}: {this.props.poll.numVotesTwo}</p>
            </div> 
        );
    }
}
 
export default Results;