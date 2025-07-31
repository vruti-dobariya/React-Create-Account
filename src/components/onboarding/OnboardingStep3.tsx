import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Step3Data {
  purpose: string;
}

interface OnboardingStep3Props {
  onNext: (data: Step3Data) => void;
  onBack: () => void;
  initialData?: Step3Data;
}

const purposes = [
  "Sales and Business Development",
  "Customer Retention and Engagement", 
  "Marketing and Promotion",
  "Other"
];

export const OnboardingStep3 = ({ onNext, initialData }: OnboardingStep3Props) => {
  const [purpose, setPurpose] = useState(initialData?.purpose || "Sales and Business Development");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (purpose) {
      onNext({ purpose });
    }
  };

  return (
    <div className="w-full">
      <div className="mb-7">       
        <h1 className="text-3xl font-bold mb-4 text-textblack">
          What is the primary purpose of using saleshandy?
        </h1>
        <p className="text-textgray">
          We'll get you started with personalized recommendations based on your focus
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        <RadioGroup value={purpose} onValueChange={setPurpose}>
          {purposes.map((option) => (
            <div key={option} className="flex items-center space-x-3 md:py-7 py-5 md:px-3.5 px-2.5 border border-[#0A0A0C] rounded-lg hover:bg-[#02645124] hover:text-[#026451] text-textblack cursor-pointer hover:border-[#026451]">
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option} className="cursor-pointer flex-1 text-base text-normal">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="">
          <Button
            type="submit"
            disabled={!purpose}
            className="px-11 py-4"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};