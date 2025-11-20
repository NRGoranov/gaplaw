import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: 'Моля, представете се.' })
    .min(2, 'Името трябва да съдържа поне 2 символа.')
    .max(120, 'Името е твърде дълго.'),
  email: z
    .string({ required_error: 'Посочете имейл за обратна връзка.' })
    .email('Невалиден имейл адрес.'),
  phone: z
    .string()
    .regex(/^[\d+\s()-]{6,20}$/, 'Телефонният номер не е валиден.')
    .optional()
    .or(z.literal('').transform(() => undefined)),
  subject: z
    .string({ required_error: 'Опишете темата на запитването.' })
    .min(5, 'Темата трябва да съдържа поне 5 символа.')
    .max(150, 'Темата е твърде дълга.'),
  message: z
    .string({ required_error: 'Опишете казуса си.' })
    .min(20, 'Съобщението трябва да съдържа поне 20 символа.')
    .max(2000, 'Съобщението е твърде дълго.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

