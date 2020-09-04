import { useMeQuery } from "../generated/graphql"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const useIsAuth = () => {
  // custom hook to check if user is logged in
  const [{ data, fetching }] = useMeQuery()
  const router = useRouter()

  useEffect(() => {
    if (!fetching && !data?.me) {
      router.replace("/login")
    }
  }, [data, router])
}
