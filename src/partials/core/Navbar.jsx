export default function Navbar() {
    return (
        <nav>
            <a href="/">
                <img
                    className="position-absolute top-50"
                    src="/pictures/sbk-navbar.png"
                    alt="SBK"
                />
            </a>
            <div className="position-absolute top-50 start-50 translate-middle d-flex">
                <a href="/mikrotik">mikrotik</a>
                <a href="#">learn basic</a>
                <a href="/member?gen=13">member</a>
                <a href="#">xtra</a>
            </div>
            <a href="#">
                <i className="fa-solid fa-cart-shopping position-absolute top-50 translate-middle-y"/>
            </a>
        </nav>

    )
}