import { TestimonialCard } from "./TestimonialCard";
import groupIcon from '../assets/Group.png';
import groupleftIcon from '../assets/Group_Left.png';
import { Link } from "react-router-dom";
import { TestimonialCarousel } from "./TestimonialCarousel";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<div className="min-h-screen flex flex-wrap">
			{/* Left Side - Brand and Testimonials */}
			<div className="flex xl:w-[580px] md:w-1/2 bg-primary text-primary-foreground relative overflow-hidden">
				<div className="py-12 w-full sidebar">
					{/* Logo */}
					<div className="px-12 w-full">
						<Link to="/" className="mb-24 block">
						<div className="flex items-center gap-3 bg-primary-foreground rounded-full flex items-center justify-center w-fit px-5 py-2.5 cursor-pointer">
							<div className="text-primary flex items-center justify-center text-4xl">
							✱
							</div>
							<span className="text-2xl font-bold text-[#111827]">Triosole</span>
						</div>
						</Link>

						{/* Hero Content */}
						<div className="lg:mb-60 mb-28">
						<h1 className="md:text-[44px] text-3xl font-bold leading-tight mb-6">
							Start your remarkable
							<br />
							journey with us!
						</h1>
						<p className="text-lg text-primary-foreground/80 max-w-md">
							Our cold email automation helps you send personalized cold
							emails at scale with high email deliverability.
						</p>
						</div>
					</div>
          
					<img src={groupIcon} alt="group" className="w-[92px] h-[113px] inline-block absolute right-[-13px] top-0" />
					<img src={groupleftIcon} alt="group" className="w-[305px] h-[270px] inline-block absolute left-[-39.57px] bottom-[-30px]" />

					{/* Testimonial Carousel */}
					<div className="space-y-6 mb-28">
            			<TestimonialCarousel />
					</div>
				</div>

				{/* Additional testimonial cards - positioned absolutely */}
				<div className="absolute top-1/4 -right-16 transform rotate-12 opacity-30 hidden">
					<TestimonialCard
						name="Easy peasy with framework"
						role=""
						content=""
						rating={5}
						date=""
					/>
				</div>
			</div>

			{/* Right Side - Form */}
			<div className="w-full flex-1 flex justify-center md:px-14 py-12 px-6 bg-[#F8F8F8]">
				<div className="w-full">
					{children}
				</div>
			</div>
		</div>
	);
};
