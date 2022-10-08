import React, { useEffect } from "react";
import { projectFirestore } from "../firebaseConfig";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { useState } from "react";
import "./vacadm.css";
import { MdContentCopy } from "react-icons/md";
import { Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

import { deleteDoc } from "firebase/firestore";
export default function ViewVacAdm() {
  const [vacList, setVacList] = useState([{ id: "", data: {} }]);
  useEffect(() => {
    getVac();
  }, []);
  function getVac() {
    const vacListRef = collection(projectFirestore, "urlop");
    getDocs(vacListRef)
      .then((res) => {
        const vac = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setVacList(vac);
      })
      .catch((err) => {
      });
  }
  const DeleteUsr = (id) => {
    const userDoc = doc(projectFirestore, "urlop", id);

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
        deleteDoc(userDoc);
        Swal.fire(
          "Usunięto!",
          "Lekcja została usunięta! odśwież stronę.",
          "success"
        );
      }
    });
  };
  return (
    <>
      <div className="listvacadm">
        <Table id="customers">
          <thead>
            <tr>
              <th className="idtab">ID</th>
              <th className="datatab">Dane</th>
              <th className="datatab">Akcje</th>
            </tr>
          </thead>
          <tbody>
            {vacList.map((vaca, i) => (
              <tr>
                <td key={i}>
                  {vaca.id}
                  <button
                    onClick={() => navigator.clipboard.writeText(vaca.id)}
                    className="btn__copy"
                  >
                    <MdContentCopy />
                  </button>
                </td>

                <td key={i}>{vaca.data.vacation}</td>
                <td>
                  {" "}
                  <div className="trash" onClick={() => DeleteUsr(vaca.id)}>
                    <BsTrash />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
