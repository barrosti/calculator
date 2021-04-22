import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test function SUM', () => {
  	let sumResult = service.calculate(1,4,CalculatorService.SUM);
    expect(sumResult).toEqual(5);
  });

  it('should test function SUBTRACTION', () => {
  	let sumResult = service.calculate(10,5,CalculatorService.SUBTRACTION);
    expect(sumResult).toEqual(5);
  });

  it('should test function MULTIPLICATION', () => {
  	let sumResult = service.calculate(3,7,CalculatorService.MULTIPLICATION);
    expect(sumResult).toEqual(21);
  });

  it('should test function DIVISION', () => {
  	let sumResult = service.calculate(50,10,CalculatorService.DIVISION);
    expect(sumResult).toEqual(5);
  });  

  it('should test invalid operation', () => {
  	let sumResult = service.calculate(50,10,'#');
    expect(sumResult).toEqual(0);
  });  
  

});
