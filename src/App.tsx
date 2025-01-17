import Navbar from '@/components/Navbar.tsx'
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import Footer from "@/components/Footer.tsx";
import SectionBecomeMember from "@/components/SectionBecomeMember.tsx";

function App() {

  return (
    <>
      <ScrollArea className="h-screen w-full ">
        <Navbar/>
        <div className="h-[60vh] w-screen relative overflow-hidden">
          <video
            playsInline
            autoPlay
            muted
            loop
            src="https://playarena.in/wp-content/uploads/2024/08/pixel-10sec-2.mp4"
            className="absolute top-0  w-full h-full object-center object-cover"
          />
        </div>
        <div className="h-screen w-full"></div>
        <SectionBecomeMember/>
        <Footer/>
      </ScrollArea>
    </>
  )
}

export default App
