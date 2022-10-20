import "../../css/rsvp.css";
var React = require('react');

export default class Rsvp extends React.Component {

    render() {
        return (

            <div className="form-parent">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfDz2XgYWIbFXUewyKXeuxv4W6kuImk8L0qK7P2PK7fLMMsFg/viewform?embedded=true"
                    title="rsvp form"
                    width="640px"
                    height="1500px"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no">Loading…</iframe>
            </div>

        );
    }
}
