import { Navigate, Route, Routes } from "react-router"
import LoginPage from "../pages/auth/login"
import Dashboard from "../pages/dashboard"
import routes from "./routes"

export default function Router() {
  return (
    <Routes>
      <Route
        path={routes.app.root}
        element={<Navigate to={routes.auth.login} replace />}
      />
      <Route path={routes.auth.login} element={<LoginPage />} />
      <Route path={routes.app.dashboard} element={<Dashboard />} />
    </Routes>
  )
}
