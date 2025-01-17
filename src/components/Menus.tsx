import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {Separator} from "@/components/ui/separator.tsx";

interface MenuItem {
  title: string;
  description: string;
}
interface MenuProps {
  menu: MenuItem[];
}



const PlayMenuList = [
  {
    "title": "Pixel",
    "bg": 'bg-[#edffb3]',
    "events": [
      "Car Simulator",
      "Cricket Simulator",
      "Lazermaze",
      "7D Theatre",
      "VR Escape",
      "VR Coaster"
    ]
  },
  {
    "title": "Studio",
    "bg": 'bg-[#ebd8ff]',
    "events": [
      "Archery",
      "Rope Course",
      "Rocket Ejector",
      "Climbing",
      "Trampoline Park",
      "Shooting",
      "Carnival Games"
    ]
  },
  {
    "title": "Union",
    "bg": "bg-[#ebdbcc]",
    "events": [
      "The Field",
      "Badminton",
      "Basketball",
      "Cricket Nets",
      "Swimming Pool",
      "Skate Park",
      "Gym"
    ]
  },
  {
    "title": "Prime",
    "bg": "bg-[#d1ebd8]",
    "events": [
      "Gokarting",
      "Bowling",
      "Lasertag",
      "Paintball",
      "Off Road ATV",
      "Bumper Cars",
      "Virtual Verve"
    ]
  },
  {
    "title": "Junior",
    "bg": "bg-[#b3f0ff]",
    "events": [
      "Little Gym",
      "Soft Play"
    ]
  }
]
const ParticipateMenuList = [
  {title: 'Learn & Master', description: "Join one of our academies to learn And master a sport."},
  {title: 'Events at PLaY', description: "Join the community to celebrate special moments. Screenings…"}
]

const HostMenuList = [
  {
    "title": "Birthdays at PLaY",
    "description": "Celebrate Memorable Birthdays Here!"
  },
  {
    "title": "Corporate Events",
    "description": "Dynamic events and experiences"
  },
  {
    "title": "Perfect Dates at PLaY",
    "description": "Connecting with or without a reason to celebrate"
  },
  {
    "title": "Plan your Event",
    "description": "Fill out a form to make an enquiry"
  }
]

const FBMenuList = [
  {
    "title": "Food Court",
    "description": "From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest"
  },
  {
    "title": "Restaurant",
    "description": "From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest that’s sure to satisfy your cravings"
  }
]


function Menu({ menu }: MenuProps) {
  return (
    <div className="w-[300px] p-2 flex flex-col gap-4">
      {
        menu.map((item, i) => (
          <>
            <a href="" key={i} className="hover:text-[#007bfe]">
              <h1 className="text-lg md:text-xl font-semibold">{item.title}</h1>
              <p className="text-sm font-normal">{item.description}</p>
            </a>
            <Separator/>
          </>
        ))
      }
    </div>
  );
}


function PlayMenu() {
  return (
    <>
      <div className="md:grid md:grid-cols-5 w-[600px] pb-2 hidden">
        {
          PlayMenuList.map((subMenu) => (
            <div key={subMenu.title} className="flex flex-col gap-2 ">
              <h1 className={`${subMenu.bg} text-xl font-semibold py-2 pl-2`}>{subMenu.title}</h1>
              <ul className="flex flex-col gap-2 pl-2">
                {subMenu.events.map((item) => (
                  <li key={subMenu.title + item} className="text-sm font-normal">
                    <a href="" className="space-x-2 hover:text-[#007bfe]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
      <Accordion type="single" collapsible className="col-span-5 md:hidden">
        {PlayMenuList.map((subMenu, i) => (
          <AccordionItem key={subMenu.title} value={`item-${i}`}>
            <AccordionTrigger className={`${subMenu.bg} text-lg font-semibold py-2 px-4`}>
              {subMenu.title}
            </AccordionTrigger>
            <AccordionContent className="py-2 px-4">
              <ul className="flex flex-col gap-2 pl-2">
                {subMenu.events.map((item) => (
                  <li key={subMenu.title + item} className="text-sm font-normal">
                    <a href="" className="space-x-2 hover:text-[#007bfe]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}


export {PlayMenu, Menu, ParticipateMenuList, HostMenuList, FBMenuList};