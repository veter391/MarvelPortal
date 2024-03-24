import { Link } from 'react-router-dom';

import './singleComicPage.scss';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

const SingleComicLayout = ({ data }) => {
    const [loader, setLoader] = useState(false)

    const { title, description, pageCount, thumbnail, language, price } = data;


    useEffect(() => {
        const idIntt = setInterval(() => setLoader(loader => !loader), 1500);

        return () => {
            clearInterval(idIntt);
        };
    }, []);

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={description}
                />
                <title>
                    {title}
                    {loader ? ' 😇' : ' 😈'}
                </title>
            </Helmet>
            <img src={thumbnail} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicLayout;