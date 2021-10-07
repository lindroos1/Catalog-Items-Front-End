import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.html',
  styleUrls: ['./container-component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  @Input() public name:string = "";

  ngOnInit(): void {
  }

}
