export interface WorkTime {
    user: string;
    date: string;
    times: {
        workTimeStart: string,
        workTimeFinish: string,
    },
}