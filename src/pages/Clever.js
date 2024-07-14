import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const Clever = () => {
  const cleverTortoiseUrl = '/automation-app/The_Clever_Tortoise.pdf';
  return(
    <div>
       <h2> Clever Tortoise</h2>
       <PdfViewer file={cleverTortoiseUrl} />

    </div>
  )
 };

export default Clever;
