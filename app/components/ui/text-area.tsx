import { cn } from "@/app/lib/utils";

export default function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        `
      w-full p-3 bg-BACKGROUND-SECONDARY text-white placeholder:text-CONTENT-PLACEHOLDER rounded-xl
      border border-transparent hover:border-BORDER-SECONDARY hover:text-CONTENT-BODY active:border-BORDER-SECONDARY
      `,
        props.className
      )}
    />
  );
}
