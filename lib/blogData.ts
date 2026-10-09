export interface BlogPost {
  slug: string;
  href: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
}

/** Blog card images — keep in sync with each article's `*Meta.image` in lib/blog/. */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "trex-iptv-login-not-working",
    href: "/trex-iptv-login-not-working/",
    title: "Trex IPTV Login Not Working? Fix Login Errors Fast in Minutes",
    description:
      "Trex IPTV login not working? Learn how to fix invalid credentials, server URL errors, expired subscriptions, connection issues, and app login problems fast.",
    image: "/trex_iptv_login_not_working_1200x675_final.png",
    category: "Troubleshooting",
    readTime: "11 min read",
    date: "October 9, 2026",
    author: "Trex IPTV Team",
    featured: true,
  },
  {
    slug: "trex-iptv-channels-not-loading",
    href: "/trex-iptv-channels-not-loading/",
    title: "Trex IPTV Channels Not Loading? Get Your Channels Working Again",
    description:
      "Trex IPTV channels not loading? Fix blank, missing, or stuck channels with practical steps for TiviMate, Firestick, and Android TV. Get streaming again.",
    image: "/trex_iptv_channels_not_loading_1200x675_final.png",
    category: "Troubleshooting",
    readTime: "12 min read",
    date: "October 9, 2026",
    author: "Trex IPTV Team",
  },
  {
    slug: "best-iptv-player-for-trex-iptv-usa",
    href: "/best-iptv-player-for-trex-iptv-usa/",
    title: "Best Player for Trex IPTV in the USA: Top Picks & Features",
    description:
      "Looking for the best IPTV player for Trex IPTV in the USA? Compare TiviMate, IPTV Smarters, and other players by device, features, setup, and ease of use.",
    image: "/trex_iptv_best_player_usa_1200x675_final.png",
    category: "Guides",
    readTime: "10 min read",
    date: "October 9, 2026",
    author: "Trex IPTV Team",
  },
  {
    slug: "trex-iptv-not-working-tivimate",
    href: "/trex-iptv-not-working-tivimate/",
    title: "Trex IPTV Not Working on TiviMate? 10 Fixes for Playlist, EPG & Playback",
    description:
      "Trex IPTV not working on TiviMate? Learn how to fix login, playlist, EPG, buffering, and playback problems with simple step-by-step solutions.",
    image: "/trex_iptv_tivimate_troubleshooting_1200x675_final.png",
    category: "Troubleshooting",
    readTime: "11 min read",
    date: "October 9, 2026",
    author: "Trex IPTV Team",
  },
  {
    slug: "trex-iptv-tivimate-setup",
    href: "/trex-iptv-tivimate-setup/",
    title: "Trex IPTV with TiviMate: Setup, EPG and Playback Guide",
    description:
      "Learn how to set up Trex IPTV with TiviMate, add your playlist, configure EPG, organize channels, and troubleshoot common playback issues.",
    image: "/trex_iptv_tivimate_setup_1200x675_final.png",
    category: "Setup Guide",
    readTime: "14 min read",
    date: "October 9, 2026",
    author: "Trex IPTV Team",
  },
  {
    slug: "trex-iptv-epg-not-working",
    href: "/trex-iptv-epg-not-working/",
    title: "Trex IPTV EPG Not Working? How to Fix TV Guide Problems",
    description:
      "Trex IPTV EPG not working? Learn how to fix blank TV guides, missing listings, wrong times, EPG refresh issues, and channel guide problems.",
    image: "/trex_iptv_epg_fix_amazing_1200x675.png",
    category: "Troubleshooting",
    readTime: "12 min read",
    date: "October 9, 2026",
    author: "Trex IPTV Team",
  },
];
