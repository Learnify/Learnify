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
                            <div className="conversationSearch">
                                <input type="search" className="conversationSearchInput" placeholder="Search Messages"/>
                            </div>
                            <div className="conversationListItem">
                                <img class="conversationPhoto" src="https://randomuser.me/api/portraits/men/73.jpg" alt="conversation"/>
                                <div className="conversationInfo">
                                    <h1 className="conversationTitle">some peole</h1>
                                    <p className="conversationSnippet"> Hello world! This is a long message that</p>
                                </div>
                            </div>
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
                                <button type="submit" className="chatSend icon-paper-plane-empty"></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Chat;