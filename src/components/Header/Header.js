import Navigation from "./Navigation/Navigation";

const Header = (props) => {
    return (
        <header className={'header'}>
            <a href="#" className={'header__main-href'}><span>Marvel</span> information portal</a>
            <Navigation/>
        </header>
    )
}
export default Header;
