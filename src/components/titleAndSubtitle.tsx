import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import * as motion from "framer-motion/client";

interface TitleProps extends ComponentProps<"h2"> {
  children: string;
}

interface SubtitleProps extends ComponentProps<"p"> {
  children: string;
}

const animProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

const Title = (props: TitleProps) => {
  return (
    <motion.div {...animProps} transition={{ duration: 0.4 }}>
      <h2
        {...props}
        className={twMerge(
          "pb-2 text-center text-4xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent",
          props.className,
        )}
      >
        {props.children}
      </h2>
    </motion.div>
  );
};

const Subtitle = (props: SubtitleProps) => {
  return (
    <motion.div
      {...animProps}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
    >
      <p
        {...props}
        className={twMerge(
          "mx-auto mb-3 max-w-[17rem] text-center text-sm text-slate-800 dark:text-zinc-500",
          props.className,
        )}
      >
        {props.children}
      </p>
    </motion.div>
  );
};

export { Title, Subtitle };
