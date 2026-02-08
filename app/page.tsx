import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance">
            Welcome to the App
          </h1>
          <p className="text-muted-foreground text-lg">
            Get started by creating an account or signing in to your existing account.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/auth/signup">
              Create account
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 bg-transparent">
            <Link href="/auth/login">
              Sign in
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
