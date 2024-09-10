import * as motion from "framer-motion/client";

interface BreadcrumbProps {
  title: string;
}

export function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-mono text-sm text-slate-800 dark:text-zinc-500"
      >
        ../{title}
      </motion.span>
    </div>
  );
}
