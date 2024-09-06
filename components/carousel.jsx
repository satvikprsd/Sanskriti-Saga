import React, { useRef, useEffect } from 'react';
import '@/app/css/additional-styles/carousel.css'; // Update this path to your actual CSS file path

export default function TravelSlider() {
  const slideRef = useRef(null);
  const autoPlayRef = useRef(null); // Ref for storing the interval ID


  // Function to handle the next button click
  const handleNextClick = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0]); // Move the first item to the end
  };

  // Function to handle the previous button click
  const handlePrevClick = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.prepend(items[items.length - 1]); // Move the last item to the beginning
  };

    // Setup auto-play with setInterval
    useEffect(() => {
        // Set interval for auto-play
        autoPlayRef.current = setInterval(() => {
            handleNextClick(); // Auto click next button every 3 seconds
        }, 5000);

        // Cleanup interval on component unmount
        return () => {
            clearInterval(autoPlayRef.current);
        };
        }, []); // Empty dependency array to run effect only on mount and unmount


  return (
    <div className='section'>
    <div className="container">
      <div className="slide" ref={slideRef}>
        <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="content">
            <div className="name">Taj Mahal</div>
            <div className="des">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578232977692-64b272f85e4f?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="content">
            <div className="name">Jal Mahal</div>
            <div className="des">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/03/38/06/05/1000_F_338060553_93GDXbeiL2ZxsY8YhUjbeDN2Nf5SGlEG.jpg)' }}>
          <div className="content">
            <div className="name">India Gate</div>
            <div className="des">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://www.abhibus.com/blog/wp-content/uploads/2023/04/Madurai-Meenakshi-Temple-History-Timings-How-to-Reach.jpg)' }}>
          <div className="content">
            <div className="name">Meenakshi Temple</div>
            <div className="des">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/14105979/pexels-photo-14105979.jpeg)' }}>
          <div className="content">
            <div className="name">Qutub Minar</div>
            <div className="des">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7389639/pexels-photo-7389639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
          <div className="content">
            <div className="name">Hawa Mahal</div>
            <div className="des">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="button">
        <button className="prev" onClick={handlePrevClick}>
            &lt;
        </button>
        <button className="next" onClick={handleNextClick}>
            &gt;
        </button>
      </div>
    </div>
  );
}
