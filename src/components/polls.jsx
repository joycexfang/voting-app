import React, { Component } from 'react';
import Poll from "./poll";

class Polls extends Component {
    state = {
        polls: [
            {id: 1, nameOne: "Bubble Tea", nameTwo: "Coffee", numVotesOne: 30, numVotesTwo: 20},
            {id: 2, nameOne: "Cookies", nameTwo: "Ice Cream", numVotesOne: 10, numVotesTwo: 40},
            {id: 3, nameOne: "Pizza", nameTwo: "Burgers", numVotesOne: 50, numVotesTwo: 0},
        ]
    }

    handleReset = () => {
        const polls = this.state.polls.map(p => {
            p.numVotesOne = 0;
            p.numVotesTwo = 0;
            return p;
        });
        this.setState({ polls });
    };

    handleVoteOne = poll => {
        const polls = [...this.state.polls];
        const index = polls.indexOf(poll);
        polls[index] = {...poll};
        polls[index].numVotesOne++;
        this.setState({ polls });
    };

    handleVoteTwo = poll => {
        const polls = [...this.state.polls];
        const index = polls.indexOf(poll);
        polls[index] = {...poll};
        polls[index].numVotesTwo++;
        this.setState({ polls });
    };

    render() { 
        return ( 
            <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.polls.map(poll => (
                <Poll 
                    key={poll.id}
                    poll={poll}
                    onVoteOne={this.handleVoteOne}
                    onVoteTwo={this.handleVoteTwo}
                />
                ))}
            </div>
        );
    }
}
 
export default Polls;