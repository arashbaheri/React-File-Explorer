import { useState, useEffect } from "react";
import { AiFillHtml5 , AiFillFileText } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'

const extenstions = {
  css: <TiCss3/>,
  txt: <AiFillFileText/>,
  html: <AiFillHtml5/>,
  js: <SiJavascript/>,
};

const useIcon = (fileName) => {
  const [icon, setIcon] = useState("");

  const createIcon = () => {
    const [, format] = fileName.split(".");
    setIcon(extenstions[format]);
  };

  useEffect(() => {
    createIcon();
  }, [fileName]);

  return icon;
};

export default useIcon;
