import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <footer>
        <div className="Container">
          © Copyright GetBamboo {new Date().getFullYear()}
        </div>
      </footer>
    )
  }
}

export default Footer



