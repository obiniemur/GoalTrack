export interface CardDataModel {
    goalId: string;
    goalNum: number;
    goalName: string;
    description: string;
    goalStartDate: string;
    targetFinishData: string;
    plans: Plan[];
}

export interface Plan {
    taskNum: string;
    taskName: string;
    taskStartDate: string;
    tastTargetFinishDate: string;
    isComplete: boolean;
}
