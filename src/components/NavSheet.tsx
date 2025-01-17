import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
import HamBurgerIcon from '@/assets/HamBurgerIcon.svg?react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {HostMenuList, Menu, ParticipateMenuList, PlayMenu} from "@/components/Menus.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
function NavSheet() {
  const SheetList = [
    { value: "item-1", label: "Play", component: <PlayMenu /> },
    { value: "item-2", label: "Participate", component: <Menu menu={ParticipateMenuList} /> },
    { value: "item-3", label: "Host", component: <Menu menu={HostMenuList} /> },
    { value: "item-4", label: "F&B", component: <Menu menu={HostMenuList} /> }
  ]
  return (
    <ScrollArea className='h-full w-full'>
      <Sheet>
        <SheetTrigger className="md:hidden flex">
          <Button size="icon" variant="link" asChild>
            <HamBurgerIcon className=""/>
          </Button>
        </SheetTrigger>
        <SheetContent className="">
          <Accordion type="single" collapsible className="w-full">
            {
              SheetList.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionTrigger className="text-xl">{item.label}</AccordionTrigger>
                  <AccordionContent>{item.component}</AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </SheetContent>
      </Sheet>
    </ScrollArea>

  );
}

export default NavSheet;