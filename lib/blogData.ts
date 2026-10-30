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
    slug: "trex-iptv-official-features-subscription-setup",
    href: "/trex-iptv-official-features-subscription-setup/",
    title: "Trex IPTV Official: Features, Subscription and Setup Guide",
    description:
      "Explore Trex IPTV features, compare subscription options, understand device compatibility, and learn the setup process before choosing a plan that suits you.",
    image: "/trex-iptv-features-subscription-setup-guide-thumbnail.jpg",
    category: "Overview",
    readTime: "14 min read",
    date: "October 30, 2026",
    author: "Trex IPTV Team",
    featured: true,
  },
  {
    slug: "how-to-install-trex-iptv-android-tv-google-tv",
    href: "/how-to-install-trex-iptv-android-tv-google-tv/",
    title: "How to Install Trex IPTV on Android TV and Google TV",
    description:
      "Learn how to install Trex IPTV on Android TV and Google TV, add your IPTV player login or M3U playlist, load channels, and fix common setup problems today.",
    image: "/trex-iptv-android-google-tv-setup-thumbnail.jpg",
    category: "Setup Guide",
    readTime: "12 min read",
    date: "October 30, 2026",
    author: "Trex IPTV Team",
  },
  {
    slug: "how-to-setup-trex-iptv-on-firestick",
    href: "/how-to-setup-trex-iptv-on-firestick/",
    title: "How to Install or Set Up or Install Trex IPTV on Firestick under 3 Minutes?",
    description:
      "Learn how to install Trex IPTV on Firestick, set up a compatible IPTV player, enter your login details, load channels, and fix common setup issues.",
    image: "/trex-iptv-firestick-setup-thumbnail.jpg",
    category: "Setup Guide",
    readTime: "11 min read",
    date: "October 30, 2026",
    author: "Trex IPTV Team",
  },
  {
    slug: "how-to-become-trex-iptv-reseller",
    href: "/how-to-become-trex-iptv-reseller/",
    title: "Become a Trex IPTV Reseller & Get a Trex IPTV Reseller Panel",
    description:
      "Learn how to become a Trex IPTV reseller, apply for a Trex IPTV reseller panel, understand credits and pricing, and manage customer accounts responsibly.",
    image: "/trex_iptv_reseller_panel_graphic_1200x675_final.png",
    category: "Reseller",
    readTime: "12 min read",
    date: "October 15, 2026",
    author: "Trex IPTV Team",
  },
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
