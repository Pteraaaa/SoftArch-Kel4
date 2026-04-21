import { FaShoppingCart, FaHistory, FaHeart } from "react-icons/fa";

export default function HeaderIcon({ icon }) {
    function renderIcon() {
        switch (icon) {
            case "cart":
                return <FaShoppingCart />
            case "history":
                return <FaHistory />
            case "heart":
                return <FaHeart />
            default:
                return null;
        }
    }

    return (
        <div className="header-icon">
            {renderIcon()}
        </div>

    );
}