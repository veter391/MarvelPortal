import { useHttp } from "../hooks/http.hook";


const useMarvelService = () => {

    const { loading, request, error, clearError } = useHttp()

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    // personal api key
    const _apiKey = 'apikey=d0cba7230807643ac1c3837fafb40afd'

    // find all characters
    const getAllCharacters = async (num, offset) => {
        const res = await request(`${_apiBase}characters?limit=${num}&offset=${offset}&${_apiKey}`);

        // map return callback function to each element is the same => ''.map(item => _transformCharacter(item))''
        return res.data.results.map(_transformCharacter); 
    }

    // return character with uniq id
    const getCharacter = async id => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

        // return transformed element
        return _transformCharacter(res.data.results[0]);
    }

    // return character with uniq id
    const getCharacterByName = async name => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        // return transformed element
        return res.data.results.map(_transformCharacter);
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(
            `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
        );
        return res.data.results.map(_transformComics);
    };

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    };

    // if function or variable starts with '_' be careful with changes!! try to NOT CHANGE IT
    const _transformCharacter = (char) => {
        // transform and return new object and add this to state(obj)
        return {
            id: char.id,
            name: char.name,
            description: char.description ? char.description : 'Not info about this character !',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items.length === 0 ? [{name: 'Not comics about this character !'}] : char.comics.items.slice(0, 10)
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || "There is no description",
            pageCount: comics.pageCount
                ? `${comics.pageCount} p.`
                : "No information about the number of pages",
            thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
            language: comics.textObjects[0]?.language || "en-us",
            price: comics.prices[0].price
                ? `${comics.prices[0].price}$`
                : "not available",
        };
    };

    // return usable service variables
    return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, getCharacterByName }

}


export default useMarvelService;