import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NameLogoProps extends ComponentProps<"h3"> {
  children?: string;
}

export function NameLogo(props: NameLogoProps) {
  return (
    <>
      <Link href="#home">
        <h3
          {...props}
          className={twMerge("text-shadow font-mono text-4xl", props.className)}
        >
          &lt;Matheus /&gt;
        </h3>
      </Link>
    </>
  );
}
