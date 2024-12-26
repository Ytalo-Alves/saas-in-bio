import { cn } from "@/app/lib/utils";

export default function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={cn(
        `w-full p-3 bg-BACKGROUND-SECONDARY text-white placeholder:text-CONTENT-PLACEHOLDER rounded-xl
       border-2 border-transparent focus:border-ACCENT-PURPLE hover:text-CONTENT-BODY active:border-ACCENT-PURPLE outline-none
      `,
        props.className
      )}
    ></input>
  );
}
