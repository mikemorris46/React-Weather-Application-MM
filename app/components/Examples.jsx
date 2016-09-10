import React, { Component } from 'react';
import { Link } from 'react-router';

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few locations to try out: </p>
      <ol>
        <li>
          <Link to="?location=Wanneroo, AU">Wanneroo, Western Australia</Link>
        </li>
        <li>
          <Link to="?location=Addlestone, UK">Addlestone, England</Link>
        </li>
      </ol>
    </div>
  );
}

export default Examples;
