import { useEffect, useState } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    const [currentSpeakerId, setCurrentSpeakerId] = useState("");
    const [mouseEventCnt, setMouseEventCnt] = useState(0);
    useEffect(()=>{
        window.document.title = `Speaker ID: ${currentSpeakerId}`;
        console.log(`useEffect: setting current speaker to ${currentSpeakerId}`)
    });
    return (
    <div>
        <span>mouseEventCnt: ${mouseEventCnt}</span>
      {["m3", "m2", "m3", "m2", "m3", "m2", "m3", "m2"].map((id) => {
        return (
          <div key={id}
            onMouseOver={()=>{
                setCurrentSpeakerId(id);
                setMouseEventCnt(mouseEventCnt + 1);
                console.log(`onMouseOver:${id}`);
            }}
          >
            <ImageToggleOnScroll
              primaryImg={`/bw/${id}.jpg`}
              secondaryImg={`/${id}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      
    </div>
  );
};

export default ImageChangeOnScroll;
