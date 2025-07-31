import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step2Data {
  jobRole: string;
}

interface OnboardingStep2Props {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
  initialData?: Step2Data;
}

const jobRoles = [
  "Designer",
  "Developer",
  "Product Manager",
  "Marketing Manager",
  "Sales Representative",
  "CEO/Founder",
  "Operations Manager",
  "Customer Success",
  "Other"
];

export const OnboardingStep2 = ({ onNext, initialData }: OnboardingStep2Props) => {
  const [jobRole, setJobRole] = useState(initialData?.jobRole || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobRole) {
      onNext({ jobRole });
    }
  };

  return (
    <div className="w-full">
      <div className="mb-7">
        <h1 className="text-3xl font-bold mb-7 text-textblack">
          What is your job role or position?
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="space-y-2">
          <Label htmlFor="jobRole" className="text-base font-medium">Select your job role*</Label>
          <Select value={jobRole} onValueChange={setJobRole}>
            <SelectTrigger>
              <SelectValue placeholder="Designer" />
            </SelectTrigger>
            <SelectContent>
              {jobRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="">
          <Button
            type="submit"
            disabled={!jobRole}
            className="px-11 py-4"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};