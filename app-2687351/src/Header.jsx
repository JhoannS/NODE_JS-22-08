const Header = () => {
    return (
        <header>
            
            <div className="lista">
                <img src="../logo.webp" alt="" />
                <a href="#">MENU</a>
                <a href="#">CAFE</a>
                <a href="#">NOVEDADES</a>
            </div>
            <div className="localizar">
                <i class="fa-solid fa-location-dot"></i>
                <span>Localizar tienda</span>
            </div>
        </header>
    );
}

export default Header