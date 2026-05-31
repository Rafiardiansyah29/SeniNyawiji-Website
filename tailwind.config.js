export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#030403",
        ink: "#070B09",
        moss: "#071F19",
        forest: "#0D3A2E",
        emerald: "#16A064",
        teal: "#20C7C9",
        skyglass: "#B9EEF0",
        gold: "#C9A646",
        oldgold: "#8F762C",
        bone: "#EFE6D1",
        smoke: "#BDB3A1",
        charcoal: "#17120B",
      },
      fontFamily: {
        display: ["Terang Bulan", "serif"],
        serif: ["Terang Bulan", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 34px 110px rgba(0, 0, 0, 0.52)",
        gold: "0 0 0 1px rgba(201,166,70,.22), 0 24px 80px rgba(201,166,70,.10)",
        teal: "0 0 90px rgba(32,199,201,.2)",
      },
      backgroundImage: {
        'stage-field': 'radial-gradient(circle at 50% 15%, rgba(32,199,201,.16), transparent 26%), radial-gradient(circle at 74% 65%, rgba(22,160,100,.18), transparent 32%), radial-gradient(circle at 18% 75%, rgba(201,166,70,.12), transparent 30%)',
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(.8deg)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { opacity: ".28", transform: "scale(1)" },
          "50%": { opacity: ".55", transform: "scale(1.1)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 7s ease-in-out infinite",
        orbit: "orbit 26s linear infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite",
        fadeUp: "fadeUp .8s ease-out both",
        breathe: "breathe 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};


