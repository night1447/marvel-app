import NavigationList from "./NavigationList";
import {routesNames} from "../../AppRouter/routes";

const infoItems = [
    {
        text: 'Character',
        link: routesNames.HOME,
    },
    {
        text: 'Comics',
        link: routesNames.COMICS
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