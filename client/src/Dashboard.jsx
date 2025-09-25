import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./dashboard.css" // import the CSS

const Dashboard = () => {
  const [suc, setSuc] = useState("")
  const navigate = useNavigate()

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard")
      .then((res) => {
        if (res.data === "Success") {
          setSuc("✅ Successfully Logged in as Admin")
        } else {
          navigate("/login")
        }
      })
      .catch((err) => console.log(err))
  }, [navigate])

  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <h1 className="welcome-title">👑 Welcome, Admin!</h1>
        <p className="welcome-subtitle">
          You have full access to manage users, view analytics, and control
          settings.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
