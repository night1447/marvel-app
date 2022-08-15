import ComicsItem from "./ComicsItem";

const ComicsListPage = (props) => {

    return <ul className={'comics__list'}>
        {props.comics.map(item => <ComicsItem comic={item} key={item.id}/>)}
    </ul>
}
export default ComicsListPage;