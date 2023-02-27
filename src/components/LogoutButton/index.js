// Write your JS code here

const LogoutButton = props => {
  const {logoutUser} = props

  const clickedLogout = () => {
    logoutUser()
  }

  return (
    <div>
      <button type="button" onClick={clickedLogout}>
        Logout
      </button>
    </div>
  )
}
export default LogoutButton
