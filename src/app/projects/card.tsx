import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DemoButton, RepositoryButton } from "./cardElements";

// definindo o tipo de ícone para ser usado dinamicamente
type Icon = {
  titleicon: ReactNode;
  alt: string;
  src: string;
};

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

type BigCardsProps = ImageProps & {
  title: string;
  description: string;
  demo: string;
  repository: string;
  shortly?: boolean;
  icons: Icon[]; // passando a lista de ícones aqui
};

export function Card({
  title,
  description,
  demo,
  repository,
  shortly,
  icons, // Recebe a lista de ícones
  ...props
}: BigCardsProps) {
  return (
    <div className="flex rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
      <div className="p-2">
        <div className="aspect-video overflow-hidden rounded-lg">
          <Image {...props} priority alt="Notes Project" />
        </div>
        <div className="flex grow flex-col p-3">
          <h2 className="text-lg font-bold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-50 dark:text-transparent">
            {title}
          </h2>
          <p className="mb-3 text-sm text-neutral-500 dark:text-description">
            {description}
          </p>

          <div className="mt-auto flex flex-col gap-3 space-y-1.5 lg:flex-row lg:justify-between lg:space-y-0">
            <div className="flex items-center gap-2">
              {/* Renderiza os ícones dinamicamente */}
              {icons.map((icon, index) => (
                <IconsCard
                  key={index}
                  titleicon={icon.titleicon}
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>
            <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
              <DemoButton href={demo} shortly={shortly} />
              <RepositoryButton href={repository} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
