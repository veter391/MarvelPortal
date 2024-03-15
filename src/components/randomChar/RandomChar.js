import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage'

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

function RandomChar() {

    useEffect(() => {
        // console.log('mount');
        updateChar();
    }, []);

    const [char, setChar] = useState({});

    // if want to work with a class you need to create an instance of it!!! 
    const {loading, error, getCharacter, clearError} = useMarvelService();

    // change info when is loaded
    const onCharLoaded = char => {
        // change state.char and add new obj
        setChar(char);
    };

    const updateChar = () => {
        // every request clear errors
        clearError();
        // generate random id for a char
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        // get character info and change the state
        getCharacter(id)
            // if info is loadded correctly
            .then(onCharLoaded)
            // ! all errors is checked inside service hook!
            // .catch(onError);
    }

    const
    // if exist error return error
        errorMessage = error ? <ErrorMessage/> : null,
    // if wait info from server return spinner
        spinner = loading ? <Spinner/> : null,
    // if doesn't exist error and spinner is null return content
        content = !(loading || error) ? <View char={char}/> : null

    return (
        <div className="randomchar">
            { errorMessage }
            { spinner }
            { content }
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner" onClick={updateChar}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

// create new componet with dinamic block, check it and generate spinner or info
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    const imgStyle = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: 'contain'} : null

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" style={imgStyle} className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {/* check if exist descr and if not add custom text */}
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;
