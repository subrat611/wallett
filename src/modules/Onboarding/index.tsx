import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

const sequence = [
  ["[data-fxm-phone]", { opacity: [0, 1], y: [50, 0] }, { delay: 0.2 }],
  [
    "[data-fxm-app]",
    { opacity: [0, 1] },
    { delay: stagger(0.5) },
    { ease: "easeInOut" },
  ],
  ["[data-fxm-description]", { opacity: [0, 1] }, { delay: stagger(0.2) }],
  ["[data-fxm-button]", { opacity: [0, 1] }, { delay: stagger(0.2) }],
];

const OnboardingModule = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(sequence);
  }, [animate]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-950 text-gray-50"
      ref={scope}
    >
      <div className="flex flex-col justify-between items-center h-[60vh]">
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="/phone.png"
            alt="phone-cover"
            className="w-[155px]"
            data-fxm-phone
          />
          <h1 className="text-5xl font-semibold" data-fxm-app>
            Wallett
          </h1>
        </div>

        <p
          className="text-center text-sm px-6 font-medium"
          data-fxm-description
        >
          Wallett is a free, privacy-focused income and expense tracking
          application.
        </p>

        <Button className="gap-1" data-fxm-button variant="secondary">
          Continue <ArrowRight size={16} className="animate-pulse" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingModule;
