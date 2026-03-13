import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Piassa Ethio Ceramics Bldg, 2nd floor", "Addis Ababa, Ethiopia"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+251 938 727 272 - Call Center",
      // "+251 911 249 183 - Sales Inquiries",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@meritproperties.et", "sales@meritproperties.et"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:30 AM - 5:00 PM",
      "Saturday: 8:30 AM - 12:00 PM",
      "Sunday: Closed",
    ],
  },
];

export const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "Tiktok", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];
