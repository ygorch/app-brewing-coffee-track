"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Coffee, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddBrew() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Aqui você implementaria a lógica para enviar os dados para seu backend
    // Por enquanto, vamos simular um envio bem-sucedido após um breve delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsLoading(false)
    toast({
      title: "Preparo adicionado",
      description: "Seu novo registro de preparo de café foi adicionado com sucesso.",
    })
    router.push('/') // Redireciona para a página principal após o envio
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Adicionar Novo Preparo</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="coffeeName">Nome do Café</Label>
              <Input id="coffeeName" placeholder="Ex: Café do Cerrado" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="method">Método de Preparo</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o método" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hario-v60">Hario V60</SelectItem>
                  <SelectItem value="aeropress">Aeropress</SelectItem>
                  <SelectItem value="chemex">Chemex</SelectItem>
                  <SelectItem value="french-press">French Press</SelectItem>
                  <SelectItem value="moka-pot">Moka Pot</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Data do Preparo</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duração do Preparo</Label>
              <Input id="duration" placeholder="Ex: 3:30" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ratio">Ratio (Café:Água)</Label>
              <Input id="ratio" placeholder="Ex: 1:15" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notas Adicionais</Label>
              <Textarea id="notes" placeholder="Descreva suas impressões, ajustes ou observações" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Imagem (opcional)</Label>
              <Input id="image" type="file" accept="image/*" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Adicionando...
                </>
              ) : (
                <>
                  <Coffee className="w-4 h-4 mr-2" />
                  Adicionar Preparo
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
