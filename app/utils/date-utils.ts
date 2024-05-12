export const isDatebetween = (date: string, start: string, end: string) : boolean => {
    return (new Date(date).getTime() >= new Date(start).getTime() && new Date(date).getTime() <= new Date(end).getTime());
}