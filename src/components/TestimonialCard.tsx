import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
  date: string;
}

export const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  rating,
  date,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-primary/10 text-textblack font-semibold">
            {name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-textblack">{name}</h4>
          <p className="text-sm text-textgray">{role}</p>
        </div>
      </div>

      <blockquote className="text-textblack mb-4 leading-relaxed text-sm">
        "{content}"
      </blockquote>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-primary text-primary" : "text-textgray"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-textgray">{date}</span>
      </div>
    </div>
  );
};
