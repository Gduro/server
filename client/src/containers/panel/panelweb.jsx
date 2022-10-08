import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Link from "react-scroll/modules/components/Link";
import { db } from "../firebaseConfig/index";
import { set, onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import "./panelweb.css";
import { BsPhone, BsEnvelope, BsTrash } from "react-icons/bs";
import UploadForm from "../gallery/uploadform";
import UploadFormc from "../gallery/uploadform_2";
import UploadForms from "../gallery/uploadform_3";

import Axios from "axios";
import Swal from "sweetalert2";
import UploadText from "./uploadext";
import ViewVacAdm from "./viewvacadm";
import GalTab from "./galtab";
const PanelW = () => {
  const [cow, setCow] = useState([{ id: "", data: {} }]);
  const [ncode, setNCode] = useState("");
  const usr = cow.map((user) => {
    return user.id;
  });

  console.log("usr "+ usr);
  const temp = [{ id: "", data: {} }];
  temp.pop();
  const results = [];
  useEffect(() => {
    onValue(ref(db, "myAppointments"), (snapshot) => {
      const temp_item = { id: "", data: {} };
      snapshot.forEach((childSnapshot) => {
        let id = childSnapshot.key;
        var childData = childSnapshot.val();

        temp.push({ id: id ?? "", data: childData });
      });
      setCow(temp);
    });

    return () => {
      setCow({});
    };

  }, []);

  const DeleteUsr = (id) => {
    const url = "http://localhost:3001/cancelAppointment";
    Swal.fire({
      title: "Czy jesteś pewien?",
      text: "Tych zmian nie będzie można cofnąć!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Anuluj",
      confirmButtonText: "Tak, Chcę to usunąć!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.post(url, {
          code: id,
        });
        Swal.fire(
          "Usunięto!",
          "Lekcja została usunięta! odśwież stronę.",
          "success"
        );
      }
    });
  };
  console.log("us2r "+ typeof(usr));

  return (
    <>
      <div className="cards_collections_container">
        {cow.map((user,index) => {
          return user.id !==" "  ? 
        <div key={index} className="person_card">
            <div className="trash" onClick={() => DeleteUsr(user.data.userId)}>
              <BsTrash />
            </div>

            <ul>
              <li className="person_card__id">{user.data.userId} </li>
              <li className="person_card__name">
                {user.data.firstname} {user.data.lastname}
              </li>
              <li className="person_card__phone">
                {user.data.phone}
                <div className="person_card__buttons">
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(user.data.phone)
                    }
                    className="person_card__copy-btn"
                  >
                    kopiuj
                  </button>
                  <a
                    className="person_card__copy-btn"
                    href={"tel:" + user.data.phone}
                  >
                    {<BsPhone />}
                  </a>
                </div>
              </li>
              <li className="person_card__email">
                {user.data.email}
                <div className="person_card__buttons">
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(user.data.email)
                    }
                    className="person_card__copy-btn"
                  >
                    kopiuj
                  </button>
                  <a
                    className="person_card__copy-btn"
                    href="mailto:xyz@gmail.com"
                  >
                    {<BsEnvelope />}
                  </a>
                </div>
              </li>
              <li className="person_card__date">{user.data.date}</li>
              <li className="person_card__time">{/* {user.data.date} */}</li>
              <br />
              <br />
            </ul>
          </div>

          :
          <h1 className="name">BRAK ZGŁOSZEŃ</h1>
        }      
        )}
      </div>
      <div className="sep">
        <div className="sep__con">
          <h1 className="septxt">Panel Kontroli</h1>
        </div>
      </div>
      <div className="vaclistadm">
        
      </div>
      <UploadText />
      <ViewVacAdm></ViewVacAdm>
      <UploadForm></UploadForm>
      <UploadFormc></UploadFormc>
      <UploadForms></UploadForms>

      <GalTab></GalTab>
    </>
  );
};
export default PanelW;
