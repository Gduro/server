import React, { Component } from "react";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Link from "react-scroll/modules/components/Link";
import { projectStorage } from "../firebaseConfig";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "./gallery.css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default function Coach() {
  const [imageList, setImageList] = useState([""]);
  const imageListRef = ref(projectStorage, "coach/");
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
    <div className="galeria">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {imageList.map((url, index) => {
        
            return url != '' ? 
              <SwiperSlide className="pics" key={index}>
                <img src={url} alt="" />
              </SwiperSlide>
          

          :
          <h1 class="loading"></h1>
        })}
      </Swiper>
    </div>
  );
}
