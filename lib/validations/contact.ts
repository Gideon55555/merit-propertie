import { z } from "zod";

export const InterestOptions = [
  "residential",
  "commercial",
  "investment",
  "viewing",
  "other",
] as const;

export type InterestType = (typeof InterestOptions)[number];

export const interestLabels: Record<InterestType, string> = {
  residential: "Residential Properties",
  commercial: "Commercial Properties",
  investment: "Investment Opportunities",
  viewing: "Schedule a Viewing",
  other: "Other Inquiry",
};

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address." })
    .max(150, { message: "Email must be under 150 characters." }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number is too long." })
    .optional()
    .or(z.literal("")),
  interest: z.enum(InterestOptions, {
    message: "Please select an interest option.",
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2500, { message: "Message cannot exceed 2500 characters." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to data processing to submit the form.",
  }),
  _gotcha: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
