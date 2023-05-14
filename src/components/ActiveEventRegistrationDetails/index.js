// Write your code here
import './index.css'
import {Component} from 'react'

class ActiveRegistrations extends Component {
  registerdrender = () => (
    <div className="ram">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="done"
      />
      <h1 className="success">You Have Already Registered For the Event</h1>
    </div>
  )

  closed = () => (
    <div className="closed">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="done"
      />
      <h1 className="success">Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen</p>
    </div>
  )

  Notyet = () => (
    <div className="closed">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="done"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance
      </p>
      <div className="but">
        <button className="button" type="button">
          Register Here
        </button>
      </div>
    </div>
  )

  render() {
    const {item} = this.props
    const {registrationStatus} = item
    switch (registrationStatus) {
      case 'REGISTERED':
        return this.registerdrender()
      case 'REGISTRATIONS_CLOSED':
        return this.closed()
      default:
        return this.Notyet()
    }
  }
}
export default ActiveRegistrations
