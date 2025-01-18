import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Simulando dados de preparos (você substituirá isso por dados reais do seu backend)
const brews = [
  { id: '1', coffeeName: 'Café do Cerrado', method: 'Hario V60', date: '2025-01-18', duration: '3:30', ratio: '1:15', imageUrl: '/images/cafe-cerrado.jpg' },
  { id: '2', coffeeName: 'Etiópia Yirgacheffe', method: 'Aeropress', date: '2025-01-17', duration: '2:45', ratio: '1:13' },
  { id: '3', coffeeName: 'Colômbia Supremo', method: 'Chemex', date: '2025-01-16', duration: '4:15', ratio: '1:16', imageUrl: '/images/colombia-supremo.jpg' },
]

export default function BrewDetail({ params }: { params: { id: string } }) {
  const brew = brews.find(b => b.id === params.id)

  if (!brew) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-col items-center gap-6 p-6 md:flex-row">
          <div className="relative w-full overflow-hidden rounded-md md:w-1/3 aspect-square bg-muted">
            {brew.imageUrl ? (
              <Image
                src={brew.imageUrl || "/placeholder.svg"}
                alt={brew.coffeeName}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <Coffee className="w-16 h-16 text-muted-foreground" />
              </div>
            )}
          </div>
          <div className="md:w-2/3">
            <CardTitle className="mb-2 text-2xl">{brew.coffeeName}</CardTitle>
            <p className="mb-4 text-lg text-muted-foreground">{brew.method}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">Data</p>
                <p>{brew.date}</p>
              </div>
              <div>
                <p className="font-semibold">Duração</p>
                <p>{brew.duration}</p>
              </div>
              <div>
                <p className="font-semibold">Ratio</p>
                <p>{brew.ratio}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            Detalhes adicionais sobre o preparo do café podem ser adicionados aqui.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
