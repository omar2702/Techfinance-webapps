import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-dashboard-grocer',
  templateUrl: './dashboard-grocer.component.html',
  styleUrls: ['./dashboard-grocer.component.css']
})
export class DashboardGrocerComponent implements OnInit {
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }
  // tslint:disable-next-line:typedef
  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }
  ngOnInit(): void {
  }

}
