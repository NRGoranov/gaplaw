'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ContactFormValues } from '@/lib/validations';
import { contactFormSchema } from '@/lib/validations';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = useCallback(
    async (values: ContactFormValues) => {
      setStatus('idle');
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          throw new Error('Нещо се обърка. Опитайте отново.');
        }
        setStatus('success');
        reset();
      } catch {
        setStatus('error');
      }
    },
    [reset],
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-white/10 bg-surface/95 p-8 shadow-luxury backdrop-blur"
      noValidate
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-text-primary">
          Име и фамилия
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full rounded-2xl border border-white/20 bg-background-light px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="text-sm text-error">{errors.name.message}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-text-primary">
            Имейл
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded-2xl border border-white/20 bg-background-light px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && <p className="text-sm text-error">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-text-primary">
            Телефон (по желание)
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full rounded-2xl border border-white/20 bg-background-light px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.phone && <p className="text-sm text-error">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-text-primary">
          Тема
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className="w-full rounded-2xl border border-white/20 bg-background-light px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.subject && <p className="text-sm text-error">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Вашето съобщение
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full rounded-2xl border border-white/20 bg-background-light px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.message && <p className="text-sm text-error">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-dark shadow-luxury transition hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? <LoadingSpinner /> : 'Изпратете запитване'}
      </button>

      {status === 'success' && (
        <p className="rounded-2xl bg-primary-subtle p-4 text-sm text-primary-dark">
          Благодарим за доверието! Ще се свържем с вас до един работен ден.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-2xl bg-error/10 p-4 text-sm text-error">
          Не успяхме да изпратим съобщението. Опитайте отново или ни потърсете директно.
        </p>
      )}
    </form>
  );
};

