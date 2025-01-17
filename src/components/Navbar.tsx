import WhatsAppIcon from '@/assets/WhatsAppIcon.svg?react'
import LocationIcon from '@/assets/LocationIcon.svg?react'
import PhoneIcon from '@/assets/PhoneIcon.svg?react'
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu.tsx";
import {PlayMenu, ParticipateMenuList, Menu, HostMenuList, FBMenuList} from "@/components/Menus.tsx";
import Logo from '@/assets/logo.svg?react'
import NavSheet from "@/components/NavSheet.tsx";

function Navbar() {

  const navMenus = [
    {title: "Play", content: <PlayMenu/>},
    {title: "Participate", content: <Menu menu={ParticipateMenuList}/> },
    {title: "Host", content: <Menu menu={HostMenuList}/> },
    {title: "F&B", content: <Menu menu={FBMenuList}/> },
  ]
  const navIcons = [
    <WhatsAppIcon/>,
    <PhoneIcon/>,
    <LocationIcon/>,
  ]
  return (
    <nav className="bg-black text-white">
      <div className="flex items-center justify-between px-2 sm:px-12 md:px-16 h-16 transition-[padding] duration-200 ">
        <div className="text-xl font-bold">
          <Logo className="scale-[0.8]"/>
        </div>
        <ul className="flex gap-6 text-lg font-medium">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {
                navMenus.map((item, i) => (
                  <NavigationMenuItem key={i} >
                    <NavigationMenuTrigger className="bg-black hover:bg-black focus:bg-black text-white focus:text-[#007bfe] hover:text-[#007bfe] text-md data-[active]:bg-black data-[state=open]:bg-black md:flex hidden">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border-none outline-none">
                      {item.content}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))
              }
              {
                navIcons.map((item, i) => (
                  <NavigationMenuLink key={i} className="hover:text-[#007bfe] hidden md:flex">
                    {item}
                  </NavigationMenuLink>
                ))
              }
            </NavigationMenuList>
          </NavigationMenu>
          <NavSheet/>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;