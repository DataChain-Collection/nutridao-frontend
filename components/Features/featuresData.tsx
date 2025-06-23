import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "FHIR-Backed Interoperability",
    description:
      "Built on OpenFHIRChain, NutriDAO ensures full compatibility with HL7 FHIR standards, enabling integration with existing EHR/EMR systems and health apps.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "User-Centric Data Ownership",
    description:
      "Participants retain full control over the data they contribute. Consent, visibility, and monetization are all transparent and governed by the user.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Supplement Metadata on IPFS",
    description:
      "Each supplement entry is stored off-chain on IPFS, hashed and verifiable, reducing gas fees and enhancing traceability and trust.",
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "Modular Smart Contract Architecture",
    description:
      "Our Solidity-based system supports flexible onboarding of new FHIR resource types, extensible for future health and nutrition use cases.",
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "Ethical Token Incentives",
    description:
      "Contributors are rewarded for high-quality, validated data via community-driven tokenomics aligned with the Vana ecosystem.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "Consent-Based Data Pooling",
    description:
      "All contributed data feeds into a privacy-preserving pool, accessible only through user-approved queries. This enables ethical AI training and research collaborations.",
  },
];

export default featuresData;
