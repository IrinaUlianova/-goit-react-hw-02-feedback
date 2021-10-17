import React, { Component } from 'react';
import Section from '../Section/Section';

export default class Votes extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addVote = e => {
    const currentButton = e.target.value;
    console.log(currentButton);
    this.setState(prevValue => ({ [currentButton]: prevValue[currentButton] + 1 }));
    this.countTotalFeedback();
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc = acc + value);
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <div>
        {' '}
        <Section />
        <h2>Please leave your feedback</h2>
        <h3>Statistics</h3>
        <p className="result">Good: {this.state.good}</p>
        <p className="result">Neutral: {this.state.neutral}</p>
        <p className="result">Bad {this.state.bad}</p>
        <p className="result">
          Total {this.countTotalFeedback() === 0 ? 0 : this.countTotalFeedback()}
        </p>
        <p className="result">
          Positiv Feedback:{' '}
          {this.countTotalFeedback() === 0
            ? 0
            : (this.state.good / this.countTotalFeedback()) * 100}
          %
        </p>
      </div>
    );
  }
}
