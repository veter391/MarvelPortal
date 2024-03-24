import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryStringToObject from "../../helpers/queryStringtoObject";
import AppBanner from "../appBanner/AppBanner";

// const [searchParams, setSearchParams] = useSearchParams();
// searchParams.get("__firebase_request_key")

function SingleCharacter() {
    const { search } = useLocation();
    const [query, setQuery] = useState(null);

    useEffect(() => {
        setQuery({...queryStringToObject(search, { name: '', description: '', thumbnail: '' })})
    }, [search])

    const content = query ? <View character={query} /> : null

    return (
        <>
            {content}
        </>
    )
}


const View = ({ character }) => {
    const { name, description, thumbnail } = character;

    return (
        <>
            <AppBanner />
            <div className="single-character">
                <img src={thumbnail} alt={name} className="single-character__img" />
                <div className="single-character__info">
                    <h2 className="single-comic__name single-character__name">{name}</h2>
                    <p className="single-comic__descr single-character__descr">{description}</p>
                    <Link to='/characters' className="single-comic__back single-character__back">Back to all</Link>
                </div>
            </div>
        </>
    );
}

export default SingleCharacter;