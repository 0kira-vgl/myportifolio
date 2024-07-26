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

import pic from "../../../public/thumbnailPlanner.png";

export function CertificatesCarousel() {
  return (
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
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-3/4">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
            <Image className="rounded-xl p-1.5" src={pic} alt="." />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-3/4">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
            <Image className="rounded-xl p-1.5" src={pic} alt="." />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-3/4">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
            <Image className="rounded-xl p-1.5" src={pic} alt="." />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-3/4">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
            <Image className="rounded-xl p-1.5" src={pic} alt="." />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-3/4">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
            <Image className="rounded-xl p-1.5" src={pic} alt="." />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden lg:block" />
      <CarouselNext className="hidden lg:block" />
      <CarouselIndicators />
    </Carousel>
  );
}
