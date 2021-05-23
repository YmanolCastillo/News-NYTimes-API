import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  media: any;
  id: number;
  article: any;
  constructor(
    http: HttpClient,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newsService.getNews('shared/7.json').subscribe((data) => {
      this.data = data;
      console.log(data);

      // console.log(data['results'][1].media[0]['media-metadata'][0].url);
    });
  }

  onNewsDetails(id) {
    this.router.navigateByUrl(`/news-details/${id}`);
  }
}
