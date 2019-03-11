import React, { Component } from 'react';
import './chat.css';

import { connect } from "react-redux";

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
                                <input type="search" className="conversationSearchInput" placeholder="Search Messages" />
                            </div>
                            <div className="conversationListItem">
                                <img className="conversationPhoto" src="https://randomuser.me/api/portraits/men/73.jpg" alt="conversation" />
                                <div className="conversationInfo">
                                    <h1 className="conversationTitle">some peole</h1>
                                    <p className="conversationSnippet"> Hello world! This is a long message that</p>
                                </div>
                            </div>
                            <div className="conversationListItem">
                                <img className="conversationPhoto" src="https://randomuser.me/api/portraits/men/73.jpg" alt="conversation" />
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
                            <div className="messageListContainer">
                                <div className="time">Sunday, March 10, 2019 9:59 PM</div>
                            </div>
                            <div className="bubbleContainer">
                                <div className="bubble">
                                    Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.
                                </div>
                            </div>
                            <div className="chatText">
                                <input type="text" className="composeInput" placeholder="Type a message" />
                                <button type="submit" className="chatSend icon-paper-plane-empty"></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const connectedChat = connect(mapStateToProps)(Chat);
export default connectedChat;
