import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    isSubmitted: false,
    usernameErr: false,
    passwordErr: false,
  }

  changeUsername = event =>
    this.setState({username: event.target.value, usernameErr: false})

  changepassword = event =>
    this.setState({password: event.target.value, passwordErr: false})

  checkNameErr = () => {
    const {username} = this.state
    if (username === '') {
      this.setState({usernameErr: true})
    }
  }

  checkPassErr = () => {
    const {password} = this.state
    if (password === '') {
      this.setState({passwordErr: true})
    }
  }

  needForm = () =>
    this.setState({
      username: '',
      password: '',
      isSubmitted: false,
      usernameErr: false,
      passwordErr: false,
    })

  submit = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username !== '' && password !== '') {
      this.setState({isSubmitted: true})
    } else {
      this.checkNameErr()
      this.checkPassErr()
    }
  }

  render() {
    const {     username,     password,    isSubmitted,    usernameErr,    passwordErr} = this.state
    return (
      <div className="container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? (
          <div className="sub-container sub">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-icon"
            />
            <p className="description">Submitted Successfully</p>
            <button className="button" onClick={this.needForm}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="sub-container" onSubmit={this.submit}>
            <label className="label" htmlFor="user-name">
              FIRST NAME
            </label>
            <input
              className={`input ${usernameErr && 'red'}`}
              placeholder="First Name"
              id="user-name"
              value={username}
              onChange={this.changeUsername}
              onBlur={this.checkNameErr}
              type="text"
            />
            {usernameErr && <p className="error-text">Required</p>}

            <label className="label" htmlFor="pass-word">
              LAST NAME
            </label>
            <input
              className={`input ${passwordErr && 'red'}`}
              placeholder="Last Name"
              id="pass-word"
              value={password}
              onChange={this.changepassword}
              onBlur={this.checkPassErr}
              type="text"
            />
            {passwordErr && <p className="error-text">Required</p>}
            <div>
            <div className="btn-con">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
