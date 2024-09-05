import React, { useRef, useEffect } from "react";
import '@/app/css/additional-styles/theme.css'
import "@/app/css/additional-styles/horizontalcardcollection.css"; // Import the CSS file

const HorizontalCardCollection = () => {
  const containerRef = useRef(null);


  // Sample data for the cards with image URLs
  const cards = [
    {
      id:1,
      title: "Stays in & Around Delhi for a Weekend Getaway",
      description: "TOP 8",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)", // Replace with actual image URL
      link: "https://www.makemytrip.com/tripideas/top-staycation-in-around-mumbai-for-weekend"
    
    },
    {
      id:2,
      title: "Stays in & Around Mumbai for a Weekend Getaway",
      description: "TOP 8",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)", // Replace with actual image URL
      link: "https://www.makemytrip.com/tripideas/top-staycation-in-around-mumbai-for-weekend"
    },
    {
      id:3,
      title: "Stays in & Around Bangalore for a Weekend Getaway",
      description: "TOP 9",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)", // Replace with actual image URL
      link: "https://www.makemytrip.com/tripideas/top-staycation-in-around-bangalore-for-weekend"
    },
    {
      id:4,
      title: "Beach Destinations",
      description: "TOP 11",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)", // Replace with actual image URL
      link: ""
    },
    {
      id:5,
      title: "Weekend Getaways",
      description: "TOP 11",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)", // Replace with actual image URL
      link: ""
    },
    {
      id:6,
      title: "Hill Stations",
      description: "TOP 11",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg?im=Resize=(400,462)", // Replace with actual image URL
      link: ""
    },
    {
      id:7,
      title: "Adventure Destinations",
      description: "TOP 11",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/Australia/mmt/destination/m_Australia_destination_6_l_361_641.jpg?im=Resize=(400,462)", // Replace with actual image URL
      link: ""
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return; // Early return if ref is not attached

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    const cardElements = containerRef.current.querySelectorAll(".card");

    cardElements.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardElements.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [cards]);

  const scrollContainerRef = useRef(null);

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Adjust based on the width of your cards plus gap
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Adjust based on the width of your cards plus gap
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="horizontal-card-collection-wrapper">
      <button className="scroll-button left" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="horizontal-card-collection" ref={scrollContainerRef}>
        {cards.map((card, index) => (
          <a href={card.link} key={card.id} className="card-link" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
            <div className="card" key={index}>
             <img src={card.imageUrl} alt={card.title} className="card-image" />
              <div className="card-content">
                <span className="card-description">{card.description}</span>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button className="scroll-button right" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default HorizontalCardCollection;
