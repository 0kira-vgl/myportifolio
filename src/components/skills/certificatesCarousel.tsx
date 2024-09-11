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

import DiscoverPng from "public/certificates/discover.png";
import * as motion from "framer-motion/client";

export function CertificatesCarousel() {
  const discoverPDF = "/certificates/discover-pt.pdf";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
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
              <a href={discoverPDF} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl p-1.5" src={DiscoverPng} alt="." />
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <Image className="rounded-xl p-1.5" src={DiscoverPng} alt="." />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <Image className="rounded-xl p-1.5" src={DiscoverPng} alt="." />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <Image className="rounded-xl p-1.5" src={DiscoverPng} alt="." />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-3/4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
              <Image className="rounded-xl p-1.5" src={DiscoverPng} alt="." />
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
