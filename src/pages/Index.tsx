import { useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { SignupForm } from "@/components/SignupForm";
import { EmailVerification } from "@/components/EmailVerification";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'signup' | 'verification'>('signup');
  const [userEmail, setUserEmail] = useState('');

  const handleSignupSubmit = (data: any) => {
    setUserEmail(data.email);
    setCurrentStep('verification');
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        {currentStep === 'signup' ? (
          <SignupForm onSubmit={handleSignupSubmit} />
        ) : (
          <EmailVerification email={userEmail} />
        )}
      </div>
    </AuthLayout>
  );
};

export default Index;
