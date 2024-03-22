"use client";

import { useState } from "react";
import MyMeetingUI from "../page-components/meeting/meetingUI";
import { Button } from "@/components/ui/button";

const MeetingPage = () => {
  const [meeting, setMeeting] = useState(false);
  return (
    <>
      <MyMeetingUI />
    </>
  );
};

export default MeetingPage;
