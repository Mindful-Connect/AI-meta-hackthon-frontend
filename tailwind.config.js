/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primaryColor: "var(--primary-color)",
        primaryColorText: "var(--primary-color-text)",
        secondaryColor: "var(--secondary-color)",
        secondaryColorText: "var(--secondary-color-text)",
        turquoise: "#2aceb6",
        glitter: "#e4e9fe",
        clarity: {
          0.1: "#484854",
          0: "#575759",
          1: "#7F7F82",
          2: "#95A0BC",
          3: "#B1B1C4",
          3.5: "#CFCFD4",
          3.75: "#D9D9E2",
          4: "#E6E6EC",
          black: "#2f2f30",
          blue: {
            0: "#575759",
            25: "#F8F9FF",
            50: "#E6ECFF",
          },
          bg: "#f5f6ff",
          bg2: "#F7F7FC",
          gray: "#E6E6EC",
        },
        eerie: {
          100: "#1b1c1e",
          200: "#1C1E21",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
