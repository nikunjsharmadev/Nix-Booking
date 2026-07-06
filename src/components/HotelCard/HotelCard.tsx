import "./HotelCard.css";
import type { Hotel } from "../../data/hotels";
import { Link } from "react-router-dom";
interface Props {
  hotel: Hotel;
}
function HotelCard({ hotel }: Props) {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p className="city">{hotel.city}</p>
        <p className="desc">{hotel.description}</p>
        <div className="bottom">
          <span className="price">${hotel.price}/night</span>
          <span className="rating">⭐ {hotel.rating}</span>
        </div>
        <Link to={`/hotel/${hotel.id}`} className="book-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}
export default HotelCard;
