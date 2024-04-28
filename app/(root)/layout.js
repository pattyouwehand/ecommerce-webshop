import "../globals.css"
import Header from "@/components/shared/Header"
import Footer from "@/components/shared/Footer"

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}