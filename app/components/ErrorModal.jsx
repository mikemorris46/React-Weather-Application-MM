import React, { Component } from 'react';

class ErrorModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.message);
  };

  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  };

  render() {
    const {title, message} = this.props;

    return (
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
