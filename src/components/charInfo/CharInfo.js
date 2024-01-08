import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';

class CharInfo extends Component {

    
    state = {
        // create object char because state can be other info, errors, spinner etc...
        // create object char with info about character
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService(); // add service to variable and create instance of it

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevStates) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar = () => {
        const {charId} = this.props;
        if(!charId) {
            return;
        }


        // show the spinner
        this.setState({loading : true});

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    
    // change info when is loaded
    onCharLoaded = char => this.setState({
        // change state.char and add new obj
        char, 
        // change loading state when char is loaded
        loading: false
    });

    onError = () => {
        this.setState({
            // change loading state when char is loaded
            loading: false,
            error: true
        })
    }

    render() {

        // get ellements from state
        const {char, loading, error} = this.state,

            skeleton = char || loading || error ? null : <Skeleton/>,
        // if exist error return error
            errorMessage = error ? <ErrorMessage/> : null,
        // if wait info from server return spinner
            spinner = loading ? <Spinner/> : null,
        // if doesn't exist error and spinner is null return content
            content = !(loading || error || !char) ? <View char={char}/> : null

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
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