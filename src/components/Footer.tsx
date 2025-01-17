import {Label} from "@/components/ui/label.tsx";
import WhatsAppIcon from '@/assets/WhatsAppIcon.svg?react'
import LocationIcon from '@/assets/LocationIcon.svg?react'
import PhoneIcon from '@/assets/PhoneIcon.svg?react'
import YoutubeIcon from '@/assets/YoutubeIcon.svg?react'
import InstagramIcon from '@/assets/InstagramIcon.svg?react'
import FacebookIcon from '@/assets/FacebookIcon.svg?react'
import LinkedinIcon from '@/assets/LinkedinIcon.svg?react'
import SubBlue from '@/assets/subscribe-blue.svg?react'
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";


function Footer() {
  const categories = [
    {
      heading: "Play",
      items: ["Prime", "Pixel", "Studio", "Union", "Junior"],
    },
    {
      heading: "Food & Beverages",
      items: ["Food Court", "Restaurant"],
    },
    {
      heading: "Participate",
      items: ["Up Your Game", "Events"],
    },
    {
      heading: "Host",
      items: ["Birthdays at PLaY", "Corporate events", "Make an Enquiry"],
    },
  ];
  const contactIcons = [
    <WhatsAppIcon/>,
    <PhoneIcon/>,
    <LocationIcon/>,
    <InstagramIcon/>,
    <YoutubeIcon/>,
    <FacebookIcon/>,
    <LinkedinIcon/>
  ]
  return (
    <footer className="bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-[repeat(3,25vw)] py-8 gap-8 px-[clamp(10px,2%,80px)] justify-center">
          {/*mail*/}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl font-medium ">Never miss <br/> an update</h1>
            <div>
              <Label>
                Subscribe to newsletter
              </Label>
              <div className="bg-white rounded-lg flex">
                <Input className="border-none focus-visible:ring-0 text-black"/>
                <Button size="icon" variant="ghost" className="mr-1">
                  <SubBlue/>
                </Button>
              </div>
            </div>
          </div>

          {/*address*/}
          <div className="flex flex-col gap-4 order-3 md:order-2">
            <div>
              <p className="font-semibold text-lg">Play Arena Sports & Adventure Pvt. Ltd.</p>
              <p className="text-gray-400">Sy#75, Hosa Road, off Sarjapur Road, opp Silverwood Regency Apartments, Kasavanahalli, Bangalore 560035</p>
            </div>
            <div className="flex gap-4 text-white flex-wrap">
              {
                contactIcons.map((icon, index) => (
                  <a href="" className="hover:text-[#007bfe]" key={index}>
                    {icon}
                  </a>
                ))
              }
            </div>
          </div>


          {/*categories*/}
          <div className="columns-2 gap-x-2 order-2 md:order-3">
            {
              categories.map((category, index) => (
                <div key={index} className="break-inside-avoid mb-4">
                  <h2 className="font-semibold">{category.heading}</h2>
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href="" className="text-[#007bfe]">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
        </div>


      <div className="w-screen h-[2px] bg-blue-700"></div>
      {/*copyright and policy links*/}
      <div className="py-4">
        <div className="text-center">
          <span>
            Copyright © 2025. All rights reserved.
          </span>
          <br/>
          <span>
            <a className="text-[#007bfe]" href="">
              Disclaimer
            </a>
              &nbsp;|&nbsp;
              <a className="text-[#007bfe]" href="">
              Privacy Policy
            </a>
            </span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;