import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function GoldLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group relative isolate inline-flex h-[58px] items-center justify-center gap-3 overflow-hidden rounded-full bg-merit-gold px-8 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-merit-green shadow-[0_10px_30px_-12px_rgba(191,177,131,0.6)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:inset-0 before:-z-10 before:translate-x-[-120%] before:bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] before:transition-transform before:duration-700 hover:scale-[1.07] hover:shadow-[0_0_0_1px_rgba(191,177,131,0.6),0_0_24px_rgba(191,177,131,0.6),0_0_60px_rgba(191,177,131,0.35)] hover:before:translate-x-[120%] focus-visible:outline-none [&_svg]:size-[18px] [&_svg]:transition-transform hover:[&_svg]:translate-x-1",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
