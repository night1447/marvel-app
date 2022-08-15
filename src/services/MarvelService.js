import {useHttp} from "../hooks/http.hook";

const useMarvelService = () => {
    const {hasLoading, request, hasError, clearError} = useHttp();
    const apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const apiKey = 'apikey=44443af08b0223b4c9500dae06b84ef8';
    const baseOffset = '210';
    const getAllCharacters = async (offset = baseOffset) => {
        const result = await request(`${apiBase}characters?limit=9&offset=${offset}&${apiKey}`);
        return result.data.results.map(transformCharacter)
    }
    const getCharacterById = async (id) => {
        const result = await request(`${apiBase}characters/${id}?${apiKey}`);
        return transformCharacter(result.data.results[0]);
    }
    const getComics = async (offset = baseOffset) => {
        const result = await request(`${apiBase}comics?limit=8&offset=${offset}&${apiKey}`);
        return result.data.results.map(transformComic);
    }
    const getComicById = async (id) => {
        const result = await request(`${apiBase}comics/${id}?${apiKey}`);
        return transformComic(result.data.results[0]);
    }
    const transformComic = (comic) => {

        return {
            id: comic.id,
            name: comic.title,
            price: comic.prices[0].price?`$${comic.prices[0].price}` : 'Not available',
            thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            countPages: comic.pageCount,
            description: comic.description || 'Description is missing',
            language: comic.textObjects.length === 0 ? 'Language is not defined' : comic.textObjects[0].language,
            imageNotFoundIndex: `${comic.thumbnail.path}`.lastIndexOf('not_available'),
        }
    }
    const transformCharacter = (character) => {
        return {
            name: character.name,
            description: character.description || 'Данных об этом персонаже нет.',
            id: character.id,
            thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items,
            imageNotFoundIndex: `${character.thumbnail.path}`.lastIndexOf('not_available')
        }
    }
    return {hasLoading, hasError, getAllCharacters, getCharacterById, getComics, getComicById, clearError}
}

export default useMarvelService;