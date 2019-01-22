import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = { message: '' };

    onChange = event => {
        console.log(this.state);
        this.setState({ message: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({ message: "" });
    }

    render() {
        return (
            <div className="ui segment" style={{ position:"absolute", bottom: "5%", width: "80vw" }}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Input Message</label>
                        <input type="text"
                            value={this.state.message}
                            onChange={this.onChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default InputForm;