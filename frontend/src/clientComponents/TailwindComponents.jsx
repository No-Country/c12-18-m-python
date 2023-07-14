"use client";
import {
  ThemeProvider,
  Button,
  Carousel,
  Typography,
  Input,
  Form,
  Checkbox,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export { Button, Carousel, Typography, Input, Form, Checkbox, Card, CardHeader, CardBody, CardFooter };

export function ClientThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
