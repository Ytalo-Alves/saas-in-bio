import ProjectCard from "../common/project-card";
import TotalVisits from "../common/total-visits";
import UseCard from "../common/use-card";
import Button from "../ui/button";
import TextInput from "../ui/text-input";

export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes
          <br /> sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">Crie sua própria pagina de projetos e compartilhe eles com o mundo.<br/>Acompanhe o engajamento com analytics de cliques</h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">Projectinbio.com</span>
          <TextInput placeholder="Seu link"/>
          <Button>Criar agora</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2D88,transparent_55%)]">
        <div className="relative">
          {/* Use Card */}
          <UseCard/>
          <div className="absolute -bottom-[7%] -right-[45%]">
            {/* total visits */}
            <TotalVisits/>
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            {/* Project Card */}
            <ProjectCard/>
          </div>

          <div className="absolute -top-[5%] -left-[55%] -z-10">
            {/* Project Card */}
            <ProjectCard/>

          </div>
        </div>
      </div>
    </div>
  );
}
