import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ZegocloudVideo() {
  const { roomId } = useParams();
  const usr = useSelector((state) => state.user);

  const meeting = async (element) => {
    const appID = ;
    const serverSecret = ;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      `${usr.id}`,
      usr.username
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div className="roompage" style={{textAlign:'center'}}>
      <div ref={meeting}></div>
    </div>
  );
}
