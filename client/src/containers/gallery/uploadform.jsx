import React, { Component } from "react";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Link from "react-scroll/modules/components/Link";
import { projectStorage } from "../firebaseConfig";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
function UploadForm ()  {
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);


  const types = ["image/png", "image/jpeg", "image/jpg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("ERROR: Proszę wybrać zdjęcie o rozszerzeniu (png or jpeg)");
    }
  };
  
  const uploadImage = (event) => {
    event.preventDefault()

    if (file == null) return;
    const imgRef = ref(projectStorage,`concert/${v4()}` );
    uploadBytes(imgRef, file).then(()=>{
      alert('dwadwa')

    })
  };
  return (
    <> <form action="">
    <label htmlFor=""></label>
    <input
      type="file"
      onChange={changeHandler}
    />
    <button onClick={uploadImage}>Upload</button>
    <div className="output">{error && <div className="error">{error}</div>}</div>
    
  </form>



  </>
   
  );
};

export default UploadForm;
