import {useParams} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../UI/Spinner/Spinner";
import {useEffect, useState} from "react";
import Error from "../UI/Error/Error";

const SingleComicPage = () => {
    const {comicId} = useParams();

    const [comic, setComic] = useState({});
    const {hasLoading, hasError, getComicById} = useMarvelService();
    const navigation = useNavigate();

    useEffect(() => {
        const loadComic = () => {
            getComicById(comicId).then(comic => {
                setComic(comic)
            });
        };
        loadComic();
    }, [comicId, getComicById]);

    const pageBackHandler = () => {
        navigation(-1);
    };

    return (
        hasError ? <Error/> :
            hasLoading ? <Spinner/> :
                <section className="single-comic">
                    <img src={comic.thumbnail} alt={comic.name} className="single-comic__img"/>
                    <div className="single-comic__info">
                        <h2 className="single-comic__name">{comic.name}</h2>
                        <p className="single-comic__descr">{comic.description}</p>
                        <p className="single-comic__descr">Count pages: {comic.countPages}</p>
                        <p className="single-comic__descr">Language: {comic.language}</p>
                        <div className="single-comic__price">{comic.price}</div>
                    </div>
                    <Link to="#" onClick={pageBackHandler} className="single-comic__back">Back to all</Link>
                </section>);
}
export default SingleComicPage;