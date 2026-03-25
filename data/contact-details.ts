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
    details: [
      {
        text: "Piassa Ethio Ceramics Bldg, 2nd floor",
        href: "https://maps.google.com/?q=Piassa+Ethio+Ceramics+Bldg,+Addis+Ababa",
      },
      {
        text: "Addis Ababa, Ethiopia",
        href: "https://maps.google.com/?q=Piassa+Ethio+Ceramics+Bldg,+Addis+Ababa",
      },
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      { text: "+251 911 975 548 - Sales Inquiries", href: "tel:+251911975548" },
      { text: "+251 911 971 336 - Call Center", href: "tel:+251911971336" },
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      {
        text: "contact@meritproperties.et",
        href: "mailto:contact@meritproperties.et",
      },
      {
        text: "meritpropertiesplc@gmail.com",
        href: "mailto:meritpropertiesplc@gmail.com",
      },
    ],
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
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/meritproperties" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/meritproperties" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/meritproperties" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/meritproperties" },
];
