/**
 * Problems patients search for. Each entry links to the services that may help.
 * Wording stays cautious: "may", "can help". Never promise a cure.
 */
export const problems = [
  {
    slug: "toothache",
    icon: "Zap",
    titleKey: "problems.toothache.title",
    textKey: "problems.toothache.text",
    services: ["fillings", "root-canal"],
  },
  {
    slug: "bleeding-gums",
    icon: "Droplets",
    titleKey: "problems.bleeding-gums.title",
    textKey: "problems.bleeding-gums.text",
    services: ["teeth-cleaning"],
  },
  {
    slug: "crooked-teeth",
    icon: "AlignCenter",
    titleKey: "problems.crooked-teeth.title",
    textKey: "problems.crooked-teeth.text",
    services: ["braces-care"],
  },
  {
    slug: "missing-teeth",
    icon: "CircleOff",
    titleKey: "problems.missing-teeth.title",
    textKey: "problems.missing-teeth.text",
    services: ["dental-implant", "crowns-bridges"],
  },
  {
    slug: "sensitivity",
    icon: "Thermometer",
    titleKey: "problems.sensitivity.title",
    textKey: "problems.sensitivity.text",
    services: ["fillings", "teeth-cleaning"],
  },
  {
    slug: "bad-breath",
    icon: "Wind",
    titleKey: "problems.bad-breath.title",
    textKey: "problems.bad-breath.text",
    services: ["teeth-cleaning"],
  },
];

export const getProblem = (slug) => problems.find((problem) => problem.slug === slug);
