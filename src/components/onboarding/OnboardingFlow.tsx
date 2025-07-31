import { useState } from "react";
import { OnboardingStep1 } from "./OnboardingStep1";
import { OnboardingStep2 } from "./OnboardingStep2";
import { OnboardingStep3 } from "./OnboardingStep3";
import { OnboardingStep4 } from "./OnboardingStep4";
import { OnboardingStep5 } from "./OnboardingStep5";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingData {
  step1?: {
    firstName: string;
    lastName: string;
    businessName: string;
  };
  step2?: {
    jobRole: string;
  };
  step3?: {
    purpose: string;
  };
  step4?: {
    companySize: string;
  };
  step5?: {
    companyWebsite: string;
  };
}

export const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({});
  const [showModal, setShowModal] = useState(false); // modal control

  const updateData = (step: keyof OnboardingData, data: any) => {
    setOnboardingData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final submission
      console.log("Final Submitted Data:", onboardingData);
      setShowModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentStep(1);
    setOnboardingData({});
  };

  const renderProgressBar = (onBack: () => void) => (
    <div className="w-full mb-7">
      <div className="flex justify-between items-center mb-6">
        <span className="md:text-2xl text-xl text-textblack font-semibold">Account set up</span>
        <span className="md:text-2xl text-xl text-textblack font-semibold">{currentStep}/5</span>
      </div>
      <div className="w-full bg-[#E9E9E9] rounded-full h-2 mb-6">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / 5) * 100}%` }}
        />
      </div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-textblack hover:text-textgray md:text-2xl text-xl"
      >
        <ArrowLeft />
      </button>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OnboardingStep1
            onNext={(data) => {
              updateData("step1", data);
              handleNext();
            }}
            onBack={handleBack}
            initialData={onboardingData.step1}
          />
        );
      case 2:
        return (
          <OnboardingStep2
            onNext={(data) => {
              updateData("step2", data);
              handleNext();
            }}
            onBack={handleBack}
            initialData={onboardingData.step2}
          />
        );
      case 3:
        return (
          <OnboardingStep3
            onNext={(data) => {
              updateData("step3", data);
              handleNext();
            }}
            onBack={handleBack}
            initialData={onboardingData.step3}
          />
        );
      case 4:
        return (
          <OnboardingStep4
            onNext={(data) => {
              updateData("step4", data);
              handleNext();
            }}
            onBack={handleBack}
            initialData={onboardingData.step4}
          />
        );
      case 5:
        return (
          <OnboardingStep5
            onNext={(data) => {
              updateData("step5", data);
              handleNext();
            }}
            onBack={handleBack}
            initialData={onboardingData.step5}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderProgressBar(handleBack)}
      <div className="w-full max-w-[520px] m-auto">
        {renderCurrentStep()}
      </div>

      {/* Final Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-green-700">Registration Successful</h2>
              <p className="text-base text-textgray mb-6">Thank you for completing the onboarding process!</p>
              <Button
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary transition"
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
