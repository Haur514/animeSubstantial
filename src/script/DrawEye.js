import EyeClosed from "../figure/eye-closed.png";
import EyeMiddle from "../figure/eye-middle.png";
import EyeOpen from "../figure/eye-open.png";
import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import '../style/App.css';


function DrawEye(props){

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [eye_mode,set_eye_mode] = useState(0);

  const getImage = (i) => {
    let image;

    switch (i) {
      case 1:
        image = EyeMiddle;
        break;
      case 2:
        image = EyeClosed;
        break;
        case 3:
        image = EyeMiddle;
        break;
      default:
        image = EyeOpen;
        break;
    }
    return image;
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      set_eye_mode((eye_mode+1)%30);
    },50)
    return () => clearInterval(interval);
  },[eye_mode]);

  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

    if(props.eyeside==="right"){    return(
        <img src={getImage(eye_mode)} width={windowDimensions.width / 2} />
    );
    }else{
      return(
        <img src={getImage(eye_mode)} className="reverse" width={windowDimensions.width / 2} />
    );
    }
}

function toBoolean(data){
  return data.toLowerCase() === 'true';
}

export default DrawEye;
