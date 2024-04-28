import Link from "next/link"

const Footer = () => {

  return(
    <footer className="w-full">
      <div className="wrapper items-center justify-between">
        <Link href="/" className="w-36">
          Social media
        </Link>
      </div>
    </footer>
  )
}

export default Footer