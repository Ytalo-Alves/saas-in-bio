import { cn } from "@/app/lib/utils";

export default function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={cn(
        `w-full p-3 bg-BACKGROUND-SECONDARY text-white placeholder:text-CONTENT-PLACEHOLDER rounded-xl
       border border-transparent hover:border-BORDER-SECONDARY hover:text-CONTENT-BODY active:border-BORDER-TERTIARY
      `,
        props.className
      )}
    ></input>
  );
}
