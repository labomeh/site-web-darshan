/**
 * Ladle Configuration
 * Component development and documentation tool
 * @see https://ladle.dev/docs/config
 */

export default {
  // Where to find story files
  stories: 'components/**/*.stories.{ts,tsx}',

  // Port for Ladle dev server
  port: 61000,

  // Viewport width presets for responsive testing
  addons: {
    width: {
      enabled: true,
      options: {
        xsmall: 414, // Mobile (iPhone)
        small: 640, // sm: breakpoint
        medium: 768, // md: breakpoint
        large: 1024, // lg: breakpoint
        xlarge: 1280, // xl: breakpoint
      },
      defaultState: 'medium',
    },
    // Enable theme switcher (light/dark)
    theme: {
      enabled: false, // We use Tailwind, not built-in theming
    },
  },
};
