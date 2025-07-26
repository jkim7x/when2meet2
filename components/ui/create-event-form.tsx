"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { createPoll } from "@/lib/actions";

const times = Array.from({ length : 25}, (_, hour) => {
    const paddedHour = hour.toString().padStart(2, "0");
    return {
      label: `${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? "AM" : "PM"}`,
      value: `${paddedHour}:00`,
    };
  });

const timeZones = Intl.supportedValuesOf('timeZone');

export default function Form() {
  const [eventName, setEventName] = useState<string>("");
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>();
  const [timeFrom, setTimeFrom] = useState<string>("09:00");
  const [timeTo, setTimeTo] = useState<string>("17:00");
  const [timeZone, setTimeZone] = useState<string>();

  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(userTimeZone);
  }, []);

  return (
    <form action={createPoll} className="space-y-6 px-6">
      <div className="space-y-2">
        <Label htmlFor="name">Event Name</Label>
        {/* Event Name component */}
        <Input id="name" type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)}/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="date">Dates</Label>
        <Calendar mode="multiple" numberOfMonths={2} selected={selectedDates} onSelect={setSelectedDates} />
      </div>
      <div>
        <Label htmlFor="time">Time</Label>
        <div className="grid grid-cols-2">
          {/* Time From Component */}
          <Select value={timeFrom} onValueChange={setTimeFrom}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {times.map((time) => 
                <SelectItem key={time.value} value={time.value}>
                  {time.label}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
          {/* Time To component */}
          <Select value={timeTo} onValueChange={setTimeTo}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {times.map((time) => 
                <SelectItem key={time.value} value={time.value}>
                  {time.label}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="zone">Time Zone</Label>
        <Select value={timeZone} onValueChange={setTimeZone}>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Time Zone" />
          </SelectTrigger>
          <SelectContent>
            {timeZones.map((zone) => 
              <SelectItem key={zone} value={zone}>
                {zone}
              </SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full">Create Event</Button>
    </form>
  );
}
