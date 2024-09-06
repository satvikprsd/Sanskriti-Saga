import React, { useEffect, useRef, useState } from "react";
import "./modal.css";
import { CardBody, CardContainer, CardItem } from "@/components/3d-parallax";
import { product } from "@/components/data.json";

function Modal({ setOpenModal }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [selectedContent, setSelectedContent] = useState("delhi");

  // Content for different selections
  const content = {
    delhi: {
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS_Rr4tU9gKAAfxoRUp6vfX4xkqMtBARn0A68oZwj2L3U7PoM8fz603TwVGBBR3rcFBej-MtAHpW90xn-WcF3qO1KTlXTDlF83jafBreQ",
      title: "Cuisines",
      description: 'Rajasthan is known for its Royal Rajwaadi cuisine (also known as Raajsi cuisine) which emanated from the culinary traditions of Royal courts and temples. Signature Rajasthani dishes include Dal Baati Churma, Panchratna Dal, Papad ro Saag, Ker Sangri,[3] Gatte ro Saag. It is also known for its snacks like Bikaneri bhujia, Mirchi bada and Kanda kachauri. Other famous dishes include Dal Baati, malaidar special lassi (lassi) and Lashun ki chutney (hot garlic paste), Mawa lassi from Jodhpur, Alwar ka mawa, Malpauas from Pushkar and rasgulla from Bikaner, "paniya"and "gheriya" from Mewar. The Rajwaadi cuisine is characterized by high usage of dry fruits & milk products like Yogurt for preparing rich gravies, ghee & butter for cooking & frying, mawa & chhena for sweets, usage of Kesar, kewda water & rose water and whole spices like jayaphal, javitri, cardamom etc. for flavoring and aroma.'
    },
    mumbai: {
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS_Rr4tU9gKAAfxoRUp6vfX4xkqMtBARn0A68oZwj2L3U7PoM8fz603TwVGBBR3rcFBej-MtAHpW90xn-WcF3qO1KTlXTDlF83jafBreQ",
      title: "Attire",
      description: "Angrakha is the epitome of the traditional dress of Rajput-Rajasthani men. It is the luxury version of a simple cotton kurta that is worn by common men. The name of the attire literally translates to protecting the body. This upper-body garment is traditionally made from cotton fabric.Bandhgala is also a traditional attire that looks similar to a blazar and is made from rich fabric. It is worn for grand ceremonies and occasions over angrakhas.Dhoti is not just traditional but also the most ancient dress in Rajasthan.Ghagras are the signature dress of Rajasthani women. The bottom part is a long flaunting skirt decorated with different geometric patterned fabric works, mirror work or embroidery or enhanced with broad gota patti borders. Also known as kanchli, choli or kurti, it is an upper-body wear that can be custom-made as per body measurements or comes in different sizes.This piece of cloth is similar to that of a veil and completes the attire of Rajasthani women. It is a long piece of cloth about 3 metres long and around 2 metres wide. The fabric of Chunari or Odhini is very lightweight."
    },
    kolkata: {
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS_Rr4tU9gKAAfxoRUp6vfX4xkqMtBARn0A68oZwj2L3U7PoM8fz603TwVGBBR3rcFBej-MtAHpW90xn-WcF3qO1KTlXTDlF83jafBreQ",
      title: "Handicrafts",
      description: "When speaking about beauty, brilliance and sheer variety, the handicrafts of Rajasthan are hard to beat. Blue pottery is a well-known craft from Jaipur, Rajasthan. It is a mix of Persian decorative art and Chinese glazing technology. Bandhani textiles are famous in Jaipur, Udaipur, Jodhpur, Pali and Nathdwara for their fabulous print and textures. Scarves, shawls, odhnis and turbans are a few other famous handicrafts of Rajasthan. High-grade Makrana marbles are carved by hand to proffer up the striking pieces that you can find in markets. These traditional handicrafts have Kundan and Meenakari stone works, which are very famous in Rajasthan. The state is famous for its contemporary yet ethnic style of jewellery, ranging from mirrored lac bangles, glass bangles, Kundan jewellery, Silver jewellery, Jadau necklaces, Meenakari jewellery, Thewa jewellery and more. Carpets and rugs are mainly manufactured in Jaipur, Jodhpur, Bikaner, Ganganagar and Udaipur. These hand-knotted handicrafts are best used for home decor. The decoration of the footwear is enhanced by beads, sequin and colourful threads. Jodhpur, Jaipur, Jaisalmer and Barmer are a few famous places that produce traditional leather footwear."
    }
  };

  const handleClose = () => {
    setIsFadingOut(true); // Start fade-out animation
    setTimeout(() => {
    setOpenModal(false); // Close modal after animation
    }, 500); // Match duration of fade-out animation (0.5s)
  };

  const currentContent = content[selectedContent];

  return (
    <div className={`modalBackground ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="modalContainer">
        {/* Close button on top left */}
        <div className="titleCloseBtn">
          <button
            onClick={handleClose}
          >
            X
          </button>
        </div>

        <div className="modalContent">
          {/* Sidebar */}
          <div className="modalSidebar">
                    {/* Modal Title */}
        <div className="modalTitle">
          <h2>Rajasthan</h2>
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
            onClick={handleClose}
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
