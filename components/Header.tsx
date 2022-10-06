import Link from "next/link"
import { useRouter } from "next/router"

export default function Header() {
  // TODO: Add menu items (main page, stations index page, notes page)
  const router = useRouter()
  const reg = /[/][\w]+/g
  const startRoute = (router.asPath.match(reg) ? router.asPath.match(reg)[0] : "/")
  return(
    <div className="flex flex-row w-4/5 h-24 py-8 mx-auto border-b border-black justify-evenly">
      <Link href="/">
        <a className={`active:text-black active:bg-zinc-300 hover:bg-zinc-300 px-1.5 rounded-md text-lg font-semibold transition-colors ease-in-out mx-16 ${startRoute === "/" ? 'bg-zinc-200' : 'text-zinc-500'}`}>
          Main Page
        </a>
      </Link>
      <Link href="/stations">
        <a className={`active:text-black active:bg-zinc-300 hover:bg-zinc-300 px-1.5 rounded-md text-lg font-semibold transition-colors ease-in-out mx-16 ${startRoute === "/stations" ? 'bg-zinc-200' : 'text-zinc-500'}`}>
          Stations
        </a>
      </Link>
      <Link href="/challenges">
        <a className={`active:text-black active:bg-zinc-300 hover:bg-zinc-300 px-1.5 rounded-md text-lg font-semibold transition-colors ease-in-out mx-16 ${startRoute === "/notes" ? 'bg-zinc-200' : 'text-zinc-500'}`}>
          Challenges
        </a>
      </Link>
    </div>
  )
}