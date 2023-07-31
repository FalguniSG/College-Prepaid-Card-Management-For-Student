
import { logout } from "@/lib/axios"
import { useRouter } from "next/router"


const Logout = () => {
  const router = useRouter()
  

  logout()
    .catch(error => {
      throw error
    })

  return (
    <>

      <div style={{ marginTop: "100px" }} className="text-center">Logging Out</div>

    </>
  )
}

export default Logout