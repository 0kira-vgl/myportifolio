import Image, { ImageProps } from "next/image";
import { ComponentProps, ReactNode } from "react";
import { buttonVariants } from "../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

type IconsCardProps = ImageProps & {
  alt: string;
  titleicon: ReactNode;
};

const IconsCard = ({ alt, titleicon, ...props }: IconsCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image {...props} width={25} height={25} alt={alt} loading="lazy" />
        </TooltipTrigger>
        <TooltipContent side="top">
          <span className="font-semibold">{titleicon}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const DemoButton = ({ ...props }: ComponentProps<"a">) => {
  return (
    <a
      {...props}
      target="_blank"
      className={buttonVariants({ className: "gap-1", variant: "outline" })}
    >
      Demo
      <ArrowUpRight className="size-5" />
    </a>
  );
};
const RepositoryButton = ({ ...props }: ComponentProps<"a">) => {
  const t = useTranslations("Projects");

  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants()}
    >
      {t("repoButtonCard")}
    </a>
  );
};

export { IconsCard, DemoButton, RepositoryButton };
