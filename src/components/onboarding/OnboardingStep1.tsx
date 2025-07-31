import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

interface Step1Data {
  firstName: string;
  lastName: string;
  businessName: string;
}

export interface OnboardingStep1Props {
  onNext: (data: Step1Data) => void;
  onBack: () => void; // <-- Add this line
  initialData?: Step1Data;
}

export const OnboardingStep1 = ({ onNext, onBack, initialData }: OnboardingStep1Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Step1Data>({
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    businessName: initialData?.businessName || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const canProceed = formData.firstName.trim() && formData.lastName.trim();

  return (
    <div className="w-full">
      {/* Back Arrow */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-textblack hover:text-textgray hidden"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="mb-7">
        <h1 className="text-3xl font-bold mb-3 text-textblack">Tell us a bit about you</h1>
        <p className="text-textgray font-normal">
          That will help us better account setup for you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 text-textgray">
            <Label htmlFor="firstName" className="text-base font-medium">First name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Neilson"
              className="text-base font-normal"
              required
            />
          </div>
          
          <div className="space-y-2 text-textgray">
            <Label htmlFor="lastName" className="text-base font-medium">Last name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="wang"
              className="text-base font-normal"
              required
            />
          </div>
        </div>

        <div className="space-y-2 text-textgray">
          <Label htmlFor="businessName" className="text-base font-medium">Business name</Label>
          <Input
            id="businessName"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="Venturecapitals"
            className="text-base font-normal"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            disabled={!canProceed}
            className="px-11 py-4"
          >
            Next
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="text-primary hover:text-white rounded-full px-8"
            onClick={() => navigate("/")}
          >
            Skip
          </Button>
        </div>
      </form>
    </div>
  );
};