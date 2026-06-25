import { Bike, Coffee, Dice5, Music, BookOpen, UtensilsCrossed, Mountain, Camera, Dumbbell, Palette } from "lucide-react"

const categories = [
  { icon: Coffee, label: "Coffee Meetups" },
  { icon: Bike, label: "Bike Rides" },
  { icon: Dice5, label: "Board Games" },
  { icon: Music, label: "Concerts" },
  { icon: BookOpen, label: "Book Clubs" },
  { icon: UtensilsCrossed, label: "Brunches" },
  { icon: Mountain, label: "Weekend Hikes" },
  { icon: Camera, label: "Photo Walks" },
  { icon: Dumbbell, label: "Run Clubs" },
  { icon: Palette, label: "Art Nights" },
]

export function CategoryMarquee() {
  const items = [...categories, ...categories]

  return (
    <section aria-label="Activity categories on FrndCircle" className="border-y border-border bg-card py-6">
      <div className="marquee-track marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-4">
          {items.map((category, index) => (
            <li
              key={`${category.label}-${index}`}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-background px-5 py-2.5"
              aria-hidden={index >= categories.length ? true : undefined}
            >
              <category.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="whitespace-nowrap text-sm font-medium text-foreground">{category.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
