import {Link} from "react-router-dom";

const getComicId = (resourceURI) => {
    return resourceURI.lastIndexOf('/');
}
const ComicsList = (props) => {
    const getCheckedComics = (comics) => {
        if (props.comicList.length > 10) {
            return props.comicList.slice(0, 10);
        }
        return props.comicList;
    }
    return <ul className={'character__comics-list'}>
        {getCheckedComics(props.comicList).map(comic => <li className={'character__comics-item'} key={Math.random()}>
            <Link to={`comics/${comic.resourceURI.slice(getComicId(comic.resourceURI) + 1)}`}>{comic.name}</Link>
        </li>)}
    </ul>
}
export default ComicsList;