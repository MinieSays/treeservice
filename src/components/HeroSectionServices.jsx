import React from "react";
import { ArrowRight, TreesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import EmailModal from "./EmailModal";

const HeroSectionServices = ({
  backgroundImage,
  title,
  subtitle,
  primaryLinkText,
  primaryLinkUrl,
  secondaryLinkText,
  secondaryLinkUrl,
  primaryLinkIcon: PrimaryIcon = TreesIcon,
  emailModalProps, // Contains title, buttonLabel, serviceId, templateId, and userId for EmailModal
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24 md:py-32"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
        <div className="space-y-6 lg:pr-8 text-center lg:text-left">
          <h1 className="text-white bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            {title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to={primaryLinkUrl}
              className="flex items-center justify-center gap-x-2 rounded-lg bg-lime-600 px-10 py-3 text-white shadow-lg hover:bg-lime-700 transition-all"
            >
              <PrimaryIcon className="h-6 w-6 text-white" />
              {primaryLinkText}
            </Link>

            <Link
              to={secondaryLinkUrl}
              className="flex items-center justify-center gap-x-2 rounded-lg border border-lime-600 px-10 py-3 text-lime-600 hover:bg-lime-100 transition-all"
            >
              {secondaryLinkText}{" "}
              <ArrowRight className="h-6 w-6 text-lime-600" />
            </Link>
          </div>
        </div>

        <EmailModal
          title={emailModalProps.title}
          buttonLabel={emailModalProps.buttonLabel}
          serviceId={emailModalProps.serviceId}
          templateId={emailModalProps.templateId}
          userId={emailModalProps.userId}
        />
      </div>
    </section>
  );
};

export default HeroSectionServices;
