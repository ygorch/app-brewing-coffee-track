import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Coffee, Scale, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BrewCardProps {
  id: string
  coffeeName: string
  method: string
  date: string
  duration: string
  ratio: string
  imageUrl?: string
}

export function BrewCard({ id, coffeeName, method, date, duration, ratio, imageUrl }: BrewCardProps) {
  return (
    <Link href={`/brew/${id}`}>
      <Card className="bg-primary/10">
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <div className="relative w-16 h-16 overflow-hidden rounded-md bg-muted">
            {imageUrl ? (
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={coffeeName}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <Coffee className="w-8 h-8 text-primary/50" />
              </div>
            )}
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-primary">{coffeeName}</CardTitle>
            <p className="text-sm font-medium text-primary/80">{method}</p>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="grid grid-cols-3 gap-2 text-sm font-medium">
            <span className="flex items-center justify-start gap-2 text-primary/70"><Calendar /> {date}</span>
            <span className="flex items-center justify-center gap-2 text-primary/70"><Timer /> {duration}</span>
            <span className="flex items-center justify-end gap-2 text-primary/70"><Scale /> {ratio}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
