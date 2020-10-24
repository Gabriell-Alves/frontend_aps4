import { Ordination } from "../types/Ordination";


export const mapChartBar = (ordinations : Ordination[], elements: Elements ): ChartBarData[] => {
   const result = ordinations.map(e => {
        return{
            data: [e[elements]],
            name: e.name.charAt(0).toUpperCase() + (e.name).toLowerCase().slice(1).split("_")[0]
        }
    });
    return result;
}

export type ChartBarData = {
    data: number[];
    name: string;
}

export type ChartDonutData = {
    data: number[];
    labels: string[];
}

export type Elements = "elements100" | "elements1000" | "elements10000" | "elements5000";

export const mapChartDonut = (ordinations : Ordination[], elements: Elements ): ChartDonutData => {
    const mapData = ordinations.map(e => e[elements]);
    const maplables = ordinations.map(e => e.name.charAt(0).toUpperCase() + (e.name).toLowerCase().slice(1).split("_")[0]);
    const result =  {
        data: mapData,
        labels: maplables
     } 
     return result;
 }