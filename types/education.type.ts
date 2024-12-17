import { z } from "zod";

export const EducationSchema = z.object({
  institution: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  location: z.string(),
  degree: z.string(),
});

export type Education = z.infer<typeof EducationSchema>;
