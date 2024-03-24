import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';
import SearchCharForm from '../searchCharForm/SearchCharForm';

function CharInfo({ charId }) {

    const [char, setChar] = useState(null);

    const { loading, error, getCharacter, clearError } = useMarvelService(); // add service to variable and create instance of it

    useEffect(() => {
        updateChar();
    }, [charId]);

    const updateChar = () => {
        if(!charId) return;

        // every request clear errors
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
    }

    
    // change info when is loaded
    const onCharLoaded = char => {
        // change state.char and add new obj
        setChar(char);
    };

    const skeleton = char || loading || error ? null : <Skeleton/>,
    // if exist error return error
        errorMessage = error ? <ErrorMessage/> : null,
    // if wait info from server return spinner
        spinner = loading ? <Spinner/> : null,
    // if doesn't exist error and spinner is null return content
        content = !(loading || error || !char) ? <View char={char}/> : null

    return (
        <div>
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
            
            <SearchCharForm />
        </div>
    )
}

// add other components, breake the html and divide to differens components
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    let imgStyle = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: 'contain'} : null
    return (
        // <></> react fragment. if parent block unexists
        <>
        <div className="char__basics">
            <img src={thumbnail} style={imgStyle} alt="abyss"/>
            <div>
                <div className="char__info-name">{name}</div>
                <div className="char__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">

                {
                    comics.map((item, i) => {
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default CharInfo;