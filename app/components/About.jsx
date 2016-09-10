import React, { Component } from 'react';

const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is the React Weather app from
        <em>'The Complete React web app developer course'</em>
      </p>
      <p>Some of the resources used were: </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
      <hr />
      <div>
        <p>A little Lorem Ipsum</p>
        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla eget quam vel lacus faucibus dignissim.
          Duis vel placerat turpis. Duis pellentesque aliquam elit,
          nec consectetur turpis blandit non. Nullam suscipit a ante eget porttitor.
          Sed accumsan faucibus justo non mollis. Nulla nec rutrum tortor.
          Aenean at magna ac nisl posuere vestibulum ut ac ex.
          Vestibulum non tortor euismod, malesuada lacus vel, accumsan ipsum.
          Ut egestas varius enim cursus maximus. Integer convallis et est at dictum.
        </blockquote>
      </div>
    </div>
  );
}

export default About;
