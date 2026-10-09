export const tivimateMeta = {
  title: "Trex IPTV with TiviMate: Setup, EPG and Playback Guide",
  description:
    "Learn how to set up Trex IPTV with TiviMate, add your playlist, configure EPG, organize channels, and troubleshoot common playback issues.",
  path: "/trex-iptv-tivimate-setup/",
  datePublished: "2026-10-09",
  dateModified: "2026-10-09",
  category: "Setup Guide",
  readTime: "14 min read",
  dateDisplay: "October 9, 2026",
  image: "/trex_iptv_tivimate_setup_1200x675_final.png",
};

export const tivimateIntro = [
  "If you use Trex IPTV with TiviMate, the right setup can make your live TV library much easier to navigate. TiviMate is an IPTV player that organizes your playlist into live TV categories, TV guides, favorites, and playback controls. It does not provide TV channels itself. You need valid IPTV credentials or a playlist from your IPTV service.",
  "This guide explains how to set up Trex IPTV on TiviMate, load your channels, configure the EPG, organize your TV guide, and troubleshoot common playback problems.",
];

export const beforeSetupItems = [
  "TiviMate installed on your compatible device",
  "An active Trex IPTV subscription",
  "Your Trex IPTV login details",
  "A stable internet connection",
  "A compatible Android TV, Google TV, Fire TV, or Android device",
];

export const beforeSetupNote =
  "Depending on your Trex IPTV setup, you may receive Xtream Codes credentials (server URL, username, and password) or an M3U playlist URL.";

export const beforeSetupClosing =
  "TiviMate supports both common playlist methods, although the exact menu names can vary by version. Current TiviMate guides commonly describe Xtream Codes and M3U as the main ways to add an IPTV playlist.";

export const setupOverviewSteps = [
  "Install and open TiviMate.",
  "Select Add Playlist.",
  "Choose the login method your IPTV service provides.",
  "Enter your Trex IPTV details.",
  "Allow the playlist to load.",
  "Wait for the channels and categories to synchronize.",
  "Update the EPG.",
  "Test several live channels.",
];

export type SetupStep = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string[];
};

export const setupSteps: SetupStep[] = [
  {
    title: "Step 1: Open TiviMate",
    paragraphs: [
      "Launch TiviMate on your Android TV, Google TV, Fire TV, or compatible Android device.",
      "If this is your first time using the app, TiviMate will normally ask you to add a playlist.",
      "If you have already added another playlist, go to the playlist management section and select the option to add another playlist.",
    ],
  },
  {
    title: "Step 2: Choose Your Playlist Method",
    paragraphs: [
      "Your Trex IPTV credentials determine which option you should select.",
      "If you received Xtream Codes:",
      "Choose Xtream Codes API and enter:",
    ],
    bullets: ["Server URL", "Username", "Password"],
    closing: [
      "If you received an M3U URL:",
      "Choose the M3U or playlist URL option and paste the complete URL supplied with your subscription.",
      "Do not modify the URL or guess missing information. A single missing character can prevent the playlist from loading.",
    ],
  },
  {
    title: "Step 3: Let TiviMate Load Your Playlist",
    paragraphs: [
      "After entering your details, TiviMate connects to the IPTV service and retrieves the available content.",
      "Depending on the playlist, you may see categories such as:",
    ],
    bullets: [
      "Live TV",
      "Sports",
      "News",
      "Movies",
      "Series",
      "International channels",
      "Regional channels",
    ],
    closing: [
      "The exact categories depend on the IPTV service and account configuration.",
      "Do not start changing advanced settings immediately. First confirm that your playlist loads correctly.",
    ],
  },
];

export const epgSetup = {
  intro:
    "EPG, or Electronic Program Guide, is the information that shows what is currently playing and what is scheduled next.",
  withoutEpg:
    'Without EPG data, your channels can still work while the TV Guide displays blank listings or "No Information".',
  withSetup:
    "With an Xtream Codes setup, EPG information may be provided through the service connection. With an M3U setup, an additional XMLTV EPG source may be required depending on how the playlist is configured. Current TiviMate guides describe both approaches.",
  refreshSteps: [
    "Open Settings.",
    "Go to the EPG section.",
    "Select the relevant playlist or EPG source if required.",
    "Choose Update EPG or the equivalent refresh option.",
    "Wait for the update to complete.",
    "Open the TV Guide again.",
  ],
  refreshNote:
    "Menu names can differ between TiviMate versions, so use the EPG or TV Guide settings available in your installation.",
};

