/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import './Home.scss';
import AuthorsList from './AuthorsList.jsx';
// import { dataText } from '../../data/dataText.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lang } = this.props;
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title title_bordered">About Portal</h2>
              <div className="text-block">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque, illum, quasi iusto aut impedit ab ducimus aperiam perspiciatis blanditiis animi inventore veritatis dolorum quos? Distinctio quos voluptate harum mollitia?</p>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure exercitationem, quis laudantium fugit adipisci minus aspernatur! Ab nihil ipsam eligendi itaque incidunt pariatur, inventore odit minus, velit ad totam corrupti. Consectetur eveniet, consequatur id ipsum deserunt nisi autem amet ex, velit aperiam ratione pariatur, odio sit error optio! Quaerat ullam quia soluta mollitia, voluptates veniam reprehenderit esse magnam? Vel, suscipit? Incidunt cum assumenda, facere ea amet, voluptas ipsam unde, corrupti quas nobis nostrum. Error fugiat quasi delectus quos vitae. Blanditiis consequuntur tenetur facilis animi earum deleniti modi qui, nisi ea?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum iure tenetur minus! Nisi quam repudiandae voluptates quaerat, sequi ipsa nostrum voluptate praesentium distinctio nesciunt iure, tempore esse porro modi!Corporis, ut explicabo assumenda quibusdam sed ab aspernatur beatae enim rem laboriosam voluptatibus officia totam unde, voluptate animi ipsa vel officiis quae ea a facere. Perspiciatis omnis quae incidunt laudantium?</p>
              </div>
              <AuthorsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
