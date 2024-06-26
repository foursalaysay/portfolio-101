/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/XzrUEJVojIv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Gabarito } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

import {
  MountainIcon,
  MenuIcon,
  CodepenIcon,
  NetworkIcon,
  EclipseIcon,
  DatabaseIcon,
  GitGraphIcon,
  WindIcon,
  DockIcon,
  CloudIcon

} from './icons'

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background shadow">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Kyle</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
                <Link href="#profile" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Profile
                </Link>
                <Link href="#projects" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Projects
                </Link>
                <Link href="#skills" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Skills
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href="#profile"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Profile
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#projects"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Projects
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#skills"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Skills
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
          <div className="container px-4 md:px-6 text-primary-foreground">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-8xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">Kyle Salaysay</h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Experienced full-stack developer with a passion for building innovative web and mobile applications.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="profile" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a passionate full-stack developer with over 5 years of experience in the industry. I have a strong
                background in JavaScript, React, Node.js, and various other web technologies. I am always eager to learn
                new skills and stay up-to-date with the latest industry trends.
              </p>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Projects</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the projects I&apos;ve worked on over the years.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4 bg-background shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Project 1</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A full-stack web application built with React, Node.js, and MongoDB.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="p-4 bg-background shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Project 2</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A mobile-first web application built with React Native and Firebase.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="p-4 bg-background shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Project 3</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A data visualization dashboard built with React, D3.js, and Recharts.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Skills</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the technologies and tools I&apos;m proficient in:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <CodepenIcon className="h-6 w-6" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <NetworkIcon className="h-6 w-6" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <EclipseIcon className="h-6 w-6" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <DatabaseIcon className="h-6 w-6" />
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <GitGraphIcon className="h-6 w-6" />
                  <span>Git</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <WindIcon className="h-6 w-6" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <DockIcon className="h-6 w-6" />
                  <span>Docker</span>
                </div>
                <div className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
                  <CloudIcon className="h-6 w-6" />
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Kyle Salaysay. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


