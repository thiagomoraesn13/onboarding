/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // se for playground dentro do repo:
    "../src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thiagomoraesn13/ui/**/*.{js,ts,jsx,tsx}",
  ],
  /*   theme: {
    extend: {
      colors: {
        // Primary
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",

        // Base
        "base-lt": "var(--color-base-lt)",
        "base-dk": "var(--color-base-dk)",

        // Neutral
        "neutral-lt-3": "var(--color-neutral-lt-3)",
        "neutral-lt-2": "var(--color-neutral-lt-2)",
        "neutral-lt-1": "var(--color-neutral-lt-1)",
        neutral: "var(--color-neutral)",
        "neutral-dk-1": "var(--color-neutral-dk-1)",
        "neutral-dk-2": "var(--color-neutral-dk-2)",
        "neutral-dk-3": "var(--color-neutral-dk-3)",

        // Brand
        "brand-lt-2": "var(--color-brand-lt-2)",
        "brand-lt-1": "var(--color-brand-lt-1)",
        brand: "var(--color-brand)",
        "brand-dk-1": "var(--color-brand-dk-1)",
        "brand-dk-2": "var(--color-brand-dk-2)",
        "brand-dk-3": "var(--color-brand-dk-3)",

        // Error
        "error-lt": "var(--color-error-lt)",
        error: "var(--color-error)",

        // Success
        "success-lt": "var(--color-success-lt)",
        success: "var(--color-success)",

        // Backgrounds
        "bg-lt-2": "var(--color-bg-lt-2)",
        "bg-lt-1": "var(--color-bg-lt-1)",
        bg: "var(--color-bg)",

        // Especial A
        "esp-a-lt-1": "var(--color-esp-a-lt-1)",
        "esp-a": "var(--color-esp-a)",
        "esp-a-dk-1": "var(--color-esp-a-dk-1)",

        // Especial B
        "esp-b-lt-1": "var(--color-esp-b-lt-1)",
        "esp-b": "var(--color-esp-b)",

        // Especial C
        "esp-c-lt-2": "var(--color-esp-c-lt-2)",
        "esp-c-lt-1": "var(--color-esp-c-lt-1)",
        "esp-c": "var(--color-esp-c)",

        // Especial D
        "esp-d-lt-1": "var(--color-esp-d-lt-1)",
        "esp-d": "var(--color-esp-d)",

        // Especial E
        "esp-e-lt-1": "var(--color-esp-e-lt-1)",
        "esp-e": "var(--color-esp-e)",

        // Gradient helpers (cores pra from/to)
        "gradient-start": "var(--color-gradient-start)",
        "gradient-end": "var(--color-gradient-end)",
      },
    },
  }, */
  /*   safelist: [
    // layout base
    "flex",
    "inline-flex",
    "items-center",
    "justify-center",
    "flex-1",
    "min-w-0",

    // spacing / sizing
    "gap-1",
    "gap-2",
    "gap-3",
    "gap-4",
    "space-y-2",
    "space-y-4",
    "p-0",
    "p-2",
    "p-3",
    "p-4",
    "p-6",
    "px-2",
    "px-4",
    "py-2",
    "py-3",
    "w-full",
    "w-fit",
    "w-fit-content",

    // typography
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "font-medium",
    "font-bold",
    "leading-none",
    "leading-6",

    // button feel
    "relative",
    "cursor-pointer",
    "cursor-not-allowed",
    "rounded-md",
    "rounded-full",
    "transition-colors",

    // colors (bg/text/border)
    "bg-brand",
    "bg-base-lt",
    "bg-base-dk",
    "bg-neutral-lt-1",
    "bg-neutral-lt-2",
    "bg-neutral-lt-3",
    "bg-neutral-dk-1",
    "bg-neutral-dk-2",
    "bg-neutral-dk-3",

    "text-brand",
    "text-base-lt",
    "text-base-dk",
    "text-neutral-lt-1",
    "text-neutral-lt-2",
    "text-neutral-lt-3",
    "text-neutral-dk-1",
    "text-neutral-dk-2",
    "text-neutral-dk-3",

    "border",
    "border-2",
    "border-brand",
    "border-base-lt",
    "border-base-dk",

    // states
    "hover:bg-brand",
    "hover:bg-neutral-lt-2",
    "active:opacity-80",
    "opacity-0",
    "opacity-10",
    "opacity-20",
    "opacity-30",
    "opacity-40",
    "opacity-50",
    "opacity-60",
    "opacity-70",
    "opacity-80",
    "opacity-90",
    "opacity-100",
  ], */
  plugins: [],
};
