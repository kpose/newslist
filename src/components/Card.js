import React from 'react';

const Card = ({ news }) => {
    return (
        <div>
            {/* <h2> {`#${news.ranking} --{news.title} (${news.year})`}</h2> */}
            <img src={news.urlToImage} width = '400' />
            <p>{`Author: ${news.author}`}</p>
            <p>{`Description: ${news.description}`}</p>
        </div>
    )
}

export default Card;