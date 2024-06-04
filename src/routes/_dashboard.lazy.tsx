import { Outlet, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_dashboard')({
  component: DashboardLayout
})

function DashboardLayout() {
  return (
    <div className="antialiased">
      <Outlet />
    </div>
  )
}
