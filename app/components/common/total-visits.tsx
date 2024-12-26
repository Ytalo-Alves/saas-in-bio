import { TrendingUp } from "lucide-react";

export default function TotalVisits(){
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-BACKGROUND-SECONDARY border border-BORDER-PRIMARY px-8 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white">Total de visitas</span>
      <div className="flex items-center gap-2 text-ACCENT-GREEN">
        <span className="text-3xl font-bold">12.342</span>
        <TrendingUp/>
      </div>
      {/* <div className="flex items-center gap-2">
        <button>Portal</button>
        <button>Sair</button>
      </div> */}
    </div>
  )
}