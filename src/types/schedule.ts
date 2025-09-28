export interface ScheduleServiceRequest {
  id: string;
  requestNumber: string;
  providerName: string;
  location: string;
  date: string;
  customerName: string;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled" | "Scheduled";
  scheduledStartTime: string | null;
  scheduledEndTime: string | null;
  description: string;
}

export interface DaySchedule {
  date: string;
  serviceRequests: ScheduleServiceRequest[];
}

export interface CustomerScheduleResponse {
  customerId: string;
  fromDate: string;
  toDate: string;
  weekSchedule: DaySchedule[];
}
