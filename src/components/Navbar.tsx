import WhatsAppIcon from '@/assets/WhatsAppIcon.svg?react'
import LocationIcon from '@/assets/LocationIcon.svg?react'
import PhoneIcon from '@/assets/PhoneIcon.svg?react'
import HamBurgerIcon from '@/assets/HamBurgerIcon.svg?react'
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
function Navbar() {

  const navItems = [
    "Play",
    "Participate",
    "Host",
    "F&B",
    <WhatsAppIcon/>,
    <PhoneIcon/>,
    <LocationIcon/>,
  ]
  return (
    <nav className="bg-black text-white">
      <div className="flex items-center justify-between px-6 sm:px-12 md:px-16 h-16 transition-[padding] duration-200">
        <div className="text-xl font-bold">Play Arena</div>
        <ul className="flex gap-6 text-lg font-medium">
          {
            navItems.map((navItem, index) => (
              <li key={index} className="hover:text-[#007bfe] transition-all duration-75 hidden md:flex items-center">{navItem}</li>
            ))
          }
          <Sheet>
            <SheetTrigger className="md:hidden flex">
              <Button size="icon" variant="link" asChild>
                <HamBurgerIcon className=""/>
              </Button>
            </SheetTrigger>
            <SheetContent className="">
            </SheetContent>
          </Sheet>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;