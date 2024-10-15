import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useLocalStorage } from "@uidotdev/usehooks";

const sequence: any = [
  ["[data-fxm-app]", { opacity: [0, 1] }],
  [
    "[data-fxm-phone]",
    { opacity: [0, 1], y: [70, 0] },
    { delay: stagger(0.2) },
    { ease: "easeInOut" },
  ],
  ["[data-fxm-description]", { opacity: [0, 1] }, { delay: stagger(0.2) }],
  ["[data-fxm-button]", { opacity: [0, 1] }, { delay: stagger(0.2) }],
];

const OnboardingModule = () => {
  const [scope, animate] = useAnimate();
  const [onboarding, setOnboarding] = useLocalStorage(
    "wallett-onboarding",
    false
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (onboarding) navigate(ROUTES.HOME);
  }, [onboarding, navigate]);

  useEffect(() => {
    animate(sequence);
  }, [animate]);

  const handleOnboardingStatus = () => {
    setOnboarding(true);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-950 text-gray-50"
      ref={scope}
    >
      {!onboarding && (
        <div className="flex flex-col justify-between items-center h-[60vh]">
          <div className="text-center flex flex-col justify-center items-center">
            <img
              src="/phone2.png"
              alt="phone-cover"
              className="w-[150px]"
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

          <Button className="gap-1" data-fxm-button asChild>
            <Link to={ROUTES.HOME} onClick={handleOnboardingStatus}>
              Continue <ArrowRight size={16} className="animate-pulse" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default OnboardingModule;
