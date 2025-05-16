export const getSublinks = (name) => {
  switch (name) {
    case "Product":
      return [
        { label: "Overview" },
        { label: "Pricing" },
        { label: "Marketplace" },
        { label: "Features" },
        { label: "Integrations" },
      ];
    case "Company":
      return [
        { label: "About" },
        { label: "Team" },
        { label: "Blog" },
        { label: "Careers" },
      ];
    case "Connect":
      return [
        { label: "Contact" },
        { label: "Newsletter" },
        { label: "LinkedIn" },
      ];
    default:
      return [];
  }
};
