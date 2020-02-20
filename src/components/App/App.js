import React, { Component } from 'react';
import GetPhotographersData from '../../data/author-information';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographersData: [],
    };
  }

  componentDidMount() {
    const service = new GetPhotographersData();
    service.getData()
      .then((res) => {
        this.setState({
          photographersData: res,
        });
      });
  }

  render() {
    return (
      <div>
        Culture portal
      </div>
    );
  }
}
