"use client";
import Image from "next/image";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";

import { useState } from "react";
export default function Home() {
  const [currentStepIndex, setCurrentindex] = useState(0);
  const CurrentStep = [StepOne, StepTwo, StepThree][currentStepIndex];

  return (
    <div className="flex pt-50 place-content-center">
      <CurrentStep onclick={() => setCurrentindex(currentStepIndex + 1)} />
    </div>
  );
}
