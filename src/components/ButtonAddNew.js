import React from 'react';
import { Link } from 'react-router-dom';

export default class ButtonAddNew extends React.PureComponent {

  render() { return (
    <div className="fixed-bottom text-right">
      <Link to="/new" className="btn-circle add">+</Link>
    </div>
  ); }

}
