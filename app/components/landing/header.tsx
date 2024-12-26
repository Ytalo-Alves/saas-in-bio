import Button from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <Link href='/' >
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Project in Bio Logo" />
          <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Button>Minha Pagina</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
}
