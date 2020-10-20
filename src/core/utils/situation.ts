import { Situation } from "../types/Coordinate";

export const defineSituation = (situation : Situation) => {
    switch (situation) {
        case 'PRESERVED':
            return 'Preservada';
        case 'DEFORESTED':
            return 'Desmatada';
        case 'DEFORESTATIONINPROGRESS':
            return 'Desmatamento em progresso';
        case 'REFORESTATIONINPROGRESS':
            return 'Reflorestamento em progresso';
    }
}