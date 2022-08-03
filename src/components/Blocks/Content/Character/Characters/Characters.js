import {Fragment, useEffect, useState} from "react";
import MarvelService from "../../../../../services/MarvelService";
import Spinner from "../../../../UI/Spinner/Spinner";
import Error from "../../../../UI/Error/Error";

const marvelService = new MarvelService();

const Characters = (props) => {
    const [characters, setCharacters] = useState([]);
    const [hasLoading, setHasLoading] = useState(true);
    const [hasItemLoading, setHasItemLoading] = useState(false);
    const [charactersEnded, setCharactersEnded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [offset, setOffset] = useState(210);

    const onRequest = (offset) => {
        marvelService.getAllCharacters(offset).then(items => {
            if (items.length === 0) {
                setCharactersEnded(true);
                return;
            }
            setHasError(false);
            setHasItemLoading(false);
            setHasLoading(false);
            setCharacters(prevState => [...prevState, ...items])
        }).catch(error => {
            setHasError(true);
        })
    }
    useEffect(() => {
        setOffset(prevState => prevState + Math.floor(Math.random() * 101))
        onRequest();
    }, []);

    const selectCharacterHandler = (event) => {
        if (event.target.closest('.character__item')) {
            const id = event.target.closest('.character__item').id;
            props.onChangeSelectedItem(id);
            document.getElementById(`${id}`).classList.add('character__item-selected');
        }
    };

    const loadMoreCharactersHandler = () => {
        setOffset(prevState => prevState + 9)
        setHasItemLoading(true);
        onRequest(offset);
    };
    const getContent = () => {
        if (hasError) {
            return <Error/>;
        }
        if (hasLoading) {
            return <Spinner/>
        }
        return <Fragment>
            <ul className={'character__list'} onClick={selectCharacterHandler}>
                {characters.map(character => <li className={`${'character__item'}`} id={character.id}
                                                 key={character.id}>
                    <img src={character.thumbnail} alt={character.name} className={'character__image'}/>
                    <p className={'character__name'}>
                        {character.name}
                    </p>
                </li>)}
            </ul>

            <button className={`button button__main button__long ${charactersEnded ? 'button__off' : ''}`}
                    disabled={hasItemLoading} type={'button'}
                    onClick={loadMoreCharactersHandler}>
                <div className={'inner'}>Load more</div>
            </button>

        </Fragment>
    }

    return (
        getContent()
    )
}
export default Characters;