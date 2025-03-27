"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  fullDate: Date;
}

function getCalendarDays(year: number, month: number): CalendarDay[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const days: CalendarDay[] = [];

  // Add previous month days
  for (let i = startingDay - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      isCurrentMonth: false,
      fullDate: new Date(year, month - 1, daysInPrevMonth - i),
    });
  }

  // Add current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: i,
      isCurrentMonth: true,
      fullDate: new Date(year, month, i),
    });
  }

  // Add next month days to complete the grid
  const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      isCurrentMonth: false,
      fullDate: new Date(year, month + 1, i),
    });
  }

  return days;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const calendarDays = getCalendarDays(year, month);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className=" h-full w-full relative">
      {/* Calendar Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-2 border-b">
        <h2 className="text-2xl font-semibold">
          {monthNames[month]} {year}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1))}
            className="p-2 hover:bg-accent rounded-lg"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1))}
            className="p-2 hover:bg-accent rounded-lg"
          >
            Next
          </button>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="h-[calc(100%-4rem)] overflow-auto ">
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Days of Week Header */}
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-muted-foreground py-2"
            >
              {day}
            </div>
          ))}

          {/* Calendar Days */}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={cn(
                "aspect-square p-2 rounded-lg border",
                day.isCurrentMonth
                  ? "bg-background hover:bg-accent cursor-pointer"
                  : "bg-muted/50 text-muted-foreground"
              )}
            >
              <div className="text-sm">{day.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
