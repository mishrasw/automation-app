import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const Christmas = () => {
  const christmasUrl = '/automation-app/What_Is_Christmas.pdf';
  return(
    <div>
       <h2> What is Christmas?</h2>
       <PdfViewer file={christmasUrl} />

    </div>
  )
 };

export default Christmas;
