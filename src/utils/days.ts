/**
 * Days configuration for provider availability
 */
export const DAYS_CONFIG = [
  {
    key: "monday",
    id: "monday",
    name: "monday",
    label: "Mon",
    dayName: "Monday",
  },
  {
    key: "tuesday",
    id: "tuesday",
    name: "tuesday",
    label: "Tue",
    dayName: "Tuesday",
  },
  {
    key: "wednesday",
    id: "wednesday",
    name: "wednesday",
    label: "Wed",
    dayName: "Wednesday",
  },
  {
    key: "thursday",
    id: "thursday",
    name: "thursday",
    label: "Thu",
    dayName: "Thursday",
  },
  {
    key: "friday",
    id: "friday",
    name: "friday",
    label: "Fri",
    dayName: "Friday",
  },
  {
    key: "saturday",
    id: "saturday",
    name: "saturday",
    label: "Sat",
    dayName: "Saturday",
  },
  {
    key: "sunday",
    id: "sunday",
    name: "sunday",
    label: "Sun",
    dayName: "Sunday",
  },
] as const;

export type DayKey = (typeof DAYS_CONFIG)[number]["key"];
export type DayName = (typeof DAYS_CONFIG)[number]["dayName"];

/**
 * Helper function to build availableDays array from form data
 */
export const buildAvailableDays = (
  formData: Record<DayKey, boolean>,
): DayName[] => {
  return DAYS_CONFIG.filter((day) => formData[day.key]).map(
    (day) => day.dayName,
  );
};

/**
 * Helper function to check if a day is available
 */
export const isDayAvailable = (
  availableDays: string | undefined,
  dayName: DayName,
): boolean => {
  if (!availableDays) return false;
  return availableDays.split(", ").includes(dayName);
};
