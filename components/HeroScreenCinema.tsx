"use client";

import {
  Clapperboard,
  Laptop,
  MonitorPlay,
  Radio,
  Smartphone,
  Tv,
} from "lucide-react";

const screenCards = [
  {
    label: "LIVE",
    title: "Live television",
    icon: Radio,
    className: "screen-live",
  },
  {
    label: "MOVIES",
    title: "On-demand movies",
    icon: Clapperboard,
    className: "screen-movies",
  },
  {
    label: "SERIES",
    title: "Series library",
    icon: MonitorPlay,
    className: "screen-series",
  },
];

export default function HeroScreenCinema() {
  return (
    <div className="hero-cinema-stage" aria-hidden="true">
      <div className="hero-cinema-line">
        <span />
      </div>

      {screenCards.map(({ label, title, icon: Icon, className }, index) => (
        <article className={`hero-cinema-screen ${className}`} key={label}>
          <div className="hero-cinema-glow" />

          <div className="hero-cinema-topline">
            <span>{label}</span>
            <i>0{index + 1}</i>
          </div>

          <div className="hero-cinema-icon">
            <Icon />
          </div>

          <div className="hero-cinema-copy">
            <small>Trex IPTV</small>
            <strong>{title}</strong>
          </div>

          <div className="hero-cinema-progress">
            <span />
          </div>
        </article>
      ))}

      <div className="hero-cinema-dock">
        <span>
          <Tv />
          TV
        </span>
        <span>
          <Smartphone />
          Mobile
        </span>
        <span>
          <Laptop />
          Computer
        </span>
      </div>
    </div>
  );
}
