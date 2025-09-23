"use client";
import Image from "next/image";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
export default function Home() {
  return (
    <div className="flex pt-50 place-content-center">
      <StepOne />
    </div>
  );
}
