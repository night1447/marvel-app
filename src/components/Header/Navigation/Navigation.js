import NavigationList from "./NavigationList";

const infoItems = [
    {
        text: 'Character',
        link: '#'
    },
    {
        text: 'Comics',
        link: '#'
    },
]
const Navigation = (props) => {
    return (
        <nav className={'navigation'}>
            <NavigationList infoItems={infoItems}/>
        </nav>
    )
}
export default Navigation;