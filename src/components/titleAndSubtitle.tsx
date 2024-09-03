import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps extends ComponentProps<"h2"> {
  children: string;
}

interface SubtitleProps extends ComponentProps<"p"> {
  children: string;
}

const Title = (props: TitleProps) => {
  return (
    <h2
      {...props}
      className={twMerge(
        "pb-2 text-center text-4xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent",
        props.className,
      )}
    >
      {props.children}
    </h2>
  );
};

const Subtitle = (props: SubtitleProps) => {
  return (
    <p
      {...props}
      className={twMerge(
        "mx-auto mb-3 max-w-[17rem] text-center text-sm text-slate-800 dark:text-zinc-500",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
};

export { Title, Subtitle };
