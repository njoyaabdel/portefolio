"use server"

import { getErrorMessage, validateString } from "@/lib/utils";
import { error } from "console";
import { number } from "framer-motion";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");


export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sende email",
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "invalide message"
    }
  }
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'njoyaabdelkarim404@gmail.com',
      subject: 'message from contact form',
      replyTo: senderEmail as string,
      text: message as string

    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    };

  }
};