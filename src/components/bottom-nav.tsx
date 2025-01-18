"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { History, Home, PlusCircle, User, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Feed', href: '/feed' },
  { icon: PlusCircle, label: 'Novo Preparo', href: '/add' },
  { icon: History, label: 'Histórico', href: '/history' },
  { icon: User, label: 'Perfil', href: '/profile' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background border-border">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          const isCenter = index === Math.floor(navItems.length / 2)

          return (
            <Link key={item.href} href={item.href} passHref>
              <Button
                variant="ghost"
                size={isCenter ? "lg" : "icon"}
                className={cn(
                  "flex flex-col items-center justify-center",
                  isCenter && "absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
                  isActive && !isCenter && "text-primary"
                )}
              >
                <item.icon className={cn("h-5 w-5", isCenter && "h-6 w-6")} />
                {!isCenter && (
                  <span className="mt-1 text-xs">{item.label}</span>
                )}
              </Button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
