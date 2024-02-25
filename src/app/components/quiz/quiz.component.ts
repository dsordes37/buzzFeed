import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import quizzquestions from 'src/assets/data/quizz_questions.json'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  title:string=''
  question:string=''
  options:any[]=[]
  result:string=''
  finished:boolean=false

  round:number=0
  selecteds:string[]=[]


  constructor() { }

  ngOnInit(): void {
    if(quizzquestions){
      this.finished=false

      this.title=quizzquestions.title

      this.question=quizzquestions.questions[this.round].question
      this.options=quizzquestions.questions[this.round].options



    }
  }
  async checkResult(array:string[]){
    const result = array.reduce((previous, current, i, array)=>{
      if(
        array.filter(item=>item==previous).length>
        array.filter(item=>item==current).length
      ){
        return previous
      }else{
        return current
      }
    })

    return result
  }

  async proxima(alias:string){
    this.selecteds.push(alias)

    if(this.round<(quizzquestions.questions.length-1)){
      
      this.round++

      this.question=quizzquestions.questions[this.round].question
      this.options=quizzquestions.questions[this.round].options
    }else{

      const finalResult:string= await this.checkResult(this.selecteds)

      
      if(finalResult=='A'){
        this.result=quizzquestions.results.A
      }else{
        this.result=quizzquestions.results.B
      }
      this.finished=true
    } 
  }


  restart(){
    this.result=''
    this.selecteds=[]
    this.round=0
    this.question=quizzquestions.questions[this.round].question
    this.options=quizzquestions.questions[this.round].options
    this.finished=false
  }
}
