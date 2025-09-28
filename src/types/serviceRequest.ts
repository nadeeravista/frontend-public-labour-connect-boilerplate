export interface ServiceRequest {
  id: string;
  request_number: string;
  customer_id: string;
  service_category_id: string | null;
  request_type: string | null;
  priority: string | null;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  description: string;
  detailed_description: string | null;
  location: string;
  requested_date: string | null;
  service_required_date: string | null;
  service_required_duration: string | null;
  scheduled_date: string | null;
  estimated_duration: string | null;
  actual_duration: string | null;
  customer_requested_hours: string | null;
  assigned_provider_id: string | null;
  provider_notes: string | null;
  customer_notes: string | null;
  labor_hours: string | null;
  labor_rate: string | null;
  labor_cost: string | null;
  total_cost: string | null;
  warranty_covered: boolean;
  sla_target: string | null;
  sla_actual: string | null;
  sla_status: string | null;
  assigned_date: string | null;
  scheduled_start_time: string | null;
  scheduled_end_time: string | null;
  actual_start_time: string | null;
  actual_end_time: string | null;
  created_at: string;
  updated_at: string;
  customer_name: string;
  customer_email: string;
  service_category_name: string | null;
  provider_name: string | null;
  customer_rating?: number | null;
  provider_rating?: number | null;
}

export interface ServiceRequestsResponse {
  data: {
    serviceRequests: ServiceRequest[];
  };
}
