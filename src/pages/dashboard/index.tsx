import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import routes from "../../router/routes"

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate(routes.auth.login)
  }

  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Omnigest Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </header>

        <main>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card rounded-lg border p-6 shadow">
              <h2 className="mb-4 text-xl font-semibold">Welcome</h2>
              <p className="text-muted-foreground">
                This is your dashboard. You are now logged in.
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6 shadow">
              <h2 className="mb-4 text-xl font-semibold">Statistics</h2>
              <p className="text-muted-foreground">
                Your usage statistics will appear here.
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6 shadow">
              <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
              <p className="text-muted-foreground">
                Your recent activities will be displayed here.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
