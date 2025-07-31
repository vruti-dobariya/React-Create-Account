import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step5Data {
  companyWebsite: string;
}

interface OnboardingStep5Props {
  onNext: (data: Step5Data) => void;
  onBack: () => void;
  initialData?: Step5Data;
}

export const OnboardingStep5 = ({ onNext,  initialData }: OnboardingStep5Props) => {
  const [website, setWebsite] = useState(initialData?.companyWebsite || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ companyWebsite: website }); // triggers popup in parent
  };

  return (
    <div className="w-full">
      <div className="mb-7">
        <h1 className="text-3xl font-bold mb-3.5 text-textblack">
          What is your company's website?
        </h1>
        <p className="text-textgray">
          Please share the website address of your company.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="space-y-2.5">
          <Label htmlFor="website" className="text-base font-medium">Company website*</Label>
          <Input
            id="website"
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Venturecapitals.com"
            required
          />
          <p className="text-xs text-textgray">
            Please change it if it's not right. This was our best guess based on your email address.
          </p>
        </div>

        <div>
          <Button type="submit" className="px-11 py-4">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
