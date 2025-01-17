import {Button} from "@/components/ui/button.tsx";

interface PlayCardProps {
  src: string;
  description: string;
  title: string;
}

function PlayCard({ src, description , title}: PlayCardProps) {
  return (
    <div className="flex flex-col gap-4 group">
      <div
        className="aspect-video w-full bg-cover bg-no-repeat flex flex-col gap-2 justify-center items-center"
        style={{
          backgroundImage: `url(${src})`,
          borderImage: 'linear-gradient(rgba(235, 219, 204, 0.6), rgba(20, 36, 51, 0.6)) fill 1'
        }}>
        <h1 className="text-white text-4xl font-bold text-center">{title}</h1>
        <Button variant='ghost' className="text-white group-hover:text-black group-hover:bg-white"> Explore </Button>
      </div>
      {/*<img src={src} alt="" className="aspect-video w-full object-cover" />*/}
      <p className="text-justify">{description}</p>
    </div>
  );
}

export default PlayCard;