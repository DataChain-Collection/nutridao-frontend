import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is NutriDAO and how does it work?",
    ans: "NutriDAO is a community-driven DataDAO focused on ethical, user-owned nutritional data. Users can contribute structured supplement data and metadata, stored using FHIR standards and IPFS. In return, contributors receive rewards and help power AI models in health research.",
  },
  {
    id: 2,
    quest: "Do I need technical knowledge to contribute?",
    ans: "No. NutriDAO is designed to be accessible. Whether you're a health enthusiast, practitioner, or developer, you can contribute data through a simple interface, and all contributions are reviewed and curated by the community.",
  },
  {
    id: 3,
    quest: " How is my data protected?",
    ans: "Your data is handled with strict consent mechanisms and stored in decentralized infrastructure. You decide what to share, and with whom. All access is governed by transparent smart contracts and aligned with ethical data principles. Additionally, the Vana ecosystem provides a robust foundation for security and privacy, ensuring your data remains protected throughout its lifecycle.",
  },
];

export default faqData;
