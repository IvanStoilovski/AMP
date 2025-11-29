export interface AttachmentPoint {
    id: string;
    numberOfHooksRequired: number;
    numberOfHorizontalFixingPointsOnCrown: number;
    crownOrientation: CrownOrientation;
    requiredNumberOfFreeHooksLeftSide?: number;
    requiredNumberOfFreeHooksRightSide?: number;
    freeHooksRequiredBetweenFixingHooks?: number;
}

export enum CrownOrientation{
    UP = 0,
    DOWN = 1
}