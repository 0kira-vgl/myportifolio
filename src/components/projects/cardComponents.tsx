import Image, { ImageProps } from "next/image";
import { ComponentProps, ReactNode } from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

interface TitleCardProps extends ComponentProps<"h2"> {
  children?: ReactNode;
}

export function TitleCard(props: TitleCardProps) {
  return (
    <h2
      {...props}
      className="text-lg font-bold text-slate-700 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-50 dark:text-transparent"
    >
      {props.children}
    </h2>
  );
}

interface DescriptionCardProps extends ComponentProps<"p"> {
  children?: ReactNode;
}

export function DescriptionCard(props: DescriptionCardProps) {
  return (
    <p
      {...props}
      className="dark:text-description mb-3 text-sm text-neutral-500"
    >
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
        <TooltipContent side="top">
          <span className="font-semibold">{props.titleIcon}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface ButtonsCardProps extends ComponentProps<"a"> {
  hrefLink: string;
}

export function SiteButtonCard(props: ButtonsCardProps) {
  return (
    <a
      href={props.hrefLink}
      target="_blank"
      className={buttonVariants({ className: "gap-1", variant: "outline" })}

      // className="flex h-9 items-center justify-center rounded-full border border-slate-700 px-8 py-1 text-sm text-slate-700 shadow-md outline-accent dark:border-neutral-400 dark:text-muted-foreground"
    >
      Demo
      <ArrowUpRight className="size-5" />
    </a>
  );
}

export function RepoButtonCard(props: ButtonsCardProps) {
  return (
    <Button className={buttonVariants()}>
      <a href={props.hrefLink} target="_blank">
        Repositório
      </a>
    </Button>
  );
}
