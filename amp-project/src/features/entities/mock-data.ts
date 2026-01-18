import { Injectable } from "@angular/core";
import { ArticleGroupType } from "./article-group/ArticleGroup";
import { Article } from "./article/article";
import { AttachmentPoint, CrownOrientation } from "./attachment-point/AttachmentPoint";
import { HangerType } from "./hanger-type/HangerType";

const articleGroups = {
  rozeta: {
    id: 'ag-1',
    articleGroupType: ArticleGroupType.ROZETA
  },
  kljuka: {
    id: 'ag-2',
    articleGroupType: ArticleGroupType.KLJUKA
  },
  odbojna: {
    id: 'ag-3',
    articleGroupType: ArticleGroupType.ODBOJNA_LETEV
  }
};

const attachmentPoints: AttachmentPoint[] = [
  {
    id: 'ap-1',
    numberOfHooksRequired: 2,
    numberOfHorizontalFixingPointsOnCrown: 2,
    crownOrientation: CrownOrientation.UP,
    freeHooksRequiredBetweenFixingHooks: 1
  },
  {
    id: 'ap-2',
    numberOfHooksRequired: 1,
    numberOfHorizontalFixingPointsOnCrown: 1,
    crownOrientation: CrownOrientation.DOWN
  },
  {
    id: 'ap-3',
    numberOfHooksRequired: 3,
    numberOfHorizontalFixingPointsOnCrown: 2,
    crownOrientation: CrownOrientation.UP,
    requiredNumberOfFreeHooksLeftSide: 1,
    requiredNumberOfFreeHooksRightSide: 1
  }
];

const hangerTypes: HangerType[] = [
  {
    id: 'ht-1',
    name: 'Standard Hanger',
    numberOfSegments: '2',
    segmentParameters: [
      {
        id: 'hs-1',
        segmentLength: 120,
        verticalLengthFromStartingPointToStartOfActiveArea: 10,
        verticalLengthFromStartingPointToEndOfActiveArea: 100
      },
      {
        id: 'hs-2',
        segmentLength: 80,
        verticalLengthFromStartingPointToStartOfActiveArea: 5,
        verticalLengthFromStartingPointToEndOfActiveArea: 70
      }
    ]
  },
  {
    id: 'ht-2',
    name: 'Heavy Duty Hanger',
    numberOfSegments: '3',
    segmentParameters: [
      {
        id: 'hs-3',
        segmentLength: 150,
        verticalLengthFromStartingPointToStartOfActiveArea: 15,
        verticalLengthFromStartingPointToEndOfActiveArea: 130
      }
    ]
  }
];

 const articles: Article[] = Array.from({ length: 20 }, (_, i) => ({
  id: `article-${i + 1}`,
  articleNumber: `ART-${1000 + i}`,
  articleGroup:
    i % 3 === 0
      ? articleGroups.rozeta
      : i % 3 === 1
      ? articleGroups.kljuka
      : articleGroups.odbojna,
  hangerType: i % 2 === 0 ? hangerTypes[0] : hangerTypes[1],
  numberOfVerticalAttachmentPoints: (i % 3) + 1,
  attachmentPointParameters: [
    attachmentPoints[i % attachmentPoints.length]
  ],
  verticalDistanceBetweenEndAttachmentPoints: 100 + i * 5,
  verticalDistanceBetweenTopAttachmentPointAndTopOfArticle: 20,
  verticalDistanceBetweenBottomAttachmentPointAndBottomOfArticle: 25,
  minimumVerticalDistanceBetweenNeighbouringAticlesFromTopOfCurrentArticle: 15,
  minimumVerticalDistanceBetweenNeighbouringAticlesFromBottomOfCurrentArticle: 15,
  allowHangersBetweenVerticalAttachmentPointsOfArticle: i % 2 === 0,
  definedRadialPositionsOfTheArticle:
    i % 4 === 0 ? [0, 90, 180, 270] : undefined
}));


@Injectable({
  providedIn: 'root'
})
export class MockArticlesData{
public listArticles(): Article[] {
  return articles;
}

public getArticle(articleId: number): Article {
  return articles[articleId];
}
}

