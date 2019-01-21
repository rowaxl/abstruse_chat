import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = { message: '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.message);
    }

    render() {
        return (
            <div className="ui segment" style={{ bottom: "5%", width: "80vw" }}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Input Message</label>
                        <input type="text"
                            onChange={ e => this.setState({ message: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default InputForm;