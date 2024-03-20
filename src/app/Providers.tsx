/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDyteClient, DyteProvider } from "@dytesdk/react-web-core";
export const queryClient = new QueryClient();
import { useEffect } from "react";

export const Providers = ({ children }: any) => {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      authToken:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImFkMzhmMjU2LTBlY2MtNDZmYi05OTI1LTc3YzI4ZDA4YjBkZiIsIm1lZXRpbmdJZCI6ImJiYmRkMjY4LTJkY2QtNDMzZC04OTQyLTRlZDc1ZDA4MjJmMiIsInBhcnRpY2lwYW50SWQiOiJhYWE0NzlhZS0xZmU2LTRlZTAtYmM3OS02NTkyYzVmMmQ4NGUiLCJwcmVzZXRJZCI6Ijg0OTA4OTg4LTQ5ZGUtNDcxZi1hNjczLWVmNTJkMWFlZWM2NSIsImlhdCI6MTcxMDgwMjgwOSwiZXhwIjoxNzE5NDQyODA5fQ.BDnKQELokYS8V12I-H0UzoNbqjmK7Pf4Q1z3IvEA_2YFwH7Z7bQ0mXFlIWN-XDV0ByW1CYdMNlWFs-BGp9KQX8-Nsgj7aPL5OcJ0JQig8qmkXpKeDgTU0hljgneujNbmW3f_V6Cd2ymcHV31T2sqRcvdPH_fZ4H4bMGzvg4dbI26p7qwUYwz1HrUulDRCMlqfKt532zDSyCQvngX6ec6GxcsLtyl2dIurYz8MdrWdb399pVjChvNtK965nd7ndDh1AFAty1HmiLnKuhLwzlhD5e4Q7Caj2HBBWlwyl3equoU7ykkcdKqxzdwm8eGNqa8w0siC9umOaNVaWIpfEzl5w",
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DyteProvider value={meeting}>{children}</DyteProvider>
    </QueryClientProvider>
  );
};
