import { Button } from "@/components/ui/button";
import outlookIcon from '../assets/outlook.svg';
import gmailIcon from '../assets/Gmail.svg';

export const EmailVerification = ({ email }: { email: string }) => {
  return (
    <div className="w-full max-w-[446px] m-auto lg:mt-20 mt-5">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-textblack mb-3">
          Check your email
        </h1>
        <p className="text-textgray text-base	">
          We've sent an email to{" "}
          <span className="font-medium text-textblack">{email}</span> with a link
          to activate your account
        </p>
      </div>

      <div className="space-x-4 md:mb-32 mb-12">

        <Button
          variant="outline"
          className="w-fit border-0 text-[#143DF2] p-0 hover:bg-inherit hover:text-[#143DF2] bg-transparent"
          onClick={() => window.location.href = '/onboarding'}
        >
          <img src={gmailIcon} alt="Gmail" className="w-6 h-6 inline-block" />
          <span className="font-medium underline">Open Gmail</span>
        </Button>

        <Button 
          variant="outline" 
          className="w-fit border-0 text-[#143DF2] p-0 hover:bg-inherit hover:text-[#143DF2] bg-transparent"
          onClick={() => window.open('https://outlook.com', '_blank')}
        >
          {/* Outlook Image */}
          <img src={outlookIcon} alt="Outlook" className="w-6 h-6 inline-block" />
          <span className="font-medium underline">Open Outlook</span>
        </Button>
      </div>

      <div className="">
        <p className="text-xl font-semibold text-textblack mb-2">
          Didn't get an email? Check your spam folder!
        </p>
        <Button variant="link" className="text-base font-normal text-primary hover:underline p-0 h-fit">
          Re-enter your email and try again
        </Button>
      </div>
    </div>
  );
};