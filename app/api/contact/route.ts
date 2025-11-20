import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import type { ContactFormValues } from '@/lib/validations';

export const runtime = 'nodejs';

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_RECIPIENT,
  CONTACT_FROM,
} = process.env;

const fromAddress = CONTACT_FROM ?? CONTACT_RECIPIENT ?? 'no-reply@gaplaw.eu';
const recipientAddress = CONTACT_RECIPIENT ?? CONTACT_FROM;

const transporter =
  SMTP_HOST &&
  nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT) === 465,
    auth:
      SMTP_USER && SMTP_PASS
        ? {
            user: SMTP_USER,
            pass: SMTP_PASS,
          }
        : undefined,
  });

const buildSummary = (values: ContactFormValues) => {
  const phoneLine = values.phone ? `Телефон: ${values.phone}\n` : '';
  return `Ново запитване от GAPLaw website

Име: ${values.name}
Имейл: ${values.email}
${phoneLine}Тема: ${values.subject}

Съобщение:
${values.message}
`;
};

const buildHtmlSummary = (values: ContactFormValues) => `
  <p><strong>Име:</strong> ${values.name}</p>
  <p><strong>Имейл:</strong> ${values.email}</p>
  ${values.phone ? `<p><strong>Телефон:</strong> ${values.phone}</p>` : ''}
  <p><strong>Тема:</strong> ${values.subject}</p>
  <p><strong>Съобщение:</strong></p>
  <p>${values.message.replace(/\n/g, '<br />')}</p>
`;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Невалидни данни', issues: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    if (!transporter || !recipientAddress) {
      return NextResponse.json(
        { error: 'Имейл услугата не е конфигурирана.' },
        { status: 500 },
      );
    }

    const summaryText = buildSummary(result.data);
    const summaryHtml = buildHtmlSummary(result.data);

    await transporter.sendMail({
      from: fromAddress,
      to: recipientAddress,
      replyTo: result.data.email,
      subject: `Ново запитване: ${result.data.subject}`,
      text: summaryText,
      html: summaryHtml,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: result.data.email,
      subject: `Копие от вашето запитване: ${result.data.subject}`,
      text: `Благодарим ви за интереса към GAPLaw.\n\nЕто копие от изпратеното съобщение:\n\n${summaryText}\n---\nАдвокатско дружество Горанова и Христова-Аличкова`,
      html: `
        <p>Благодарим ви за интереса към GAPLaw. Ето копие от изпратеното съобщение:</p>
        ${summaryHtml}
        <p>---<br/>Адвокатско дружество Горанова и Христова-Аличкова</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error', error);
    return NextResponse.json({ error: 'Възникна грешка' }, { status: 500 });
  }
}

