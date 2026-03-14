export interface EventData {
  title: string;
  color: string;
  dot: string;
  date: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  description: string;
  allDay?: boolean;
  href?: string;
}

export const events: EventData[] = [
  {
    title: "Easter Eggstravaganza",
    color: "bg-pink-100 text-pink-800",
    dot: "bg-pink-500",
    date: "20260404",
    startTime: "100000",
    endTime: "120000",
    description: "Easter Eggstravaganza! Egg Hunt\\, Bounce Houses\\, and Family Fun for all ages.",
  },
  {
    title: "Easter Sunday",
    color: "bg-purple-100 text-purple-800",
    dot: "bg-purple-500",
    date: "20260405",
    startTime: "070000",
    endTime: "123000",
    description: "Easter Sunday - He Is Risen!\\n7:00 AM - Sunrise Service\\n9:30 AM - Sunday School\\n11:00 AM - Morning Worship",
  },
  {
    title: "Unity Sunday",
    color: "bg-blue-100 text-blue-800",
    dot: "bg-blue-500",
    date: "20260329",
    startTime: "110000",
    endTime: "133000",
    description: "Unity Sunday - Wear your Central t-shirts and join us for lunch after service!",
  },
  {
    title: "Israel Trip",
    color: "bg-amber-100 text-amber-800",
    dot: "bg-amber-500",
    date: "20270118",
    endDate: "20270128",
    startTime: "000000",
    endTime: "235959",
    description: "10-Day Holy Land Experience with Central Baptist Church and the Treasure Coast Baptist Association. January 18-27\\, 2027.",
    allDay: true,
  },
  {
    title: "Food Giveaway",
    color: "bg-green-100 text-green-800",
    dot: "bg-green-500",
    date: "20260328",
    startTime: "090000",
    endTime: "120000",
    description: "Community Food Giveaway at Central Baptist Church.",
  },
  {
    title: "Church Bus Ministry",
    color: "bg-teal-100 text-teal-800",
    dot: "bg-teal-500",
    date: "20260315",
    startTime: "093000",
    endTime: "123000",
    description: "Church Bus Ministry - Need a ride to church? Contact Don Reid to schedule a pickup.",
    href: "mailto:donreid@centralbaptistpsl.com?subject=Church%20Bus%20Ministry",
  },
  {
    title: "Adult Bible Study",
    color: "bg-indigo-100 text-indigo-800",
    dot: "bg-indigo-500",
    date: "20260318",
    startTime: "190000",
    endTime: "200000",
    description: "Adult Bible Study - Discipleship Journey. Wednesdays at 7 PM.",
  },
  {
    title: "God is the Creator",
    color: "bg-orange-100 text-orange-800",
    dot: "bg-orange-500",
    date: "20260315",
    startTime: "093000",
    endTime: "103000",
    description: "Nursery Sunday School - God is the Creator. Sundays at 9:30 AM.",
  },
  {
    title: "Promises",
    color: "bg-rose-100 text-rose-800",
    dot: "bg-rose-500",
    date: "20260315",
    startTime: "093000",
    endTime: "120000",
    description: "Promises from God - Unit 4 Bible Study.\\nKids Sunday School at 9:30 AM\\nKids Worship at 11:00 AM.",
  },
  {
    title: "Wisdom from God",
    color: "bg-sky-100 text-sky-800",
    dot: "bg-sky-500",
    date: "20260315",
    startTime: "093000",
    endTime: "103000",
    description: "Wisdom from God - Youth Group Sunday School. Sundays at 9:30 AM.",
  },
  {
    title: "Adult Sunday School",
    color: "bg-violet-100 text-violet-800",
    dot: "bg-violet-500",
    date: "20260315",
    startTime: "110000",
    endTime: "120000",
    description: "Adult Sunday School - Limited Resources\\, Limitless God. Sundays at 11 AM.",
  },
];

export function downloadICS(event: EventData) {
  const uid = `${event.title.replace(/\s+/g, "-").toLowerCase()}-${event.date}@centralbaptistpsl.com`;
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const location = "Central Baptist Church\\, 202 SW Tulip Blvd\\, Port Saint Lucie\\, FL 34953";

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Central Baptist Church of PSL//Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
  ];

  if (event.allDay && event.endDate) {
    lines.push(`DTSTART;VALUE=DATE:${event.date}`);
    lines.push(`DTEND;VALUE=DATE:${event.endDate}`);
  } else {
    lines.push(`DTSTART;TZID=America/New_York:${event.date}T${event.startTime}`);
    lines.push(`DTEND;TZID=America/New_York:${event.date}T${event.endTime}`);
  }

  lines.push(
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  );

  const icsContent = lines.join("\r\n");
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.title.toLowerCase().replace(/\s+/g, "-")}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
