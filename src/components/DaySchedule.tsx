import { ScheduleItem } from './ScheduleItem';
import { weekdaySchedule } from '../data/scheduleData';

export function DaySchedule() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Weekday Schedule</h2>
            <div className="space-y-2">
                {weekdaySchedule.activities.map((item, index) => (
                    <ScheduleItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}