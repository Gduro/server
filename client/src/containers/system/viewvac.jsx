import React, { useEffect } from "react";
import { projectFirestore } from "../firebaseConfig";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { useState } from "react";
import "./system.css";

export default function ViewVac() {
  const [vacList, setVacList] = useState([{ id: "" , data:{}}]);
  useEffect(() => {
      getVac();
    
  }, []);
  function getVac() {
    const vacListRef = collection(projectFirestore, 'urlop');
    getDocs(vacListRef)
      .then((res) => {
        const vac = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setVacList(vac);
        console.log(vacList)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="listDiv">
      <ul>
        {vacList.map((vaca) => (
          <li className="list" key={vaca.id}>{vaca.data.vacation}</li>
        ))}
      </ul>
    </div>
  );
}
