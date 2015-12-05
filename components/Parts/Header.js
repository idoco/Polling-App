var React = require('react');

var Header = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render() {
        return (
            <header>
                <div>
                <span>
                    <h1 id="title"> {this.props.title} </h1>
                    {this.props.status == 'connected' ?
                        <div id="green_circle"></div> :
                        <div id="red_circle"></div> }
                </span>
                </div>
                <p>{this.props.speaker}</p>
            </header>
        );
    }
});

module.exports = Header;