import React from 'react';

const { PropTypes, createClass } = React;

export default createClass({
  displayName: "Typography",

  render() {
    return (
      <section>
        <article className="mb3">
          <h3>Headings</h3>

          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
        </article>

        <article className="mb3">
          <h3>Paragraph</h3>

          <p>A normal paragraph of text.</p>
          <p><small>A small paragraph of text.</small></p>
          <p className="bold">A bold paragraph using the .bold class.</p>
          <p className="italic">An italic paragraph using the .italic class.</p>
          <p className="left-align">A left aligned paragraph using the .left-align class.</p>
          <p className="center">A center aligned paragraph using the .center class.</p>
          <p className="right-align">A right aligned paragraph using the .right-align class.</p>
          <p className="justify">A justify aligned paragraph using the .justify class.</p>
          <p className="nowrap">This paragraph won't wrap because it's using the .nowrap class.</p>
        </article>

        <article>
          <h3>hr</h3>
          <hr />
        </article>
      </section>
    );
  }
});
