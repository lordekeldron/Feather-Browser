import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Feather Browser', description: 'Navegação leve, privada e protegida.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html> }
