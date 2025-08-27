"use client";

import React from "react";
import Image from "next/image";
import { WhyUsCardData } from "@/constants/data/landingPage";
import { EmblaOptionsType } from "embla-carousel";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
};

const PointEmblaCarousel: React.FC<PropType> = ({ options }) => {
  options = { align: "center" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla sm:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {WhyUsCardData.map((item, idx) => (
            <div key={idx} className="embla__slide">
              <div className="embla__slide__number w-[300px] h-[280px] bg-white hover:bg-secondary/30 pt-4 px-6 flex justify-center rounded-3xl">
                <div className="flex flex-col pt-6 gap-3 ">
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt="card-icon"
                  />
                  <h3 className="font-bold text-primary pt-4">
                    {item.title}
                  </h3>
                  <p className="text-[#4E4E4E]">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls s">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default PointEmblaCarousel;
