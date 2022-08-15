import RandomCharacterBlock from "./RandomCharacterBlock";
import RandomCharacterStatic from "./RandomCharacterStatic";
import {useEffect, useState} from "react";
import Spinner from "../../UI/Spinner/Spinner";
import Error from "../../UI/Error/Error";
import useMarvelService from "../../../services/MarvelService";


const RandomCharacter = () => {
    const [character, setCharacter] = useState({}
    );
    const {hasError, hasLoading, getCharacterById, clearError} = useMarvelService();

    const loadRandomCharacter = () => {
        clearError();
        const id = Math.floor(Math.random() * (400) + 1011000);
        getCharacterById(id)
            .then(character => {
                clearError();
                setCharacter(character);
            })
    }
    useEffect(() => {
        loadRandomCharacter();
    }, []);
    useEffect(()=> {
        const interval = setInterval(() => {
            loadRandomCharacter()
        }, 15000);
        return () => {
            clearInterval(interval);
        }
    },[character])

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