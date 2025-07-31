import { AuthLayout } from "@/components/AuthLayout";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";

const Onboarding = () => {
  return (
    <AuthLayout>
      <OnboardingFlow />
    </AuthLayout>
  );
};

export default Onboarding;