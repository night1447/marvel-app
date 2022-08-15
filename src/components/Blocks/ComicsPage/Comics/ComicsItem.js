import {Link} from "react-router-dom";

const ComicsItem = (props) => {
    return (
        <li className={'comics__item'} key={props.comic.id}>
            <Link to={`/comics/${props.comic.id}`}>
                <div className={'comics__image-wrapper'}><img src={props.comic.thumbnail} alt={props.comic.name}
                                                              className={`comics__image ${props.comic.imageNotFoundIndex !== -1 ? 'comics__fill-image' : ''}`}/>
                </div>
                <p className={'comics__name'}>{props.comic.name}</p>
                <p className={'comics__price'}>{props.comic.price}</p></Link>
        </li>
    )
}
export default ComicsItem;