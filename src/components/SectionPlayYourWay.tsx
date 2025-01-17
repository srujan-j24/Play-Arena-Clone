import PlayCard from "@/components/PlayCard.tsx";
import Birthday from "@/assets/birthday.webp"
import CorporatEvent from "@/assets/corporateEvent.jpg"
import Playdate from "@/assets/Playdate.webp"

function SectionPlayYourWay() {
  const playCards = [
    {
      src: Birthday,
      des: "Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!",
      title: 'Birthday Bashes'
    },
    {
      src: CorporatEvent,
      des: "Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more.",
      title: "Corporate Events"
    },
    {
      src: Playdate,
      des: "Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection",
      title: "Play Dates"
    }
  ]
  return (
    <section className="bg-[#ebdbcc] py-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(3,25vw)] px-[clamp(10px,2%,80px)] gap-8 justify-center">
        <div className="md:col-span-3 flex flex-col gap-6">
          <h1 className="text-6xl md:text-7xl font-semibold">Play, Your Way</h1>
          <p className="text-sm md:text-lg text-justify">When it comes to get-togethers, the more is always the merrier.
            You bring the people, we’ll take care of the rest. Call us for customized birthdays, farewells,
            anniversaries and other events or group packages with entertainment, music and a fantastic range of F&B to
            choose from.</p>
        </div>
        {
          playCards.map(({src, des, title}, index) => (
            <PlayCard src={src} description={des} title={title}/>
          ))
        }
        <a href="" className="md:col-span-3 underline underline-offset-8 text-4xl leading-relaxed text-justify">
          Have an off-beat idea? Create your own event, fully customised! &nbsp;  &nbsp; →
        </a>
      </div>
    </section>
  );
}

export default SectionPlayYourWay;