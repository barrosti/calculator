import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../services';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [ CalculatorService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSum = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalc = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSum.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  }); 

});
