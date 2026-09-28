"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const contactEmail = process.env.CONTACT_EMAIL ?? "chaoviper97@gmail.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!isValidEmail(senderEmail)) {
    return {
      error: "Please enter a valid email address",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form delivery is disabled: RESEND_API_KEY is missing.");
    return {
      error: "Email delivery is temporarily unavailable. Please use the email link instead.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: contactFromEmail,
      to: contactEmail,
      subject: "New portfolio contact message",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    return {
      data,
    };
  } catch (error: unknown) {
    console.error("Contact form email failed:", getErrorMessage(error));
    return {
      error: "The message could not be sent. Please use the email link instead.",
    };
  }
};
