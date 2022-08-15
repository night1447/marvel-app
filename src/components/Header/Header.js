import Navigation from "./Navigation/Navigation";

const Header = (props) => {
    return (
        <header className={'header'}>
            <p className={'header__main-href'}><span>Marvel</span> information portal</p>
            <Navigation/>
        </header>
    )
}
export default Header;
