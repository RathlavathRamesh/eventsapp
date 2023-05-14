// Write your code here
import './index.css'
import {Component} from 'react'

class EventItem extends Component {
  render() {
    const {info, fun} = this.props
    const {imageUrl, location, name, id} = info
    const showDetails = () => {
      fun(id)
    }
    return (
      <li className="item" onClick={showDetails}>
        <button type="button">
          <img src={imageUrl} alt="event" className="image" />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    )
  }
}
export default EventItem
