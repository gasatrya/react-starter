import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/register')({
  component: RegisterRoute
})

function RegisterRoute() {
  return <>Register</>
}
