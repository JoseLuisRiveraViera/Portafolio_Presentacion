"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner" // <--- CAMBIO AQUÍ: Importación directa
import { Loader2, Send } from "lucide-react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setFeedback("Enviando tu mensaje…")

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
        // CAMBIO AQUÍ: Sintaxis de Sonner (toast.success)
        toast.success("¡Mensaje enviado con éxito!", {
          description: "Gracias por contactarme. Te responderé lo antes posible.",
        })
        
        setFeedback("¡Mensaje enviado! Gracias por escribirme.")
        form.reset()
      } else {
        setFeedback("No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por LinkedIn.")
        // CAMBIO AQUÍ: Sintaxis de Sonner (toast.error)
        toast.error("Error al enviar", {
          description: "Hubo un problema. Por favor intenta contactarme por LinkedIn.",
        })
      }
    } catch {
      setFeedback("No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.")
      toast.error("Error de conexión", {
        description: "No se pudo conectar con el servidor.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-label="Enviar un mensaje a José Luis">
      <div className="form-row">
      <div className="form-field">
        <label htmlFor="name" className="text-sm font-medium">Nombre</label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          autoComplete="name"
          className="contact-input"
          placeholder="Tu nombre completo" 
          required 
          disabled={isLoading}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          autoComplete="email"
          className="contact-input"
          placeholder="ejemplo@correo.com" 
          required 
          disabled={isLoading}
        />
      </div>
      </div>
      <div className="form-field">
        <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Escribe tu mensaje aquí..." 
          className="contact-input contact-textarea"
          required 
          disabled={isLoading}
        />
      </div>
      
      <Button type="submit" className="contact-submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      <p className="form-status" role="status" aria-live="polite" aria-atomic="true">{feedback}</p>
    </form>
  )
}
