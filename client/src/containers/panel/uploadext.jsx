import React from "react";
import { projectFirestore } from "../firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import './uptxt.css'
export default function UploadText() {
  const [vacation, setVacation] = useState("");
  const submit = (e) => {
    e.preventDefault();

    if (vacation === "") {
      return;
    }
    const vacRef = collection(projectFirestore, 'urlop');
    addDoc(vacRef, { vacation })
      .then((res) => {
      })
      .catch((err) => {
      });
    alert(vacation);
  };
  
  return (
    <div>
      <form className="formtxt" onSubmit={submit}>
        <input
        className="formtxt__field"
          type="text"
          value={vacation}
          onChange={(e) => setVacation(e.target.value)}
          placeholder="Napisz wiadomość"
        />
  <span class="focus-bg"></span>
        <button class="submittxt" type="submit">Wyślij</button>
      </form>
    </div>
  );
}
