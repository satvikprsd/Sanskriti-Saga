import Image from 'next/image'

import Bokksu from '@/public/images/bokksu.png'

export default function Features() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">SpiceCrate (Sanskriti Saga)</h2>
            <p className="text-xl text-gray-400">Experience the rich and diverse tastes of India with SpiceCrate.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src='https://s3.filebin.net/filebin/56f830606502744b529deac7837e0b17443e8481d7d66f748d0f263c1967e65d/0e09c03750e27fcf3858af3d4da167b4ef427867e21154494c4d1cf282355c7e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7pMj6hGeoKewqmMQILjm%2F20240906%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240906T081530Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D60&response-content-disposition=filename%3D"SANSKRITI.png"&response-content-type=image%2Fpng&X-Amz-Signature=68ef1d04f0790dd3b133058e608f790a4ad810dff20f0a2f1db54c16a9117f01' width={120} height={120} alt="mmt" />
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="h4 text-xl text-gray-400 text-center ">Each month, we deliver a curated selection of authentic Indian snacks and treats right to your door. 
                From savory samosas to sweet ladoos, our boxes are filled with traditional delights and unique flavors that showcase India’s culinary heritage.
                Perfect for snack lovers and cultural enthusiasts alike, SpiceCrate brings the essence of Indian cuisine to you, making every bite a delightful journey. Discover the best of India’s snacks with SpiceCrate — where every box is a taste adventure!</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-right" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="max-w-full mx-auto md:max-w-none h-auto translate-x-40 translate-y-10" src={Bokksu} width={540} height={405} alt="Features 02" />
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src="https://hospitalitybizindia.com/wp-content/uploads/2022/08/makemytrip-600.png" width={54} height={40} alt="mmt" />
              <h4 className="h4 mb-2">Monthly Travel Discounts</h4>
              <p className="text-lg text-gray-400 text-center">Unlock exclusive monthly discounts on travel packages to India with our partners, such as MakeMyTrip, and make your journey to explore India even more affordable.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png" width={54} height={40} alt="calendar" />
              <h4 className="h4 mb-2">Cultural Events Calendar</h4>
              <p className="text-lg text-gray-400 text-center">Receive a curated calendar of cultural events happening across India each month via our newsletter, keeping you in the loop about festivals, fairs, and local celebrations.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src="https://e7.pngegg.com/pngimages/235/500/png-clipart-concert-graphics-event-tickets-air-ticket-orange-logo-thumbnail.png" width={54} height={40} alt="calendar" />
              <h4 className="h4 mb-2">Early Event Ticket Access</h4>
              <p className="text-lg text-gray-400 text-center">Gain early access to tickets for global events hosted in India, giving you the advantage of securing your spot before the general public.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
