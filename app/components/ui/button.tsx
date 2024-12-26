import { cn } from "@/app/lib/utils";

export default function Button({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70",
        variant === 'primary' && 'bg-ACCENT-PURPLE',
        variant ==='secondary' && 'bg-BACKGROUND-TERTIARY',
        variant === 'ghost' && 'border-BORDER-PRIMARY',
        props.className
      )}
    >
      {children}
    </button>
  );
}
