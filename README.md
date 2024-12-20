# Dynamic Daily Schedule App 📅

A beautiful and responsive React application for managing daily schedules, built with React, TypeScript, and Tailwind CSS. This application helps you organize your daily activities with a clean and intuitive interface, distinguishing between weekday and weekend schedules.

![Schedule App Preview](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2068)

## ✨ Features

- **Real-time Clock Display**: Shows current time and updates automatically
- **Dynamic Day Detection**: Automatically switches between weekday and weekend schedules
- **Beautiful UI**: Modern and clean interface with smooth transitions
- **Categorized Activities**: Activities are organized with icons and categories
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Indicators**: Icons and color-coding for different activity types
- **Duration Tracking**: Shows duration for each scheduled activity

## 🚀 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:
```bash
cd daily-schedule-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── TimeTable.tsx       # Main timetable component
│   ├── DaySchedule.tsx     # Weekday schedule component
│   ├── WeekendSchedule.tsx # Weekend schedule component
│   └── ScheduleItem.tsx    # Individual schedule item component
├── types/
│   └── schedule.ts         # TypeScript interfaces
└── data/
    └── scheduleData.ts     # Schedule data and configurations
```

## 🎨 Features Breakdown

### Weekday Schedule
- College hours: 8:50 AM - 4:30 PM
- Structured daily routine
- Academic and study periods
- Exercise and meal times
- Evening activities

### Weekend Schedule
- Flexible morning start
- Leisure activities
- Social interactions
- Entertainment options
- Relaxation periods

## 🎯 Usage

The application automatically detects the current day and displays the appropriate schedule:

- **Weekdays (Monday-Friday)**: Shows the college schedule with structured academic hours
- **Weekends (Saturday-Sunday)**: Displays a more relaxed schedule with leisure activities

Each activity shows:
- Time
- Activity name
- Category
- Duration (where applicable)
- Relevant icon

## 🛠️ Customization

You can customize the schedule by modifying the `scheduleData.ts` file:

```typescript
export const weekdaySchedule = {
  activities: [
    {
      time: "08:00 AM",
      activity: "Your Activity",
      icon: YourIcon,
      category: "Category",
      duration: "Duration"
    },
    // Add more activities...
  ]
};
```

## 📱 Responsive Design

The application is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)