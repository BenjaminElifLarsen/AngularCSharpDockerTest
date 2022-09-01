import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private back: BackendService) { }
  test!: string;

  ngOnInit(): void {
    this.back.test().subscribe(
      next => { this.test = next; console.log(next); }
    )  }

}
