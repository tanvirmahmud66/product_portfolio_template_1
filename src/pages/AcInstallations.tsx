import React from "react";
import AcInstallationOverview from "../components/AcInstallations/AcInstallationOverview";
import AcInstallationBenefits from "../components/AcInstallations/AcInstallationBenefits";
import AcInstallationPricing from "../components/AcInstallations/AcInstallationPricing";
import AcInstallationCallToAction from "../components/AcInstallations/AcInstallationCallToAction";

const AcInstallations: React.FC = () => {
  return (
    <main>
      <AcInstallationOverview />
      <AcInstallationBenefits />
      <AcInstallationPricing />
      <AcInstallationCallToAction />
    </main>
  );
};

export default AcInstallations;
