import React, { Component} from 'react'
import Question from './question/Question';
import Answer from './answer/Answer';
import './TrafficRules.css';
import { Link } from 'react-router-dom';
import {answers,correctAnswers,quiestions} from './TrafficRulesData'


export default class TrafficRules extends Component {

  // initiating the local state
  state = {
      answers: answers,
      quiestions: quiestions,
      correctAnswers: correctAnswers,
      correctAnswer: 0,
      clickedAnswer: 0,
      step: 1,
      score: 0
  }
  
  // the method that checks the correct answer
  checkAnswer = answer => {
      const { correctAnswers, step, score} = this.state;
      if(answer === correctAnswers[step]){
          this.setState({
              score: score + 1,
              correctAnswer: correctAnswers[step],
              clickedAnswer: answer
          });
      }else{
          this.setState({
              correctAnswer: 0,
              clickedAnswer: answer
          });
      }
  }

  // method to move to the next question
  nextStep = (step) => {
      this.setState({
          step: step + 1,
          correctAnswer: 0,
          clickedAnswer: 0
      });
  }

  
  render(){
      function float2int (value) {
          return value | 0;
      }
      
      let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
      const scorePercentage =  score/Object.keys(quiestions).length*100;
      const formatScorePercentage = float2int(scorePercentage);
      return(
          <div className="Content-container">
              <h2 className='Content-title'>ກົດຈະລາຈອນ</h2>
              <div className="Content">
              {step <= Object.keys(quiestions).length ? 
                  (<>
                      <Question
                          question={quiestions[step]}
                          step={step}
                      />
                      <Answer
                          answer={answers[step]}
                          step={step}
                          checkAnswer={this.checkAnswer}
                          correctAnswer={correctAnswer}
                          clickedAnswer={clickedAnswer}
                      />
                      <button
                      className="NextStep"
                      disabled={
                          clickedAnswer && Object.keys(quiestions).length >= step
                          ? false : true
                      }
                      onClick={() => this.nextStep(step)}>ຂໍ້ຖັດໄປ <i className="fa-solid fa-arrow-right"></i></button>
                  </>) : (
                      <div className="finalPage">
                          <h2>ຄະແນນ: {formatScorePercentage}%</h2>
                          <h2>ຕອບຖືກ: {score} ໃນ {Object.keys(quiestions).length} ຂໍ້</h2>
                          <button className="NextStep" onClick={()=> this.setState({step: 1})}>ເລີ່ມໃໝ່ <i className="fa-solid fa-arrow-rotate-right"></i></button>
                      </div>
                  )
              }
          
       
          </div>
              <Link to='/'><button className='btn'><i className="fa-solid fa-house-chimney"></i></button></Link>
          </div>
         
         
      );
  }
}
