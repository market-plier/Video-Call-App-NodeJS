import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @HostBinding('class.disabled')@Input() disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
