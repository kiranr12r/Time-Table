import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { DaySchedule } from './DaySchedule';
import { WeekendSchedule } from './WeekendSchedule';

export function TimeTable() {
    const [currentDay] = useState(new Date().getDay());
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const isWeekend = currentDay === 0 || currentDay === 6;
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Calendar className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-3xl font-bold text-gray-800">My Daily Schedule</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <p className="font-medium">{currentTime}</p>
                        </div>
                        <p className="text-lg font-semibold text-indigo-600">
                            {dayNames[currentDay]}
                        </p>
                        {!isWeekend && (
                            <p className="text-sm text-gray-500">
                                College Hours: 8:50 AM - 4:30 PM
                            </p>
                        )}
                    </div>
                </header>

                {isWeekend ? <WeekendSchedule /> : <DaySchedule />}
            </div>
        </div>
    );
}