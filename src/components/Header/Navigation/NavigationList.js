import {NavLink} from "react-router-dom";

const NavigationList = (props) => {
    return (
        <ul className={'navigation__list'}>{
            props.infoItems.map(infoItem => <li className={'navigation__item'} key={infoItem.text}>
                <NavLink to={infoItem.link}>{infoItem.text}</NavLink>
            </li>)
        }</ul>
    )
}
export default NavigationList;