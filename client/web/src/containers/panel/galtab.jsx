import React from "react";
import "./galtab.css";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Link from "react-scroll/modules/components/Link";
import { projectStorage } from "../firebaseConfig";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
export default function GalTab() {
  const [imageList, setImageList] = useState([""]);
  const imageListRef = ref(projectStorage, "concert/");
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className="tabcontainer">
      <table>
        <thead>
          <th>ID</th>
          <th>Data</th>
        </thead>
        <tbody>
          {imageList.map((url, index) => {
            <tr>
                <td></td>
              <td>
                <img src={url} alt="" />;
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
