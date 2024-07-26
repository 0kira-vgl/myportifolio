import Image, { ImageProps } from "next/image";
import { ComponentProps, ReactNode } from "react";
import { buttonVariants } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TitleCardProps extends ComponentProps<"h2"> {
  children?: ReactNode;
}

export function TitleCard(props: TitleCardProps) {
  return (
    <h2 {...props} className="text-lg font-bold text-slate-700">
      {props.children}
    </h2>
  );
}

interface DescriptionCardProps extends ComponentProps<"p"> {
  children?: ReactNode;
}

export function DescriptionCard(props: DescriptionCardProps) {
  return (
    <p {...props} className="mb-3 text-sm text-neutral-500">
      {props.children}
    </p>
  );
}

interface IconsCardProps extends ImageProps {
  src: string;
  alt: string;
  titleIcon?: ReactNode;
}

export function IconsCard(props: IconsCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image {...props} width={25} height={25} alt={props.alt} />
        </TooltipTrigger>
        <TooltipContent side="top">{props.titleIcon}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface ButtonCardProps extends ComponentProps<"a"> {
  hrefLink: string;
}

export function SiteButtonCard(props: ButtonCardProps) {
  return (
    <a
      href={props.hrefLink}
      target="_blank"
      className="flex h-9 items-center justify-center rounded-full border border-slate-700 px-8 py-1 text-sm text-slate-700 shadow-md outline-accent"
    >
      Acessar
    </a>
  );
}

export function RepoButtonCard(props: ButtonCardProps) {
  return (
    <a
      href={props.hrefLink}
      target="_blank"
      className={buttonVariants({ className: "cursor-pointer" })}
    >
      Repositorio
    </a>
  );
}
