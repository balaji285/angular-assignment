import { Component, OnInit } from '@angular/core';
import { CheckService } from 'src/app/check.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  

  constructor(private check:CheckService) { }

  ngOnInit(): void {
  }

}
