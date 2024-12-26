import Header from "@/app/components/landing/header";
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { Rocket } from "lucide-react";

export default function Create(){
  return (
    <div>
      <Header/>
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket size={20}/>
        </div>
        <form action="" className="w-full flex items-center gap-2">
          <span className="text-white">Projectinbio.com</span>
          <TextInput/>
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <p className="text-ACCENT-PINK font-bold">Erro de Exemplo</p>
        </div>
      </div>
    </div>
  )
}