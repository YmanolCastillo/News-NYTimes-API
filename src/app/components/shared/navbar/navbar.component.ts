import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // dayNews: boolean = true;
  // weekNews: boolean;
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  showDayNews() {
    // this.weekNews = false;
    // this.dayNews = true;
    this._router.navigateByUrl('/home');
  }
  showWeekNews() {
    // this.dayNews = false;
    // this.weekNews = true;
    this._router.navigateByUrl('/weeknews');
  }
}
