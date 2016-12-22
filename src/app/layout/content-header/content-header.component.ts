import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {}

}
