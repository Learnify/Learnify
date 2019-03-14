import React, { Component } from 'react';
import "./articles.css";
import { userService } from '../../redux/services/user-services';


class Articles extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getArticleData();
  }

  async getArticleData() {
    const articles = await userService.getAllArticles();
    console.log(articles);
    this.setState({
      articles
    });
  }

  render() {

    return (
      <div>
        {this.state.articles.length != 0 && this.state.articles.map(article => (
          <div key={article.id}>
            <div className="row articleContainer">
              <div className="col-sm-12 articleTitle">
                <h1>{article.title}</h1>
              </div>
              <div className="col-sm-8 articleContent">
                {article.body}
                <br /><a href={article.url}> Read More...</a>
              </div>
              <div className="col-sm-4">
                <div className="row">
                  <div className="col-sm-10 articleVisit">
                    Visit of this article: <button> {article.visits_count} </button>
                  </div>
                  <div className="col-sm-12 articleFooter">
                    Author : {`${article.user.name} ${article.user.last_name}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    );
  }
}

export default Articles;