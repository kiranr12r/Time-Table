import {
    Sunrise,
    Coffee,
    BookOpen,
    Utensils,
    Home,
    Brain,
    Dumbbell,
    Music,
    Users,
    Gamepad,
    Tv,
    Book,
    Moon,
    Palette,
    ShoppingBag,
    Bike,
} from 'lucide-react';
import { DayType } from '../types/schedule';

export const weekdaySchedule: DayType = {
    name: 'Weekday',
    type: 'weekday',
    activities: [
        {
            time: '06:00 AM',
            activity: 'Wake Up & Morning Routine',
            icon: Sunrise,
            category: 'Morning',
            duration: '30 min',
        },
        {
            time: '06:30 AM',
            activity: 'Exercise / Workout',
            icon: Dumbbell,
            category: 'Health',
            duration: '1 hour',
        },
        {
            time: '07:30 AM',
            activity: 'Breakfast & Preparation',
            icon: Coffee,
            category: 'Meals',
            duration: '45 min',
        },
        {
            time: '08:50 AM',
            activity: 'College Starts',
            icon: BookOpen,
            category: 'Education',
            duration: '7 hours 40 min',
        },
        {
            time: '11:00 AM',
            activity: 'Short Break',
            icon: Coffee,
            category: 'Break',
            duration: '15 min',
        },
        {
            time: '01:00 PM',
            activity: 'Lunch Break',
            icon: Utensils,
            category: 'Meals',
            duration: '1 hour',
        },
        {
            time: '04:30 PM',
            activity: 'College Ends',
            icon: Home,
            category: 'Education',
        },
        {
            time: '05:30 PM',
            activity: 'Self Study / Assignments',
            icon: Brain,
            category: 'Education',
            duration: '2 hours',
        },
        {
            time: '07:30 PM',
            activity: 'Dinner & Family Time',
            icon: Utensils,
            category: 'Family',
            duration: '1 hour',
        },
        {
            time: '09:00 PM',
            activity: 'Review & Preparation',
            icon: BookOpen,
            category: 'Education',
            duration: '1.5 hours',
        },
        {
            time: '10:30 PM',
            activity: 'Bedtime',
            icon: Moon,
            category: 'Rest',
        },
    ],
};

export const weekendSchedule: DayType = {
    name: 'Weekend',
    type: 'weekend',
    activities: [
        {
            time: '08:00 AM',
            activity: 'Wake Up & Relaxation',
            icon: Sunrise,
            category: 'Morning',
            duration: '1 hour',
        },
        {
            time: '09:00 AM',
            activity: 'Breakfast & Music',
            icon: Music,
            category: 'Leisure',
            duration: '1 hour',
        },
        {
            time: '10:00 AM',
            activity: 'Creative Time / Art',
            icon: Palette,
            category: 'Hobby',
            duration: '2 hours',
        },
        {
            time: '12:00 PM',
            activity: 'Weekend Shopping',
            icon: ShoppingBag,
            category: 'Errands',
            duration: '2 hours',
        },
        {
            time: '02:00 PM',
            activity: 'Lunch with Friends',
            icon: Users,
            category: 'Social',
            duration: '1.5 hours',
        },
        {
            time: '03:30 PM',
            activity: 'Outdoor Activities',
            icon: Bike,
            category: 'Recreation',
            duration: '2 hours',
        },
        {
            time: '05:30 PM',
            activity: 'Gaming / Entertainment',
            icon: Gamepad,
            category: 'Entertainment',
            duration: '1.5 hours',
        },
        {
            time: '07:00 PM',
            activity: 'Dinner',
            icon: Utensils,
            category: 'Meals',
            duration: '1 hour',
        },
        {
            time: '08:00 PM',
            activity: 'Movie Night',
            icon: Tv,
            category: 'Entertainment',
            duration: '2.5 hours',
        },
        {
            time: '10:30 PM',
            activity: 'Reading Time',
            icon: Book,
            category: 'Leisure',
            duration: '30 min',
        },
        {
            time: '11:00 PM',
            activity: 'Bedtime',
            icon: Moon,
            category: 'Rest',
        },
    ],
};