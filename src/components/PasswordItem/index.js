import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, isChecked} = props
  const {website, username, password, id} = passwordDetails
  const websiteInitial = website[0]

  const onDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="website-initial-container">
        <p className="website-initial">{websiteInitial}</p>
      </div>
      <div className="password-inputs-content-container">
        <p className="website-input-text">{website}</p>
        <p className="username-input-text">{username}</p>
        {isChecked ? (
          <p className="password-text">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="password-starts"
          />
        )}
      </div>
      <button
        type="button"
        className="del-btn"
        data-testid="delete"
        onClick={onDeletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
