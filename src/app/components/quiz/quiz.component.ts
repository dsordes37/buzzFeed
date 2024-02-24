import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  title:string='Heroi ou Vilão.'
  question:string='Qual super poder você gostaria de ter ?'
  options:string[]=['invicibilidade', 'raio laser', 'super força', 'invicibilidade', 'raio laser', 'super força']
  result:string='Você é um heroi !'
  option:string='você selecionou tananan'
  finished:boolean=true



  constructor() { }

  ngOnInit(): void {
  }

}
