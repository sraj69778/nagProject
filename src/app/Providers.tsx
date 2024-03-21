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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImFkMzhmMjU2LTBlY2MtNDZmYi05OTI1LTc3YzI4ZDA4YjBkZiIsIm1lZXRpbmdJZCI6ImJiYmRkMjY4LTJkY2QtNDMzZC04OTQyLTRlZDc1ZDA4MjJmMiIsInBhcnRpY2lwYW50SWQiOiJhYWE0NzlhZS0xZmU2LTRlZTAtYmM3OS02NTkyYzVmMmQ4NGUiLCJwcmVzZXRJZCI6Ijg0OTA4OTg4LTQ5ZGUtNDcxZi1hNjczLWVmNTJkMWFlZWM2NSIsImlhdCI6MTcxMTA0OTA5NCwiZXhwIjoxNzE5Njg5MDk0fQ.LCWJnwdbrVlzER7g0TbSbkrL4vSo-xCoAwdM73OXdAl7gU6sqpx0Wauay67Nl_6xqJIQqFbyESMjknZ69Z9Jv2WrFeMFt6I-ERFKkRJtbOo-beKXYtfZGRWj_nc-GirbiiX8-J0XFqEtTinYRhJrwiv7EZl5Tb1t2ApM53XdJKvKxgPIWU-DCEJ4nw4-KHLD2oXtzgK6yBHYYooKedywqvkJmOWJkGoVa3xDNFoWnpR8Jy5Dkico0Dbkta_qRu9K0VQFGTC7yEv90HTynw1UtH-fZR8xwvL94OUgBmxfqS6Ybl1H_rDNXafq-UZrTUhGU6Y8ZTbiwZZanoobF0b4TA",
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
