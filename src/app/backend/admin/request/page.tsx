"use client";

import { Loading } from "@/components/Loading";
import { useServiceRequestsPage } from "./useServiceRequestsPage";

const ServiceRequestsPage = () => {
  const {} = useServiceRequestsPage();

  return <div className="space-y-8"></div>;
};

export default ServiceRequestsPage;
