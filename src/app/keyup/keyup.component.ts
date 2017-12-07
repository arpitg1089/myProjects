import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  values = '';
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  constructor() { }

  ngOnInit() {
  }

}
