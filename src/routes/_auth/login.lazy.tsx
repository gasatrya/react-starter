import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/login')({
  component: LoginRoute
})

function LoginRoute() {
  return <>Login</>
}
