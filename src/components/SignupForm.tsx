import { useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  email: string;
  phone: string;
  password: string;
  countryCode: string;
  agreeToTerms: boolean;
}

interface PasswordRequirement {
  text: string;
  met: boolean;
}

export const SignupForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    password: "",
    countryCode: "+91",
    agreeToTerms: false,
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [phoneValid, setPhoneValid] = useState<boolean | null>(null);

  const passwordRequirements: PasswordRequirement[] = [
    { text: "One lowercase character", met: /[a-z]/.test(formData.password) },
    { text: "One uppercase character", met: /[A-Z]/.test(formData.password) },
    { text: "One number", met: /\d/.test(formData.password) },
    { text: "One special character", met: /[^A-Za-z0-9]/.test(formData.password) },
    { text: "8 characters minimum", met: formData.password.length >= 8 },
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    return phone.length >= 10;
  };

  const handleEmailChange = (value: string) => {
    setFormData(prev => ({ ...prev, email: value }));
    if (value) {
      setEmailValid(validateEmail(value));
    } else {
      setEmailValid(null);
    }
  };

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: numericValue }));
    if (numericValue) {
      setPhoneValid(validatePhone(numericValue));
    } else {
      setPhoneValid(null);
    }
  };

  const isFormValid = () => {
    return (
      emailValid &&
      phoneValid &&
      passwordRequirements.every(req => req.met) &&
      formData.agreeToTerms
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-[520px] mx-auto lg:mt-20 mt-5">
      <div className="text-center md:mb-12 mb-8">
        <h1 className="text-3xl font-bold text-textblack mb-2">
          Sign up with free trial
        </h1>
        <p className="text-textgray">
          Empower your experience, sign up for a free account today
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email" className="text-textgray text-base font-medium mb-2 block">
            Work email*
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="ex. email@domain.com"
              value={formData.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`pr-10 ${
                emailValid === true 
                  ? "border-success focus:ring-success" 
                  : emailValid === false 
                  ? "border-destructive focus:ring-destructive" 
                  : ""
              }`}
            />
            {emailValid !== null && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {emailValid ? (
                  <Check className="w-5 h-5 text-success" />
                ) : (
                  <X className="w-5 h-5 text-destructive" />
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground text-base font-medium mb-2 block">
            Phone number* 
            <span className="text-primary text-sm font-normal ml-1">Why</span>
          </Label>
          <div className="flex gap-2 font-normal">
            <Select value={formData.countryCode} onValueChange={(value) => 
              setFormData(prev => ({ ...prev, countryCode: value }))
            }>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative flex-1">
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={`pr-10 ${
                  phoneValid === true 
                    ? "border-success focus:ring-success" 
                    : phoneValid === false 
                    ? "border-destructive focus:ring-destructive" 
                    : ""
                }`}
              />
              {phoneValid !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {phoneValid ? (
                    <Check className="w-5 h-5 text-success" />
                  ) : (
                    <X className="w-5 h-5 text-destructive" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="password" className="text-foreground text-base font-medium mb-2 block">
            Password*
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {formData.password && (
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {passwordRequirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  {req.met ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                  )}
                  <span className={req.met ? "text-success" : "text-muted-foreground font-normal	"}>
                    {req.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-7 !mt-7">
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
              }
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm text-foreground leading-relaxed font-light">
              Please exclude me from any future emails regarding Triosole and related
              Intuit product and feature updates, marketing best practices, and
              promotions.
            </Label>
          </div>

          <p className="text-sm text-foreground font-light">
            By registering for an account, you are consenting to our{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a> and
            confirming that you have reviewed and accepted the Global Privacy Statement.
          </p>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary text-primary-foreground text-base font-semibold py-4 rounded-full"
          disabled={!isFormValid()}
        >
          Get started free
        </Button>

        <p className="text-center text-sm text-textblack font-normal">
          Already have an account?{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};