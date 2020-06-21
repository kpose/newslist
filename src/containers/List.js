import React, { Component } from 'react';
import Card from '../components/Card';


class List extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c2674b898ed049bdae0cbb9edbfc9ec5');
    const newsJSON = await response.json();
    console.log(newsJSON.articles);
    this.setState({
      data: newsJSON.articles,
      loading: false
    })

  } 

  render() {
    const {data, loading} = this.state;
    

    if (loading) {
      return <div>Loading....</div>
    }
    return(
      <div class='row'>
        {data.map(news => 
      <div class = 'col-sm-2'>
         <Card key ={ news.id } news ={news} />
      </div>
      )}
      </div>
    )
  }
}

export default List;