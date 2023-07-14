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
  List,
  ListItem,
} from "@material-tailwind/react";

export { Button, Carousel, Typography, Input, Form, Checkbox, Card, CardHeader, CardBody, CardFooter, List, ListItem };

export function ClientThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
