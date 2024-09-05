import React, { useEffect, useRef, useState } from "react";
import "./modal.css";
import { CardBody, CardContainer, CardItem } from "@/components/3d-parallax";
import { product } from "@/components/data.json";

function Modal({ setOpenModal }) {
  const [selectedContent, setSelectedContent] = useState("delhi");

  // Content for different selections
  const content = {
    delhi: {
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS_Rr4tU9gKAAfxoRUp6vfX4xkqMtBARn0A68oZwj2L3U7PoM8fz603TwVGBBR3rcFBej-MtAHpW90xn-WcF3qO1KTlXTDlF83jafBreQ",
      title: "Cuisines",
      description: "Delhi Tourism, a government undertaking facilitating tourism since 1975 will take you to a guided tour of the Delhi through this website. It explores the wonders of Delhi, its heritage, the art and craft, the diverse cuisine and culture. A symbol of the country's rich past and thriving present, Delhi is a city where ancient and modern blend seamlessly together. It is a place that not only touches your pulse but even fastens it to a frenetic speed. Home to millions of dreams, the city takes on unprecedented responsibilities o realizing dreams bringing people closer and inspiring their throughts."
    },
    mumbai: {
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS_Rr4tU9gKAAfxoRUp6vfX4xkqMtBARn0A68oZwj2L3U7PoM8fz603TwVGBBR3rcFBej-MtAHpW90xn-WcF3qO1KTlXTDlF83jafBreQ",
      title: "Attire",
      description: "Mumbai is the capital city of the Indian state of Maharashtra. It is the most populous city in India, and one of the largest urban areas in the world. Mumbai is known for its deep natural harbour and the famous Gateway of India."
    },
    kolkata: {
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS_Rr4tU9gKAAfxoRUp6vfX4xkqMtBARn0A68oZwj2L3U7PoM8fz603TwVGBBR3rcFBej-MtAHpW90xn-WcF3qO1KTlXTDlF83jafBreQ",
      title: "Tradition",
      description: "Kolkata is the capital of the Indian state of West Bengal. It is the principal commercial, cultural, and educational centre of East India. Kolkata is known for its grand colonial architecture, art galleries, and cultural festivals."
    }
  };

  const currentContent = content[selectedContent];

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* Close button on top left */}
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="modalContent">
          {/* Sidebar */}
          <div className="modalSidebar">
                    {/* Modal Title */}
        <div className="modalTitle">
          <h2>Delhi</h2>
        </div>
            <button onClick={() => setSelectedContent("delhi")}>Cuisines</button>
            <button onClick={() => setSelectedContent("mumbai")}>Attire</button>
            <button onClick={() => setSelectedContent("kolkata")}>Tradition</button>
          </div>

          {/* Main Content */}
          <div className="modalMainContent">
            {/* Left side: Image and text */}
            <div className="modalInfo">
              <img
                src={currentContent.image}
                width="500"
                height="300"
                alt={currentContent.title}
              />
              <h1>{currentContent.title}</h1>
              <p>{currentContent.description}</p>
            </div>
          </div>
        </div>

        {/* Footer with Close button */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
