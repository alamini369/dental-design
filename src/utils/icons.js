import {
  AlignCenter,
  Anchor,
  CircleDot,
  CircleOff,
  Clock,
  Droplets,
  HeartHandshake,
  Layers,
  MapPin,
  MessageSquareText,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";

const iconMap = {
  AlignCenter,
  Anchor,
  CircleDot,
  CircleOff,
  Clock,
  Droplets,
  HeartHandshake,
  Layers,
  MapPin,
  MessageSquareText,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  Thermometer,
  Wind,
  Zap,
};

export function getIcon(name) {
  return iconMap[name] ?? Sparkles;
}
