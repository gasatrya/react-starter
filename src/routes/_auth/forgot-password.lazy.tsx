import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/forgot-password')({
  component: ForgotPasswordRoute
})

function ForgotPasswordRoute() {
  return <>Forgot Password</>
}
