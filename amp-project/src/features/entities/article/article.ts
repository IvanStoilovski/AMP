import { ArticleGroup } from "../article-group/ArticleGroup";
import { AttachmentPoint } from "../attachment-point/AttachmentPoint";
import { HangerType } from "../hanger-type/HangerType";

export interface Article{
  id: string;
  articleNumber: string;
  articleGroup: ArticleGroup;
  hangerType: HangerType;
  numberOfVerticalAttachmentPoints: number;
  attachmentPointParameters: AttachmentPoint[];
  verticalDistanceBetweenEndAttachmentPoints: number | string;
  verticalDistanceBetweenTopAttachmentPointAndTopOfArticle: number;
  verticalDistanceBetweenBottomAttachmentPointAndBottomOfArticle: number;
  minimumVerticalDistanceBetweenNeighbouringAticlesFromTopOfCurrentArticle: number;
  minimumVerticalDistanceBetweenNeighbouringAticlesFromBottomOfCurrentArticle: number;
  allowHangersBetweenVerticalAttachmentPointsOfArticle: boolean;
  definedRadialPositionsOfTheArticle?: number[];
}