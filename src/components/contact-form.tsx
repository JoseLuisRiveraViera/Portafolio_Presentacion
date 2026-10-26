"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2, Send } from "lucide-react"
import { useSiteLocale } from "@/components/site-preferences"

export function ContactForm() {
  const { t } = useSiteLocale()
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState<"sending" | "sent" | "sendError" | "networkError" | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setFeedback("sending")

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("https://formspree.io/f/mwvjojqb", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        toast.success(t.form.successTitle, {
          description: t.form.successDescription,
        })
        
        setFeedback("sent")
        form.reset()
      } else {
        setFeedback("sendError")
        toast.error(t.form.errorTitle, {
          description: t.form.errorDescription,
        })
      }
    } catch {
      setFeedback("networkError")
      toast.error(t.form.networkTitle, {
        description: t.form.networkDescription,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-label={t.form.label}>
      <div className="form-row">
      <div className="form-field">
        <label htmlFor="name" className="text-sm font-medium">{t.form.name}</label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          autoComplete="name"
          className="contact-input"
          placeholder={t.form.namePlaceholder}
          required 
          disabled={isLoading}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email" className="text-sm font-medium">{t.form.email}</label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          autoComplete="email"
          className="contact-input"
          placeholder={t.form.emailPlaceholder}
          required 
          disabled={isLoading}
        />
      </div>
      </div>
      <div className="form-field">
        <label htmlFor="message" className="text-sm font-medium">{t.form.message}</label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder={t.form.messagePlaceholder}
          className="contact-input contact-textarea"
          required 
          disabled={isLoading}
        />
      </div>
      
      <Button type="submit" className="contact-submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            {t.form.sending}
          </>
        ) : (
          <>
            {t.form.submit}
            <Send className="ml-2 h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
      <p className="form-status" role="status" aria-live="polite" aria-atomic="true">{feedback ? t.form[feedback] : ""}</p>
    </form>
  )
}
