import React from "react";
import AcOverview from "../components/AcOverview";
import AcIssuesAndBenefits from "../components/AcIssuesAndBenefits";
import AcPricing from "../components/AcPricing";
import AcCallToAction from "../components/AcCallToAction";

const AcRepair: React.FC = () => {
  return (
    <main>
      <AcOverview />
      <AcIssuesAndBenefits />
      <AcPricing />
      <AcCallToAction />
    </main>
  );
};

export default AcRepair;
