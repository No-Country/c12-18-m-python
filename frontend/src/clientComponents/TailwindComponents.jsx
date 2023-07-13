"use client";

import { ThemeProvider, Button, Carousel, Typography, Input, Form, Checkbox, Card } from "@material-tailwind/react";

export { Button, Carousel, Typography, Input, Form, Checkbox, Card };

export function ClientThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
