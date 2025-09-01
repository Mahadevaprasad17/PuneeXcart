import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
    return (
        <nav className="nav">
            <Link to="/" className="logo">PuneeXcart</Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <div className="cart">
                    <svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                    <span>{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}
