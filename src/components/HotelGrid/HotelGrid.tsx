// version 2
import { useCallback, useRef, useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import HotelCard from "../HotelCard/HotelCard";
import { getHotels } from "../../api/hotelApi";
import { hotels } from "../../data/hotels";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import HotelSkeleton from "../Skeleton/HotelSkeleton";
import "./HotelGrid.css";
import useDebounce from "../../hooks/useDebounce";
const PAGE_SIZE = 8;
function HotelGrid() {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 500);
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Hotels"],
    queryFn: getHotels,
  });
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isSearching, setIsSearching] = useState(false);
  const loader = useRef<HTMLDivElement>(null);
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, hotels.length));
  }, []);
  useInfiniteScroll({
    target: loader,
    onIntersect: loadMore,
  });
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  const filteredHotels = data.filter((hotel) => {
    const value = debounceSearch.toLowerCase();
    return (
      hotel.name.toLowerCase().includes(value) ||
      hotel.city.toLowerCase().includes(value)
    );
  });
  return (
    <section className="hotel-section">
      <input
        name="search-input"
        type="text"
        className="search-input"
        placeholder="Search hotel or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {isError && <h2 className="empty-state">Something went wrong</h2>}
      {!isSearching && filteredHotels.length < 1 && (
        <h2 className="empty-state">No hotel found</h2>
      )}
      <div className="grid">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
        {isLoading &&
          Array.from({ length: 8 }).map((_, index) => (
            <HotelSkeleton key={index} />
          ))}
      </div>
    </section>
  );
}
export default HotelGrid;
// Version 1
/* 
import { useState } from "react";
import HotelCard from "../HotelCard/HotelCard";
import { hotels } from "../../data/hotels";
import "./HotelGrid.css";
function HotelGrid() {
  const [search, setSearch] = useState("");
  const filterHotels = hotels.filter((hotel) => {
    return (
      hotel.city.toLowerCase().includes(search.toLowerCase()) ||
      hotel.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <div className="hotel-section">
      <input
        type="text"
        className="search-input"
        placeholder="Search hotels or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid">
        {filterHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
export default HotelGrid;

const filteredHotels = useMemo(() => {
    const keyword = debounceSearch.trim().toLowerCase();
    if (!keyword) return hotels;
    return hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(keyword) ||
        hotel.city.toLowerCase().includes(keyword),
    );
  }, [debounceSearch]);
*/
