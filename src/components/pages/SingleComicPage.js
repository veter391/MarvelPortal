import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleComicPage.scss';

const SingleComic = () => {
    const { comicId } = useParams();
    const [ comic, setComic ] = useState(null);
    const { loading, error, getComic, clearError } = useMarvelService(); // add service to variable and create instance of it

    useEffect(() => {
        updateComic();
    }, [comicId]);

    const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
    }

    // change info when is loaded
    const onComicLoaded = comic => {
        // change state.char and add new obj
        setComic(comic);
    };


    const
        // if exist error return error
        errorMessage = error ? <ErrorMessage /> : null,
        // if wait info from server return spinner
        spinner = loading ? <Spinner /> : null,
        // if doesn't exist error and spinner is null return content
        content = !(loading || error || !comic) ? <View comic={comic} /> : null

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to='/comics' className="single-comic__back">Back to all</Link>
        </div>
    );
}

export default SingleComic;