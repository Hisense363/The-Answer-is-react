import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import Response from './Response'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }

  submitResponse(event) {
    // this function should fire when the user fills the response and hits 'enter'
      // Is the user response correct? 
      // yes/no? What should happen?
      // compare input value to question answer
    if(this.state.currentQuestion.answer == event.target.value){
      this.setState((prevState, props) => {
      return {score: prevState.score += prevState.currentQuestion.value, currentQuestion: {}};
    });
    }else{
      this.setState((prevState, props) => {
        return {score: prevState.score -= prevState.currentQuestion.value, currentQuestion: {}};
      });
    }
     //this.setState(this.state.currentQuestion = {});
  }

  selectQuestion(event) {
    this.setState(this.state.currentQuestion = event);
    this.setState(() => this.state.answeredQuestions.push(event));
  }

  componentDidMount() {
    fetch("http://jservice.io/api/categories?count=100")
      .then(res => res.json())
      .then(

        (result) => {
          var clues = [];
          for (let i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * 100);
            fetch("http://jservice.io/api/category?id=" + result[random].id)
              .then(res => res.json())
              .then((result) => {
                clues.push(result);
                this.setState(prevState => {
                  return {results: clues}
                });
              })
              }
          }
      )}

        

        

      //   (error) => {
      //     this.setState({
      //       error
      //     });
      //   }
      // )
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  
  render() {
    return (
      <div id={'app'}>
      <div id="gameboard">
        <Gameboard 
          currentQuestion={this.state.currentQuestion}
          selectQuestion={this.selectQuestion}
          categories={this.state.results}
          answeredQuestions={this.state.answeredQuestions}
        />
      </div>
        <Scoreboard
          score={this.state.score}
        />
        <Response
          recordResponse={true}
          submitResponse={this.submitResponse}
        />
      </div>
    );
  }
}
