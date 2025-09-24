"use client";
import Image from "next/image";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { useState } from "react";
export default function Home() {
  const CurrentStep = [StepOne, StepTwo, StepThree](currentIndex);

  return (
    <div className="flex pt-50 place-content-center">
      <CurrentStep currentIndex={currentIndex} />
    </div>
  );
}
