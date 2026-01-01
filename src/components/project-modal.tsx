"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface ProjectModalProps {
  title: string
  description: string
  images: string[] // Array de rutas de imágenes
}

export function ProjectModal({ title, description, images }: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          Ver Galería <Eye className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        {/* Carrusel */}
        <div className="flex justify-center p-4">
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                    <Image
                      src={img}
                      alt={`${title} imagen ${index + 1}`}
                      fill
                      className="object-contain" // o object-cover si prefieres llenar todo
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}