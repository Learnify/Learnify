import React, { Component } from 'react';
import './chat.css';

class Chat extends Component {
    render() {
        return (
            <div>
                <div className="row chatWindow">
                    <div className="col-sm-4 chatList">
                        <div className="chatTitle">
                            <h1>Messenger</h1>
                        </div>
                        <div className="chatContent" id="left">
                            asdfoasdf
                        </div>
                    </div>
                    <div className="col-sm-8 chatMessage">
                        <div className="chatTitle">
                            <h1>Conversation Title</h1>
                        </div>
                        <div className="chatContent" id="right">
                            somethisn

                            <div className="chatText">
                                <input type="text" className="composeInput" placeholder="Type a message"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Chat;