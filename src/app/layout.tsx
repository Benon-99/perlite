import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export const metadata = {
  title: 'Mihran Company - Perlite Products and Solutions',
  description: 'Leading provider of high-quality perlite products and applications with comprehensive solutions for your industry needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {/* Add pt-16 to account for the fixed navbar height */}
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}