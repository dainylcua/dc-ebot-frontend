import Header from "./Header"

export default function Container({children}) {
  // TODO: Implement dark mode succesfully
  return (
    <div className="flex flex-col h-full min-h-screen mx-auto font-normal leading-relaxed dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-200">
      <Header />
        <main className="flex-1 transition-colors w-4/5 py-24 mx-auto sm:w-3/5 md:w-[60rem] md:dark:bg-neutral-900 md:bg-neutral-50 md:px-12 text-center">
          {children}
        </main>
    </div>
  )
}