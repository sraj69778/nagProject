"use client";

import { useState } from "react";
import MyMeetingUI from "../page-components/meeting/meetingUI";
import { Button } from "@/components/ui/button";

const MeetingPage = () => {
  const [meeting, setMeeting] = useState(false);
  return (
    <>
      {meeting ? (
        <MyMeetingUI />
      ) : (
        <Button onClick={() => setMeeting(true)} className="bg-[#f00]">
          Click For Meeting
        </Button>
      )}
    </>
  );
};

export default MeetingPage;
