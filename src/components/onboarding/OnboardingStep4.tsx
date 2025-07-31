import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Step4Data {
  companySize: string;
}

interface OnboardingStep4Props {
  onNext: (data: Step4Data) => void;
  onBack: () => void;
  initialData?: Step4Data;
}

const companySizes = [
  "1 to 10",
  "10 to 25", 
  "26 to 50",
  "51 to 100",
  "101 to 200",
  "201 to 500",
  "501 to 1000",
  "1001 to 10,000",
  "10,000 or more"
];

export const OnboardingStep4 = ({ onNext, initialData }: OnboardingStep4Props) => {
  const [selectedSize, setSelectedSize] = useState(initialData?.companySize || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSize) {
      onNext({ companySize: selectedSize });
    }
  };

  return (
    <div className="w-full ">
      <div className="mb-7">
        <h1 className="text-3xl font-bold mb-4 text-textblack">
          What is the size of your company?
        </h1>
        <p className="text-textgray">
          We can personalized and suggest better plans according to company's size
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-5">
          {companySizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`lg:py-10 py-4 rounded-full border text-base font-normal hover:bg-[#02645124] hover:text-[#026451] text-textblack transition-all hover:border-primary border-[#0A0A0C] hover:bg-primary/5 ${
                selectedSize === size
                  ? "border-[#0A0A0C] bg-[#02645124] text-[#026451]"
                  : "border-border"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={!selectedSize}
            className="px-11 py-4"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};