export const blankEpgChecks = [
  "Refresh the EPG manually.",
  "Confirm your playlist is active.",
  "Check that your device date and timezone are correct.",
  "Restart TiviMate.",
  "Check whether all channels or only some channels are affected.",
  "Verify the EPG source if you are using a separate XMLTV URL.",
];

export const blankEpgNote =
  "If only certain channels are missing guide information, the issue may be channel mapping or incomplete EPG coverage rather than a complete EPG failure.";

export const blankEpgClosing =
  "Recent Trex-related Reddit discussions have also included users reporting missing or incomplete EPG data, so an EPG problem does not automatically mean that your TiviMate installation is incorrect.";

export const wrongEpgTimesChecks = [
  "Automatic date and time are enabled.",
  "Your timezone is correct.",
  "The device clock is accurate.",
  "Any EPG time offset in TiviMate has not been changed unnecessarily.",
];

export const wrongEpgTimesNote =
  "For example, if every program appears exactly one hour early or late, a timezone or offset setting is worth checking before rebuilding the playlist.";

export const organizeTips = {
  favoritesIntro:
    "Add your most-used channels to Favorites. This can include:",
  favorites: [
    "Local channels",
    "News channels",
    "Sports channels",
    "Entertainment channels",
    "Kids channels",
    "Frequently watched international channels",
  ],
  favoritesClosing:
    "Instead of scrolling through the entire playlist, you can then access your regular channels much faster.",
  hideGroups:
    "If your Trex IPTV playlist contains categories you never use, consider hiding unnecessary groups. This reduces clutter and makes the interface easier to navigate with a remote.",
  keepEpgUpdated:
    "After organizing your channels, refresh the EPG so the guide remains synchronized with the available channel information.",
};

export const playbackSection = {
  paragraphs: [
    "Once your channels and EPG are working, test playback before making advanced changes.",
    "Start with the default playback configuration.",
    "If a channel plays normally, there is usually no reason to change multiple decoder or buffering settings.",
    "For a playback problem, change one setting at a time and test the same channel again.",
    "This makes it much easier to identify which setting affects the problem.",
  ],
};

export const bufferingChecks = [
  "Test another Trex IPTV channel.",
  "Check whether other apps stream normally.",
  "Restart your router if your connection appears unstable.",
  "Move closer to your Wi-Fi router or use Ethernet where practical.",
  "Close unnecessary apps running on the device.",
  "Restart TiviMate.",
  "Test the same channel again.",
];

export const bufferingNote =
  "If one channel buffers while other channels play normally, the problem may be specific to that stream rather than your entire setup.";

export const freezeSteps = [
  "Exit the affected channel.",
  "Return to the channel list.",
  "Open the channel again.",
  "Test another channel.",
  "If only one channel is affected, try it again later.",
];

export const freezeIntro =
  "A common playback pattern reported by TiviMate users is a channel that freezes or becomes stuck after the underlying stream changes. One recent Reddit discussion specifically described a TREX setup where a channel would freeze after a source change, and reopening the channel restored playback.";

export const freezeClosing =
  "If several channels have the same problem, investigate your internet connection, device, player configuration, or the IPTV service itself.";

export const noEpgOrder = [
  "First: Refresh the EPG.",
  "Second: Check your device's time zone.",
  "Third: Restart TiviMate.",
  "Fourth: Check the playlist's EPG configuration.",
  "Fifth: Determine whether the problem affects every channel or only certain channels.",
];

export const noEpgClosing =
  "If live TV continues working but the guide remains empty, avoid deleting your entire playlist immediately. First, determine whether the issue is limited to the EPG.";

export const channelsNotPlay = {
  fewChannels: [
    "Try another channel.",
    "Return to the channel later.",
    "Check whether other categories work.",
  ],
  mostChannels: [
    "Check your internet connection.",
    "Restart TiviMate.",
    "Restart your streaming device.",
    "Verify your account details.",
    "Check whether the subscription is still active.",
    "Contact your IPTV provider if the problem continues.",
  ],
  note: "TiviMate itself is a player and does not independently provide the underlying channel streams. The source of the playlist and stream therefore matters when diagnosing playback problems.",
};

