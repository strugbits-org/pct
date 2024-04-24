"use client";
import { useContext, useState } from "react";
import { DesignContext } from "@/context/design";

export const Form = ({ children, formSchema, getFormValues, url }) => {
  const { updateForm } = useContext(DesignContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = await getFormValues(e.target);
    try {
      updateForm({
        message: "",
        disabled: true,
      });

      formSchema.parse(formData);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.message) {
        updateForm({
          message: data.message,
          disabled: false,
        });

        e.target.reset();

        setTimeout(() => {
          updateForm({
            message: "",
            disabled: false,
          });
        }, 3000);
      }
    } catch (e) {
      console.log(e);
      updateForm({
        message: "Something went wrong",
        disabled: false,
      });
    }
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};
