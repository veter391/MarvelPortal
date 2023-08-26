import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage'

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component{

    constructor(props) {
        super(props);
        // this.updateChar(); // is bad desition! is owerflows the memory!! you can use the react huks!
        // console.log('constructor')
    }

    // basik huks
    // componentDidMount() => run once after the rendering
    // componentDidUpdate() => update component
    // componentWillUnmount() => if component dead clear all nodes, timouts, etc.. from componentDidMount()
    // componentDidCatch() => if error

    componentDidMount() {
        // console.log('mount');
        this.updateChar();
    }

    state = {
        // create object char because state can be other info, errors, spinner etc...
        // create object char with info about character
        char: {},
        loading: true,
        error: false
    }

    // if want to work with a class you need to create an instance of it!!! 
    marvelService = new MarvelService();

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

    updateChar = () => {
        // generate random id for a char
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        // get character info and change the state
        this.marvelService
            .getCharacter(id)
            /* 
            .then(this.onCharLoaded) is the same .then(res => this.setState(res))
            if you call a function this function works with all elements in turn
            */
           
            
            // if info is loadded correctly
            .then(this.onCharLoaded)
            // if server return error
            .catch(this.onError);
    }

    render() {
        // console.log('render');
        /* 
        destructuritzation of object char inside state.
        const {char: {name, description, thumbnail, homepage, wiki}, loading} = this.state;
        */


        // get ellements from state
        const {char, loading, error} = this.state,
        // if exist error return error
            errorMessage = error ? <ErrorMessage/> : null,
        // if wait info from server return spinner
            spinner = loading ? <Spinner/> : null,
        // if doesn't exist error and spinner is null return content
            content = !(loading || error) ? <View char={char}/> : null

        return (
            <div className="randomchar">
                {/* if loading true return animated spinner */}
                {/* {loading ? <Spinner/> : <View char={char}/>} */}
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
                        <div className="inner" onClick={this.updateChar}>try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

// create new componet with dinamic block, check it and generate spinner or info
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    const style = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: 'contain'} : null

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" style={style} className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {/* check if exist descr and if not add custom text */}
                    {description ? description : 'Not info about this character !'}
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
