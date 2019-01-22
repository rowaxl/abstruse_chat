import React from 'react';
import InputForm from './InputForm';

class App extends React.Component {
    state = { messages: [] }

    onMessageSubmit = (text) => {
        const newMessage = <li key={this.state.messages.length}>{text}</li>;
        const log = this.state.messages;

        log.push(newMessage);
        console.log('text', text);
        console.log('log', log );
        this.setState({ messages: log })
    }

    render() {
        return (
            <div style={{ width:"80vw", margin:"auto" }}>
                <div>Chat area</div>
                <div className="ui container" style={{ height: "80vh", position: "absolute", top: "5%" }}>
                    {this.state.messages}
                </div>
                <InputForm onSubmit={this.onMessageSubmit}/>
            </div>
        )
    }
}

export default App;
