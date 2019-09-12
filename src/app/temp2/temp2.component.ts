import { Component, OnInit } from '@angular/core';
import {NONE_TYPE} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css']
})
export class Temp2Component {
  isReset = false;
  isCooking = false;
  foodName1: string;
  foodName2: string;

  cook() {
    this.isCooking = true;
  }
  reset() {
    this.isCooking = false;
    this.foodName2 = '';
    this.foodName1 = '';
  }
}
