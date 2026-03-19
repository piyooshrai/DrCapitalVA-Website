'use client';

import { useState } from 'react';

interface ContactFormProps {
  showName?: boolean;
  showPhone?: boolean;
  showSpecialty?: boolean;
  showMessage?: boolean;
  buttonText?: string;
}

const ContactForm = ({
  showName = true,
  showPhone = true,
  showSpecialty = true,
  showMessage = true,
  buttonText = 'Book Strategy Call',
}: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') || undefined,
      email: formData.get('email'),
      phone: formData.get('phone') || undefined,
      specialty: formData.get('specialty') || undefined,
      message: formData.get('message') || undefined,
      source: 'contact-form',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setMessage({
        type: 'success',
        text: 'Thanks for reaching out! We'll be in touch within 24 hours.',
      });
      e.currentTarget.reset();
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      {showName && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-deep"
            placeholder="Your name"
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
          Email <span className="text-coral-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-deep"
          placeholder="you@practice.com"
        />
      </div>

      {showPhone && (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-deep"
            placeholder="(555) 123-4567"
          />
        </div>
      )}

      {showSpecialty && (
        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-text-primary mb-2">
            Practice Type
          </label>
          <select
            id="specialty"
            name="specialty"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-deep"
          >
            <option value="">Select your specialty</option>
            <option value="primary-care">Primary Care</option>
            <option value="dental">Dental</option>
            <option value="mental-health">Mental Health</option>
            <option value="cardiology">Cardiology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="multi-specialty">Multi-Specialty</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      {showMessage && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-deep resize-none"
            placeholder="Tell us about your practice..."
          />
        </div>
      )}

      {message && (
        <div
          className={`p-3 rounded-lg text-sm ${
            message.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : buttonText}
      </button>

      <p className="text-xs text-text-muted text-center">
        We respond within 24 business hours. Your information is HIPAA-secure.
      </p>
    </form>
  );
};

export default ContactForm;
