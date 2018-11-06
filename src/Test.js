import React, { Component } from 'react';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const ans = await (await fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })).json();
    this.setState({
      data: ans
    });
  }
  render() {
    return (
      <div >
        Show
      </div>
    );
  }
}

export default Test;
