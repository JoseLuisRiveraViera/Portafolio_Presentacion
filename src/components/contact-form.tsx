"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner" // <--- CAMBIO AQUÍ: Importación directa
import { Loader2, Send } from "lucide-react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("https://formspree.io/f/movjlrnk", {
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
        
        ;(event.target as HTMLFormElement).reset()
      } else {
        // CAMBIO AQUÍ: Sintaxis de Sonner (toast.error)
        toast.error("Error al enviar", {
          description: "Hubo un problema. Por favor intenta contactarme por LinkedIn.",
        })
      }
    } catch (error) {
      toast.error("Error de conexión", {
        description: "No se pudo conectar con el servidor.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Nombre</label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Tu nombre completo" 
          required 
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Correo Electrónico</label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="ejemplo@correo.com" 
          required 
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Escribe tu mensaje aquí..." 
          className="min-h-[120px]" 
          required 
          disabled={isLoading}
        />
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}