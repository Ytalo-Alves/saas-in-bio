import ProjectCard from "@/app/components/common/project-card";
import UseCard from "@/app/components/common/use-card";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Profile({
  params,
}: {
  params: { profileId: string };
}) {
  const { profileId } = await params;

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full justify-center items-center flex gap-1 py-2 bg-BACKGROUND-TERTIARY">
        <span>Você está usando a versão trial</span>
        <Link href={`/${profileId}/upgrade`}>
          <button  className="text-ACCENT-GREEN font-bold">Faça o upgrade agora!</button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UseCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard
          image="/project1.jpg"
          title="Projeto 02"
          clicks={10}
          description="Descrição mais detalhada de como a aplicação funciona"
        />
        <ProjectCard
          image="/project1.jpg"
          title="Projeto 02"
          clicks={10}
          description="Descrição mais detalhada de como a aplicação funciona"
        />
        <ProjectCard
          image="/project1.jpg"
          title="Projeto 02"
          clicks={10}
          description="Descrição mais detalhada de como a aplicação funciona"
        />
        <ProjectCard
          image="/project1.jpg"
          title="Projeto 02"
          clicks={10}
          description="Descrição mais detalhada de como a aplicação funciona"
        />
        <button className="w-[340px] h-[132px] rounded-[20px] bg-BACKGROUND-SECONDARY flex items-center gap-2 justify-center border border-transparent hover:border-ACCENT-GREEN">
          <Plus size={20} className="text-ACCENT-GREEN"/>
          <span className="">Novo Projeto</span>
        </button>
      </div>
    </div>
  );
}
