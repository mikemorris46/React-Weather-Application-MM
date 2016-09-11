import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const {title, message} = this.props;

    const modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  };

  render() {
    return (
      <div></div>
    );
  }
};

ErrorModal.defaultProps = {
  title: 'Error'
};

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};

export default ErrorModal;
