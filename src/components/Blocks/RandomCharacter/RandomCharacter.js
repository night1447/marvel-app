import RandomCharacterBlock from "./RandomCharacterBlock";
import RandomCharacterStatic from "./RandomCharacterStatic";
import {useEffect, useReducer, useState} from "react";
import MarvelService from "../../../services/MarvelService";
import Spinner from "../../UI/Spinner/Spinner";
import Error from "../../UI/Error/Error";

const marvelService = new MarvelService();

const characterReducer = (state, action) => {
    if (action.type === 'UPDATE_CHARACTER') {
        return {
                name: action.characterInfo.name,
                description: action.characterInfo.description,
                id: action.characterInfo.id,
                thumbnail: action.characterInfo.thumbnail,
                homepage: action.characterInfo.homepage,
                wiki: action.characterInfo.wiki,
                imageNotFoundIndex: action.characterInfo.imageNotFoundIndex,
        }
    }
};


const RandomCharacter = (props) => {
    const [character, dispatchCharacter] = useReducer(characterReducer, {
    });
    const [hasError, setHasError] = useState(false);
    const [hasLoading, setHasLoading] = useState(true);
    const loadRandomCharacter = () => {
        setHasLoading(true);
        setHasError(false);

        const id = Math.floor(Math.random() * (400) + 1011000);
        marvelService
            .getCharacterById(id)
            .then(character => {
                setHasError(false);
                setHasLoading(false);
                dispatchCharacter(
                    {
                        type: 'UPDATE_CHARACTER',
                        characterInfo: character,
                    });
            })
            .catch(error => setHasError(true));


    }
    useEffect(() => {
        loadRandomCharacter();
    }, []);

    const getRandomCharacterBlock = () => {
        if (hasError) {
            return <Error/>;
        }
        if (hasLoading) {
            return <Spinner/>;
        }
        return <RandomCharacterBlock characterInfo={character}/>
    }
    return (
        <section className={'randomchar'}>
            {getRandomCharacterBlock()}
            <RandomCharacterStatic onChangeCharacter={loadRandomCharacter}/>
        </section>
    )
}
export default RandomCharacter;