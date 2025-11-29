export interface HangerType { //needs to be moved as a separate entity, has its own params
    id: string;
    name: string;
    numberOfSegments: string;
    segmentParameters: HangerSegment[];
}

export interface HangerSegment {
    id: string;
    segmentLength: number;
    verticalLengthFromStartingPointToStartOfActiveArea: number;
    verticalLengthFromStartingPointToEndOfActiveArea: number;
}


