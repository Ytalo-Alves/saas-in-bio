export default function ProjectCard(){
  return (
    <div className="w-[430px] h-[132px] flex gap-2 bg-BACKGROUND-SECONDARY p-3 rounded-[20px] border border-transparent hover:border-BORDER-SECONDARY">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img src="/project1.jpg" alt="Projeto 1" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-sm font-bold text-ACCENT-GREEN">10 Cliques</span>
        <div className="flex flex-col">
          <span className="text-white font-bold">Projeto 1</span>
          <span className="text-CONTENT-BODY text-sm">Descrição super detalhada do que o projeto faz</span>
        </div>
      </div>
    </div>
  )
}