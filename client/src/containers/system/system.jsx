import React from "react";
import Axios from "axios";
import "./system.css";
import {  useState } from "react";
import Swal from "sweetalert2";
import ViewVac from "./viewvac";
const System = () => {
  const url = "http://localhost:3001/appointment";
  const [data, setData] = useState({
    slot: "",
    phone: "",
    firstname: "",
    lastname: "",
    email: "",
    check: "",
  });

  const submit = async (e) => {
    try {
      e.preventDefault();

      await Axios.post(url, {
        slot: data.slot,
        phonenumber: data.phone,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          Swal.fire("Good job!", "Lekcja została umówiona!", "success");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ta data i godzina są już zajęte, spróbuj inną godzinę!",
          });
        }
      });
    } catch (Error) {
      console.log(Error);
    }
  };
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(data);
  }

  return (
    <div className="container_form">
      <div className="card_v2 inf">
        <h1 className="name">Instrukcja zgłoszenia</h1>

        <div className="data">
          <ul className="inst">
            <li>Aby wysłać zgłoszenie należy wypełnić cały arkusz</li>
            <li>Wysłanie zgłoszenia wiąże się z zarezerowaniem lekcji na dany termin</li>
            <li>Kiedy dany termin jest zajety po nacisnieciu przycisku ,,Wyślij'' ukaże sie okienko z błedem, należy wtedy wybrać inną date lub godzinę</li>
          </ul>
        </div>
      </div>
      <form className="form" onSubmit={(e) => submit(e)}>
        <div className="card">
          <div className="title">Cześć</div>
          <div className="subtitle">Zamów swoją pierwszą lekcję już teraz!</div>
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              required
              onChange={(e) => handle(e)}
            />
            <label for="firstname" class="placeholder">
              {" "}
              Imię
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              required
              onChange={(e) => handle(e)}
            />
            <label for="lastname" class="placeholder">
              Nazwisko
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="email"
              className="input"
              type="email"
              placeholder=" "
              required
              onChange={(e) => handle(e)}
            />
            <label for="email" class="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="phone"
              className="input"
              type="tel"
              placeholder=" "
              required
              onChange={(e) => handle(e)}
            />
            <label for="phone" className="placeholder">
              Numer Telefonu
            </label>
          </div>

          <div className="input-container ic4">
            <input
              onChange={(e) => handle(e)}
              id="slot"
              className="input"
              type="datetime-local"
              name="slotdate"
              min="2022-08-01T8:00"
              max="2023-10-30T16:00"
              step="3600"
              placeholder="Data"
              required
            />{" "}
            <div className="cut cut-short"></div>
            <label for="email" class="placeholder">
              data
            </label>
          </div>
          <input
            type="checkbox"
            name="check"
            id="check"
            className="check"
            required
          />
          <label htmlFor="" className="accept">
            Akceptuję <a href="/zglos">Regulamin</a>
          </label>
          <button type="submit" className="submit">
            Wyślij
          </button>
        </div>
      </form>
      <div className="card_v2">
        <h1 className="name">WAŻNE</h1>
        <p className="pp">
          lekcje umówione na terminy trwającego urlopu będą ignorowane!
        </p>
        <div className="data">
          <ViewVac />
        </div>
      </div>
      {/* <div className="card">
        <div className="content_form">
          <h1>Umów się już dziś!</h1>
          <form onSubmit={(e) => submit(e)}>
            <input
              onChange={(e) => handle(e)}
              id="slot"
              type="datetime-local"
              name="slotdate"
              min="2022-08-01T8:00"
              max="2023-10-30T16:00"
              step="3600"
              placeholder="Data"
              required
            />
            <br />

            <label for="phonenumber">Your phone number:</label>
            <input
              onChange={(e) => handle(e)}
              type="tel"
              id="phonenumber"
              name="phonenumber"
              required
              placeholder="Numer Telefonu"
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default System;
