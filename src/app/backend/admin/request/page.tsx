"use client";

import { Loading } from "@/components/Loading";
import { useServiceRequestsPage } from "./useServiceRequestsPage";
import InputField from "@/components/Form/Input";
import { ChangeEvent } from "react";
import Button from "@/components/Button";
import CardHeader from "@/components/CardHeader";
import Input from "@/components/Form/Input";

const ServiceRequestsPage = () => {
  const {
    options: { onClickSubmit },
    data: { pageTitle, subTitle },
  } = useServiceRequestsPage();

  return (
    <div className="space-y-8">
      <CardHeader subtitle={subTitle} title={pageTitle} />
      <Input onChange={() => {}} placeholder="Enter text..." value="" />
      <Button
        label="Primary Button"
        onClick={onClickSubmit}
        variant="primary"
      />
    </div>
  );
};

export default ServiceRequestsPage;
