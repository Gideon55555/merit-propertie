import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ViewMoreProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

export const ViewMore = React.forwardRef<
  HTMLButtonElement,
  ViewMoreProps
>(({ children, href, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group self-end mt-6 relative w-auto cursor-pointer overflow-hidden rounded-full border border-merit-gold text-merit-gold bg-transparent p-2 px-6 text-center",
        className
      )}
      {...props}>
      <Link href={href} className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-merit-gold transition-all duration-500 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-500 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-merit-green opacity-0 transition-all duration-500 group-hover:-translate-x-5 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight />
        </div>
      </Link>
    </button>
  );
});

ViewMore.displayName = "ViewMore";
