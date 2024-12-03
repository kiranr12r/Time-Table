
import { ScheduleItem as ScheduleItemType } from '../types/schedule';

interface ScheduleItemProps {
    item: ScheduleItemType;
}

export function ScheduleItem({ item }: ScheduleItemProps) {
    const Icon = item.icon;

    return (
        <div className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-colors group">
            <div className="w-20 text-sm font-medium text-indigo-600">
                {item.time}
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mx-4 group-hover:bg-indigo-200 transition-colors">
                <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
                <p className="text-gray-800 font-medium">{item.activity}</p>
                <div className="flex gap-2 mt-1">
                    {item.category && (
                        <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                            {item.category}
                        </span>
                    )}
                    {item.duration && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {item.duration}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}