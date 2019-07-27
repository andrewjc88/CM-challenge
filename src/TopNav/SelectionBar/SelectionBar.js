import React, { Component } from 'react';
import './SelectionBar.css';

class SelectionBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.updateBarPosition();
    window.addEventListener("resize", () => this.updateBarPosition());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateBarPosition());
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedCity !== prevProps.selectedCity) {
      this.updateBarPosition();
    }
  }

  updateBarPosition() {
    const { selectedCity } = this.props;
    const selectedElm = document.getElementById(`nav-itm-${selectedCity}`);
    if (selectedElm) {
      const selectedNavData = selectedElm.getBoundingClientRect();
      this.setState({
        barLeft: selectedNavData.left,
        width: selectedNavData.width
      })
    } else {
      this.forceUpdate()
    }
  }

  render() {
    const { barLeft, width } = this.state;
    return (
      <div className="selection-bar">
        <div 
          className="selector"
          style={{
            "left": `calc(${barLeft}px - 2.2rem)`,
            "width": `calc(${width}px - 1.8rem)`
          }}
        />
      </div>
    )
  }
}

export default SelectionBar;