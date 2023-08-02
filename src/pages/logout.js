import { useUser } from "@/hooks/user"
import { logout } from "@/lib/axios"
import { useRouter } from "next/router"
import { useEffect } from "react"


const Logout = () => {
  const router = useRouter()
  const { data: user, mutate } = useUser({ middleware: "auth" })

  useEffect(() => {
    if (user) {
      (async () => {
        return await logout(mutate)
          .catch(error => {
            throw error
          })

      })()
    }
  }, [user, mutate])


  return (
    <>

      <div style={{ marginTop: "100px" }} className="text-center">Logging Out</div>

    </>
  )
}

export default Logout