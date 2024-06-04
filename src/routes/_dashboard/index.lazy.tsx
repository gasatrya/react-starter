import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_dashboard/')({
  component: IndexRoute
})

function IndexRoute() {
  return <>Dashboard</>
}
