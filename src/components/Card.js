import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ news }) => {
    return (
        <div className='card'>
            <img src={news.urlToImage} width = '300' />
        <div className='card-body'>
            <h2>{`Source: ${news.source.name}`}</h2>
            <p>{`Description: ${news.description}`}</p>
        </div>
        {/* <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{`Distributor: ${movie.distributor}`}</li>
          <li className='list-group-item'>{`Amount: ${movie.amount}`}</li>
        </ul> */}
      </div>
    );
};


Card.propTypes = {
  news: PropTypes.shape({
    source: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
    }),
  }).isRequired,
};

export default Card;
