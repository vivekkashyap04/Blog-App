import React from 'react';
class ArticleList extends React.Component {
  state = {
    article: null,
  };
  componentDidMount() {
    fetch('https://mighty-oasis-08080.herokuapp.com/api/articles')
      .then((res) => res.json())
      .then(({ articles }) => {
        this.setState({
          article: articles,
        });
      });
  }
  render() {
    console.log(this.state.article);
    if (!this.state.article) {
      return <h1>loadiing...</h1>;
    }
    return (
      <div>
        {this.state.article.map((post) => {
            if(post.title){
                return (
                    <div
                      key={post.slug}
                      className="bg-green-500 flex justify-between flex-col mb-10 w-full p-4 rounded-md shadow-md"
                    >
                      <div className="flex">
                        <img
                          src={post.author.image}
                          alt={post.image}
                          className="w-14 h-14 rounded-full object-cover mr-5"
                        />
                        <h2 className="mt-3">{post.author.username}</h2>
                        <span className="mt-5">{post.createdAt}</span>
                      </div>
                      <h3 className="text-2xl">{post.title}</h3>
                      <p>{post.description}</p>
                      <ul className="flex">
                        {post.tagList.map((tag) => {
                          return <li className="mr-5">{tag}</li>;
                        })}
                      </ul>
                    </div>
                  );
            }
         
        })}
      </div>
    );
  }
}

export default ArticleList;
