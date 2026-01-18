import { Component, OnInit } from "@angular/core";
import { MockArticlesData } from "../../../entities/mock-data";
import { Article } from "../../../entities/article/article";
import { TuiTable } from '@taiga-ui/addon-table';
import { CommonModule, NgForOf } from "@angular/common";
import { TuiScrollable, TuiScrollbar } from "@taiga-ui/core";
	import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

@Component({
  selector: 'amp-list-articles',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    TuiTable,
    CdkFixedSizeVirtualScroll,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
  ],
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css'],
})
export class ListArticlesComponent implements OnInit {
  title = 'Listing the articles';
  articles: Article[] = [];
public columnsDef = [
  { title: 'ID', property: 'id' },
  { title: 'Article number', property: 'articleNumber' },
  { title: 'Article group', property: 'articleGroup.articleGroupType' },
  { title: 'Hanger type', property: 'hangerType.name' },
  { title: '# Segments', property: 'hangerType.segmentParameters.length' },
  { title: '# Vertical AP', property: 'numberOfVerticalAttachmentPoints' },
];

public columns = this.columnsDef.map(c => c.property);

  constructor(private mockData: MockArticlesData) {}

  ngOnInit(): void {
    this.articles = this.mockData.listArticles();
  }

  getValue(obj: any, path: string) {
    return path.split('.').reduce((o, key) => o?.[key], obj);
  }
}
