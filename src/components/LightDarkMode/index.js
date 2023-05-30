// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onButtonClick = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="dark-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" onClick={this.onButtonClick} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
