import { Ordination } from "../types/Ordination";


export const mapChartBar = (ordinations : Ordination[], elements: Elements ): ChartBarData[] => {
   const result = ordinations.map(e => {
        return{
            data: [e[elements]],
            name: e.name
        }
    });
    return result;
}

export type ChartBarData = {
    data: number[];
    name: string;
}

export type Elements = "elements100" | "elements1000" | "elements10000" | "elements100000";