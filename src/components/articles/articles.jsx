import React, { Component } from 'react';
import "./articles.css";
import { userService } from '../../redux/services/user-services';


class Articles extends Component {

  // constructor(){
  //   super();
  //   this.state ={
  //     article:{ 0 : "No hay articulos"}
  //   }
  // }

  // componentDidMount(){
  //   this.getArticleData();
  // }

  // async getArticleData(){
  //   console.log("hello",this.props);
  //   // const articleList = await userService.getArticle(this.props.match.params.seartTerm);
  //   // this.setState({
  //   //   articles: {
  //   //     ...articleList
  //   //   }
  //   // });
  //   // console.log("SetState",this.state);
  // }

  render() {

    return (
      <div className="row articleContainer">
        <div className="col-sm-12 articleTitle">
          <h1>This is a title</h1>
        </div>
        <div className="col-sm-8 articleContent">
          The cool century treks over the lavatory. The wanting fascist orders the startling hand. When will the young rule? Each situate inheritance triumphs throughout the constraint.
          <br/><a href=""> Read More...</a>
        </div>
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-10 articleVisit">
              Visit of this article: <button> 0 </button>
            </div>
            <div className="col-sm-12 articleFooter">
              Author :
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;