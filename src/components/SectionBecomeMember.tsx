import {Button} from "@/components/ui/button.tsx";
import MemberBenefitCard from "@/components/MemberBenefitCard.tsx";
import QueueSvg from '@/assets/Skip-the-Queue.svg'
import TreatSvg from '@/assets/Treats-on-us.svg'
import DiscountSvg from '@/assets/Big-Discounts.svg'

function SectionBecomeMember() {
  const benefitsCard = [
    {src: QueueSvg, title: "SKIP THE QUEUE", description: "No ticketing. Just load your card and go play.", className: ""},
    {src: TreatSvg, title: "TREATS ON US", description: "Get exclusive offers across our F&B outlets.", className: 'md:mt-20 m-0'},
    {src: DiscountSvg, title: "BIG DISCOUNTS", description: "The more you load the bigger your discounts.", className: ""}
  ]
  return (
    <>
      <section className="bg-[#e8e8e8] py-16">
        <div className="grid grid-cols-1 md:grid-cols-[50vw_25vw] grid-rows-[repeat(2,auto)] px-[clamp(10px,2%,80px)] justify-center gap-x-16 gap-y-4 ">
          <div className="order-2 md:order-1  grid md:grid-cols-3 grid-cols-1 justify-self-center gap-8">
            {
              benefitsCard.map(({src, title, description, className}, index) => (
                <MemberBenefitCard src={src} title={title} description={description} key={index} className={className}></MemberBenefitCard>
              ))
            }
          </div>

          <div className="flex flex-col gap-2 justify-self-center order-1 md:order-2 justify-center">
            <h1 className="text-6xl font-bold ">Play like a Pro</h1>
            <p className="font-semibold">We call this our Royalty Programme.</p>
            <Button className=" bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-500/90 w-full h-12 text-lg hidden md:flex">
              Become a Pro Member
            </Button>
          </div>

          <div className="order-3">
            <Button className=" bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-500/90 w-full h-12 text-lg md:hidden flex">
              Become a Pro Member
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionBecomeMember;