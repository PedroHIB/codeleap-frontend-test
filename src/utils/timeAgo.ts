export function timeAgo(date: string | Date) {
  const now = new Date();
  const past = new Date(date);

  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (const { unit, seconds } of units) {
    const value = Math.floor(diffInSeconds / seconds);

    if (value >= 1) {
      return new Intl.RelativeTimeFormat("en", {
        numeric: "auto",
      }).format(-value, unit);
    }
  }

  return "just now";
}
