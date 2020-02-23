import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getData from '../../data/author-information';

export default class AuthorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    getData()
      .then((data) =>
        this.setState({
          authors: data
        })
      );
  };

  render() {
    const { authors } = this.state;
    return (
      <div className="authors-list">
        <h2 className="title title_bordered">List of authors</h2>
        {
          authors.length ? authors.map(({ id, avatar, photographerName, yearsOfLife, biography }) => (
            <Link to={`/person/${id}`} className="authors-list__author d-flex" key={id}>
              <div className="col-md-3 col-sm-12 text-center">
                <img src={avatar} alt="" />
              </div>
              <div className="col-md-9 col-sm-12">
                <h3>{photographerName}</h3>
                <h4 className="text-secondary">{yearsOfLife}</h4>
                <p>{biography}</p>
              </div>
            </Link>
          )) : null
        }
      </div>
    );
  }
}

