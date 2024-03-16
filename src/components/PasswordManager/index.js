import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    passwordsList: [],
    isChecked: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredPassword = passwordsList.filter(each => each.id !== id)
    this.setState({
      passwordsList: filteredPassword,
    })
  }

  onChecked = () => {
    this.setState(prevState => {
      const {isChecked} = prevState
      return {
        isChecked: !isChecked,
      }
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      passwordsList,
    } = this.state

    let bottomPart
    if (passwordsList.length === 0) {
      bottomPart = (
        <div className='no-passwords-added-container'>
          <img
            src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png '
            alt='no passwords'
            className='no-passwords-img'
          />
          <p className='no-passwords-text'>No Passwords</p>
        </div>
      )
    } else {
      const {isChecked} = this.state
      bottomPart = (
        <ul className='password-items-container'>
          {passwordsList.map(eachPassword => (
            <PasswordItem
              key={eachPassword.id}
              passwordDetails={eachPassword}
              deletePassword={this.deletePassword}
              isChecked={isChecked}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className='app-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
          alt='app logo'
          className='app-logo-icon'
        />
        <div className='content-container-part1'>
          <div className='inputs-content-container'>
            <form className='form' onSubmit={this.onAddPassword}>
              <h1 className='add-new-ps-heading'>Add New Password</h1>
              <div className='input-image-value-container'>
                <div className='logo-container'>
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
                    alt='website'
                    className='logo'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Enter Website'
                  className='input-value'
                  onChange={this.onChangeWebsiteInput}
                  value={websiteInput}
                />
              </div>
              <div className='input-image-value-container'>
                <div className='logo-container'>
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
                    alt='username'
                    className='logo'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Enter Username'
                  className='input-value'
                  value={usernameInput}
                  onChange={this.onChangeUsernameInput}
                />
              </div>
              <div className='input-image-value-container'>
                <div className='logo-container'>
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
                    alt='password'
                    className='logo'
                  />
                </div>
                <input
                  type='password'
                  placeholder='Enter Password'
                  className='input-value'
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <button type='submit' className='add-button'>
                Add
              </button>
            </form>
          </div>
          <img
            src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
            alt='password manager'
            className='password-manager'
          />
        </div>
        <div className='content-container-part2'>
          <div className='password-heading-search-container'>
            <div className='password-heading-count-password-container'>
              <h1 className='your-passwords-heading'>Your Passwords</h1>
              <div className='count-password-container'>
                <p className='count-value'>{passwordsList.length}</p>
              </div>
            </div>
            <div className='search-icon-input-container'>
              <div className='search-icon-container'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
                  alt='search'
                  className='search-icon'
                />
              </div>
              <input
                type='search'
                placeholder='Search'
                className='search-input'
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className='hr-line' />
          <div className='checkbox-label-container'>
            <input
              type='checkbox'
              className='check-box'
              id='mycheckbox'
              onClick={this.onChecked}
            />
            <label htmlFor='mycheckbox' className='show-password-heading'>
              Show Passwords
            </label>
          </div>
          {bottomPart}
        </div>
      </div>
    )
  }
}

export default PasswordManager
