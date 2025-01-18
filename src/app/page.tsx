import { BrewCard } from "@/components/brew-card"
import { brews } from "@/data/brews"

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Últimos Preparos</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {brews.map((brew) => (
          <BrewCard
            key={brew.id}
            id={brew.id}
            coffeeName={brew.coffeeName}
            method={brew.method}
            date={brew.date}
            duration={brew.duration}
            ratio={brew.ratio}
            imageUrl={brew.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
