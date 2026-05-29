// Design tokens for lunar-history page
// Typography, colors, spacing, layout hierarchy, and space-inspired theme

export const typography = {
  fontFamily: "'Inter', sans-serif",
  fontSizeBase: '16px',
  fontWeightRegular: 400,
  fontWeightBold: 700,
  lineHeightBase: 1.5,
  headings: {
    h1: { fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3 },
    h3: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.4 },
    h4: { fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4 },
  },
};

export const colors = {
  primary: '#4B6CB7', // deep space blue
  secondary: '#182848', // darker navy
  accent: '#F5A623', // warm moonlight orange
  background: '#0B0F2A', // very dark blue
  surface: '#1A1F44', // dark blue surface
  textPrimary: '#E0E6F8', // light text
  textSecondary: '#A0A8C0', // muted text
  highlight: '#7FDBFF', // light blue highlight
  error: '#FF6B6B',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '40px',
  xxl: '64px',
};

export const layout = {
  maxWidth: '1200px',
  gutter: spacing.md,
  borderRadius: '8px',
};

// Visual theme inspired by space exploration and the Moon
export const theme = {
  typography,
  colors,
  spacing,
  layout,
};

// Documented design direction:
// Typography uses Inter font for modern readability with strong hierarchy in headings.
// Color palette is dark blue and navy base with warm orange accent and light blue highlights.
// Spacing rhythm is modular with 4px base increments.
// Layout max width constrained for readability with generous gutters.
// Overall theme evokes deep space and moonlight ambiance for immersive experience.

