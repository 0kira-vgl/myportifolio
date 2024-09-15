"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "../ui/carousel";
import Image from "next/image";
import * as motion from "framer-motion/client";

// certificates images
import DiscoverPng from "@/assets/certificates/discover.png";
import IAPng from "@/assets/certificates/ia.png";
import PocketPng from "@/assets/certificates/pocket.png";
import ExpertPng from "@/assets/certificates/expert.png";
import JourneyPng from "@/assets/certificates/journey.png";
import UnitePng from "@/assets/certificates/unite.png";

export function CertificatesCarousel() {
  // certificates PDFs
  const DiscoverPdf = "/certificates/discover.pdf";
  const IaPdf = "/certificates/ia.pdf";
  const PocketPdf = "/certificates/pocket.pdf";
  const ExpertPdf = "/certificates/expert.pdf";
  const JourneyPdf = "/certificates/journey.pdf";
  const UnitePdf = "/certificates/unite.pdf";

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
    >
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        className="w-full max-w-xl"
      >
        <CarouselContent className="">
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <a href={DiscoverPdf} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl p-1.5" src={DiscoverPng} alt="." />
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <a href={IaPdf} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl p-1.5" src={IAPng} alt="." />
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <a href={PocketPdf} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl p-1.5" src={PocketPng} alt="." />
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <a href={ExpertPdf} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl p-1.5" src={ExpertPng} alt="." />
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <a href={JourneyPdf} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl p-1.5" src={JourneyPng} alt="." />
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <a href={UnitePdf} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl p-1.5" src={UnitePng} alt="." />
              </a>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
        <CarouselIndicators />
      </Carousel>
    </motion.div>
  );
}
