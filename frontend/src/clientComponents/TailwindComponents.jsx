"use client";

import { ThemeProvider, Button, Carousel, Typography } from "@material-tailwind/react";

export { Button, Carousel, Typography };

export function ClientThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