export const testSetupSteps = [
  {
    title: "1. Test Live TV",
    text: "Open several channels from different categories.",
  },
  {
    title: "2. Test the EPG",
    text: "Open the TV Guide and check whether current and upcoming programs are displayed.",
  },
  {
    title: "3. Test Playback",
    text: "Leave a channel playing for several minutes and watch for freezing or buffering.",
  },
  {
    title: "4. Test Different Categories",
    text: "Try news, entertainment, sports, and other available groups.",
  },
  {
    title: "5. Test Favorites",
    text: "Add several channels and confirm they appear correctly in your Favorites section.",
  },
];

export const testSetupClosing =
  "This simple test helps you determine whether the problem is with the playlist, EPG, a particular channel, or playback.";

export const problemsTable: { problem: string; check: string }[] = [
  {
    problem: "Playlist will not load",
    check: "Server URL, username, password, or M3U URL",
  },
  { problem: "EPG is blank", check: "Refresh EPG and check EPG configuration" },
  {
    problem: "EPG shows wrong times",
    check: "Device timezone and EPG offset",
  },
  {
    problem: "Some channels have no guide",
    check: "EPG coverage or channel mapping",
  },
  {
    problem: "Channel keeps buffering",
    check: "Internet, Wi-Fi, device, or individual stream",
  },
  {
    problem: "One channel freezes",
    check: "Test other channels and reopen the affected channel",
  },
  {
    problem: "All channels stop playing",
    check: "Internet, account, playlist, or service issue",
  },
  {
    problem: "TiviMate becomes slow",
    check: "Restart the app and device, then check available storage",
  },
];

export const tivimateFaqs: { question: string; answer: string }[] = [
  {
    question: "Can I use Trex IPTV with TiviMate?",
    answer:
      "Yes, TiviMate can be used as the IPTV player for a compatible Trex IPTV playlist. You need the appropriate playlist or login details supplied with your IPTV service.",
  },
  {
    question: "Does TiviMate provide IPTV channels?",
    answer:
      "No. TiviMate is a media player that organizes and plays compatible playlists. The channel content comes from the IPTV service connected to the player.",
  },
  {
    question: "How do I add Trex IPTV to TiviMate?",
    answer:
      "Open TiviMate, choose Add Playlist, then select the login method that matches the details supplied with your Trex IPTV subscription. For Xtream Codes, enter the server URL, username, and password.",
  },
  {
    question: "How do I get the Trex IPTV EPG working in TiviMate?",
    answer:
      "Start by refreshing the EPG from TiviMate's EPG settings. If you use a setup requiring a separate XMLTV source, confirm that the EPG URL supplied by your provider is correct.",
  },
  {
    question:
      "Why does Trex IPTV work but the TiviMate EPG show no information?",
    answer:
      "The live stream and EPG are separate data components. The channels can continue playing even when guide data has not loaded, has not refreshed, or cannot be matched to the channels.",
  },
  {
    question: "Why does my Trex IPTV channel freeze in TiviMate?",
    answer:
      "A single channel can experience a temporary stream problem while other channels continue working. Reopen the channel and test other channels. Recent TREX/TiviMate user reports have also described freezing associated with stream-source changes.",
  },
  {
    question: "Does TiviMate Premium affect Trex IPTV channels?",
    answer:
      "TiviMate Premium is a feature upgrade for the player. It is separate from your IPTV subscription and does not itself provide IPTV channels.",
  },
  {
    question:
      "What should I do if Trex IPTV works on one device but not another?",
    answer:
      "Compare the two setups. Check the player version, playlist details, internet connection, device settings, and EPG configuration. If the same account works elsewhere, the issue may be specific to the device or player configuration.",
  },
];

export const finalThoughts = [
  "Using Trex IPTV with TiviMate involves three main parts: getting the playlist connected, making sure the EPG is synchronized, and confirming that live playback works correctly.",
  "If you encounter a problem, troubleshoot one layer at a time. Check the playlist first, then EPG, then playback. This prevents unnecessary changes and makes it easier to identify the actual source of the problem.",
  "For additional setup help, use the relevant Trex IPTV installation and support resources on the website.",
];
