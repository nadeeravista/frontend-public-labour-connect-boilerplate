import { SchemaTypes } from "@/types/api/generated.types";

export type ServiceRequest = SchemaTypes["ServiceRequest"];

export const useServiceRequestsPage = () => {
  return {
    data: {
      pageTitle: "Service Requests",
      subTitle: "Here's what's happening with your projects today",
    },
    options: {
      onClickSubmit: () => {
        console.log("onClickSubmit");
      },
    },
  };
};
