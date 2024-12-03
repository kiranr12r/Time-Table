export interface ScheduleItem {
    time: string;
    activity: string;
    icon: any;
    category?: string;
    duration?: string;
    isCompleted?: boolean;
}

export interface DayType {
    name: string;
    type: 'weekday' | 'weekend';
    activities: ScheduleItem[];
}