import TotalVisits from "./total-visits";

interface ProjectCardProps {
  image: string;
  title: string;
  clicks: number;
  description: string;
}

export default function ProjectCard({image, title, clicks, description}: ProjectCardProps){
  return (
    <div className="w-[340px] h-[132px] flex gap-2 bg-BACKGROUND-SECONDARY p-3 rounded-[20px] border border-transparent hover:border-BORDER-SECONDARY">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img src={image} alt="Projeto 1" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-sm font-bold text-ACCENT-GREEN">{clicks} Cliques</span>
        <div className="flex flex-col">
          <span className="text-white font-bold">{title}</span>
          <span className="text-CONTENT-BODY text-sm">{description}</span>
        </div>
        <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        </div>
      </div>
    </div>
  )
}