import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

	private number1: string;
	private number2: string;
	private result: number;
	private operation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
 	  this.clean(); 	
  }

 /**
  * Initialize default values
  */
  clean(): void {
  	this.number1 = '0';
  	this.number2 = null;
  	this.operation = null;
  	this.result = null;
  }

  cleanLight(): void {
    this.number1 = null;
    this.number2 = null;
    this.operation = null;
  }

  addNumber(pNumber: string): void {
  	if(this.operation === null){
  		this.number1 = this.concatenateNumber(this.number1, pNumber);
  	} else {
		  this.number2 = this.concatenateNumber(this.number2, pNumber);
  	}
    this.result = null;
  }

  concatenateNumber(pCurrentNumber: string, pNumConcat: string): string {

  	if( pCurrentNumber === '0' || pCurrentNumber === null ){
  		pCurrentNumber = '';
  	}

  	// first digit equals to '.' then concatenate '0' before 
  	if( pNumConcat === '.' && pCurrentNumber === '' ){
  		return '0.';
  	}  	

  	// case already have '.' then return current number
  	if( pNumConcat === '.' && pCurrentNumber.indexOf('.') > -1 ){
  		return pCurrentNumber;
  	}
  	return pCurrentNumber + pNumConcat;
  }

  defineOperation(pOperation: string): void {

  	if( this.operation === null ){
  		this.operation = pOperation;
      if( this.result !== null ){
        this.number1 = this.result.toString();
      }
  		return;
  	}

  	if( this.number2 !== null ){
  		this.result = this.calculatorService.calculate(
  			parseFloat(this.number1), 
  			parseFloat(this.number2), 
  			this.operation);
  		this.operation = pOperation;
  		this.number1 = this.result.toString();
  		this.number2 = null;
  		this.result = null;
  	}
  }

  calculate(): void {
  	if (this.number2 === null) {
  		return;
  	}

  	this.result = this.calculatorService.calculate(
  		parseFloat(this.number1),
  		parseFloat(this.number2),
  		this.operation
  		);

    this.cleanLight();
  }

  get display(): string {
  	if (this.result !== null) {
  		return this.result.toString();
  	}
  	if(this.number2 !== null){
  		return this.number2;
  	}
  	return this.number1;
  }


}
