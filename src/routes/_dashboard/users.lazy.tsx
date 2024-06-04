import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_dashboard/users')({
  component: UsersRoute
})

function UsersRoute() {
  return <>Users</>
}
