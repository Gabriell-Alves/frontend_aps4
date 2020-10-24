export type Ordination = {
    id: number;
    name: Sortname;
    elements100: number;
	elements1000: number;
	elements10000: number;
    elements5000: number;
}

export type Sortname = "SELECTION_SORT" | "BUBBLE_SORT" | "QUICK_SORT";