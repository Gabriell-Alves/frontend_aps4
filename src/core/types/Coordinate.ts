export type Coordinate = {
    id: number;
    latitude: number;
    longitude: number;
    urlImage: string;
    date: string;
    situation: Situation;
}

export type Situation = 'PRESERVED'|'DEFORESTED' | 'DEFORESTATIONINPROGRESS' | 'REFORESTATIONINPROGRESS';

export type CoordinateResponse = {
    content: Coordinate[];
    totalPages: number;
}