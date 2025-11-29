import { AttachmentPoint } from "../attachment-point/AttachmentPoint";

export interface ArticleGroup {
  id: string;
  articleGroupType: ArticleGroupType;
  defaultParams?: AttachmentPoint;
}

export enum ArticleGroupType {
    ROZETA = 'Rozeta',
    ODBOJNA_LETEV = 'Odbojna letev',
    KLJUKA = 'Kljuka',
    CEV_POTEZALA = 'Cev Potezala',
    OSTALO = 'Ostalo'
}