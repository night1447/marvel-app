const NavigationList = (props) => {
    return (
        <ul className={'navigation__list'}>{
            props.infoItems.map(infoItem => <li className={'navigation__item'} key={infoItem.text}><a href={infoItem.link}>{infoItem.text}</a></li>)
        }</ul>
    )
}
export default NavigationList;