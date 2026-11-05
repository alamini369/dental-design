/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // design.md palette
        cosmic: "#15252d",
        cinder: "#254250",
        fog: "#9fb2bc",
        mist: "#e2e8f0",
        cloud: "#f8f8f8",
        ash: "#efefef",
        signal: { DEFAULT: "#e75e15", 600: "#d45410", 700: "#b04a12" },

        // Semantic aliases kept in sync with the palette above so existing
        // components read as dark stage / light field without new hex values.
        primary: {
          50: "#f8f8f8",
          100: "#e2e8f0",
          500: "#9fb2bc",
          600: "#254250",
          700: "#15252d",
        },
        accent: { 500: "#e75e15", 600: "#d45410" },
        ink: { 900: "#15252d", 700: "#254250", 500: "#5b6f79" },
        line: "#e2e8f0",
        surface: { DEFAULT: "#f8f8f8", alt: "#efefef" },
        // Functional feedback stays in the orange family plus neutrals.
        success: "#b04a12",
        danger: "#b04a12",
        whatsapp: "#e75e15",
      },
      fontFamily: {
        heading: ["Inter", "Hind Siliguri", "system-ui", "sans-serif"],
        body: ["Inter", "Hind Siliguri", "system-ui", "sans-serif"],
        bangla: ["Hind Siliguri", "system-ui", "sans-serif"],
        mono: ['"Fira Code"', '"JetBrains Mono"', '"Source Code Pro"', "monospace"],
      },
      borderRadius: {
        nav: "8px",
        card: "24px",
        panel: "32px",
      },
      boxShadow: {
        // The system is intentionally flat: separation comes from surface steps.
        card: "none",
        "card-hover": "none",
        header: "none",
      },
      maxWidth: {
        page: "1200px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
