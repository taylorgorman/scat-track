import React from 'react';
import { Link } from 'react-router-dom';

export default class ButtonClose extends React.PureComponent {

  render() { return (
    <div className="fixed-top text-right">
      <Link to="/" className="btn-circle close">+</Link>
    </div>
  ); }

}
