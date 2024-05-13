export const isDatebetween = (date: string, start: string, end: string) : boolean => {
    return (new Date(date).getTime() >= new Date(start).getTime() && new Date(date).getTime() <= new Date(end).getTime());
}

export const getDayDifference = (from: string, to: string) : number => {
    return (
    (new Date(to).getTime() - new Date(from).getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;
}