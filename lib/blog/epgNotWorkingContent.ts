export const epgMeta = {
  title: "Trex IPTV EPG Not Working? How to Fix TV Guide Problems",
  description:
    "Trex IPTV EPG not working? Learn how to fix blank TV guides, missing listings, wrong times, EPG refresh issues, and channel guide problems.",
  path: "/trex-iptv-epg-not-working/",
  datePublished: "2026-10-09",
  dateModified: "2026-10-09",
  image: "/trex_iptv_epg_fix_amazing_1200x675.png",
};

export const epgIntro = [
  'If Trex IPTV EPG is not working, your live channels may still play normally while the TV Guide shows "No Information," missing programs, incorrect times, or completely blank listings. The EPG is the guide data used by your IPTV player, so a problem with the guide does not necessarily mean that your entire Trex IPTV account is down.',
  "Recent user discussions also show that EPG problems can sometimes affect multiple users at the same time, including reports of Trex EPG interruptions and failed manual updates.",
  "Start with a manual EPG refresh, check your device time settings, and then work through the source, player, and channel-matching checks below.",
];

export const whatIsEpg = {
  definition:
    "EPG stands for Electronic Program Guide. It displays information about current and upcoming programs, such as program names, schedules, and descriptions.",
  availability:
    "Trex IPTV states that EPG information is available on supported channels. The service itself provides the IPTV access, while a compatible IPTV player displays the channels and guide on your device.",
  setupMayUse: [
    "Xtream Codes",
    "An M3U playlist",
    "A compatible IPTV player",
    "EPG data supplied through the service or configured source",
  ],
  note: "This means the channels can sometimes continue playing even when the guide data has stopped updating.",
};

export const whyEpgNotWorking = [
  "The EPG has not refreshed properly.",
  "Cached guide data is outdated.",
  "Your device timezone is incorrect.",
  "The EPG source is temporarily unavailable.",
  "Channel information is not matching correctly.",
  "Your IPTV player has an EPG configuration problem.",
  "The issue is affecting the provider's EPG source.",
];

export const symptomTable: { problem: string; cause: string }[] = [
  { problem: "Entire guide is blank", cause: "EPG source or refresh problem" },
  {
    problem: '"No Information" on every channel',
    cause: "Guide data failed to load",
  },
  {
    problem: "Only some channels are missing",
    cause: "Coverage or channel matching",
  },
  {
    problem: "Programs are shifted by one hour",
    cause: "Timezone or EPG offset",
  },
  { problem: "Old programs remain visible", cause: "Guide has not refreshed" },
  {
    problem: "EPG works on one device but not another",
    cause: "Player or device configuration",
  },
];

export type FixStep = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string[];
};

export const fixSteps: FixStep[] = [
  {
    title: "1. Refresh the Trex IPTV EPG",
    paragraphs: [
      "The simplest fix is often a manual refresh.",
      "Open your IPTV player and look for an option such as EPG, TV Guide, Update EPG, or Refresh Guide.",
      "The exact menu can vary by player version, so do not worry if the wording is different.",
      "After starting the update:",
    ],
    bullets: [
      "Wait for the update to finish.",
      "Return to the live channel list.",
      "Open the TV Guide again.",
      "Check several channels.",
      "Give the player some time to populate the listings.",
    ],
    closing: [
      "Recent TiviMate discussions also show users resolving guide problems by checking the EPG update status and manually updating the guide.",
      "Trex's own installation guidance also recommends refreshing the EPG after setup.",
    ],
  },
  {
    title: "2. Check Your Device's Time and Timezone",
    paragraphs: [
      "If your EPG displays programs but the times are wrong, check the device clock before changing advanced IPTV settings.",
      "Set:",
    ],
    bullets: [
      "Date and time to automatic",
      "Timezone to your actual location",
      "Automatic time synchronization where available",
    ],
    closing: [
      "A timezone problem can make a correctly loaded guide appear incorrect because the program times are displayed against the wrong local clock.",
      "If everything is exactly one hour ahead or behind, check the timezone and any manual EPG offset before doing anything more complicated.",
    ],
  },
  {
    title: "3. Restart Your IPTV Player and Device",
    paragraphs: [
      "A temporary player issue can prevent fresh guide information from appearing.",
      "Try this sequence:",
    ],
    bullets: [
      "Close the IPTV player.",
      "Force close it if your device provides that option.",
      "Restart the device.",
      "Open the IPTV player again.",
      "Refresh the EPG.",
      "Check the TV Guide.",
    ],
    closing: [
      "This is especially useful after changing your playlist, login details, timezone, or player settings.",
      "Trex's installation guide recommends restarting the app after major configuration changes.",
    ],
  },
  {
    title: "4. Clear Outdated EPG Data or Cache",
    paragraphs: [
      "Some IPTV players store guide information locally. If that stored data becomes outdated, the player may continue showing an old or incomplete guide.",
      "Look for an EPG section in your player and, where available, use options such as:",
    ],
    bullets: [
      "Clear EPG",
      "Clear guide data",
      "Refresh EPG",
      "Update EPG",
    ],
    closing: [
      "You can also clear the app cache through your device settings if the player supports it.",
      "Be careful with Clear Data or uninstalling the application. Those options may remove your saved account or playlist configuration.",
      "A recent IPTV troubleshooting discussion similarly described clearing EPG data and cache as part of troubleshooting guide updates.",
    ],
  },
  {
    title: "5. Check Whether Only Certain Channels Are Missing",
    paragraphs: [
      'If some channels have program information while others say "No Information," the problem may not be the entire EPG.',
      "EPG data depends on channel information being matched correctly between the playlist and guide source.",
      "For example, your playlist may contain a channel identifier such as a tvg-id. If the identifier does not correspond with the guide data, the player may have difficulty attaching the correct listings to that channel.",
      "This can explain why:",
    ],
    bullets: [
      "BBC-style channels may show listings while another channel does not.",
      "One channel can display the wrong program.",
      "Only a portion of the channel list can have missing EPG data.",
    ],
    closing: [
      "In this situation, reinstalling the entire player is unlikely to be the first thing you should try.",
    ],
  },
  {
    title: "6. Check Your IPTV Login or Playlist",
    paragraphs: [
      "Trex IPTV supports different forms of account information, including Xtream Codes, M3U playlists, and portal-based access, depending on the setup.",
      "If you recently changed your playlist or re-added your account, check that you entered the supplied information exactly as provided.",
      "Avoid:",
    ],
    bullets: [
      "Extra spaces",
      "Incorrect characters",
      "Missing parts of the server address",
      "Using an old playlist",
      "Accidentally changing account details",
    ],
    closing: [
      "If your live channels work but the EPG does not, the account itself may still be active. The issue can be isolated to the guide data rather than playback.",
    ],
  },
  {
    title: "7. Test Another Supported IPTV Player",
    paragraphs: [
      "If the EPG works on one player but not another, the problem may be related to the player configuration rather than your Trex IPTV access.",
      "Trex's installation guide lists compatible player options for supported devices and notes that menus can differ between devices and player versions.",
      "You can test the same account on another compatible player to compare the results.",
      "If the guide works there, check the original player's:",
    ],
    bullets: [
      "EPG settings",
      "Refresh settings",
      "Timezone",
      "Cache",
      "Playlist configuration",
      "App version",
    ],
    closing: [
      "This is also a useful diagnostic when the same IPTV source behaves differently across apps, something users have reported in TiviMate discussions.",
    ],
  },
  {
    title: "8. The EPG May Be Temporarily Unavailable",
    paragraphs: [
      "Sometimes the problem is not on your device.",
      "Recent Trex-related Reddit discussions included reports of intermittent EPG problems, including users reporting that the guide returned after a period of time and others reporting failed force updates.",
      "There have also been previous reports from Trex users describing partial or temporary EPG outages.",
      "If:",
    ],
    bullets: [
      "Your login works",
      "Live channels play",
      "Your device time is correct",
      "Your player is configured correctly",
      "Manual EPG refresh fails",
    ],
    closing: [
      "then the issue may be on the EPG source side.",
      "In that situation, repeatedly reinstalling your IPTV player is unlikely to solve a provider-side interruption.",
    ],
  },
];

export const stillNotWorking = {
  intro:
    "Work through the troubleshooting order instead of changing several settings at once:",
  steps: [
    "Confirm live channels are working.",
    "Refresh the EPG manually.",
    "Check your device's date and timezone.",
    "Restart the IPTV player.",
    "Restart your streaming device.",
    "Clear outdated EPG data or cache if available.",
    "Check whether all or only some channels are affected.",
    "Test another compatible player.",
    "Contact Trex support if the problem continues.",
  ],
  supportNote:
    "When contacting support, include your device model, IPTV player, exact error, whether one channel or the entire guide is affected, and the troubleshooting steps you already tried. Trex specifically asks customers to provide this information for technical assistance.",
  privacyNote:
    "Never send your password, complete playlist URL, payment card information, or other sensitive credentials publicly.",
};

export const preventionTips = [
  "Keep your IPTV player updated when appropriate.",
  "Use automatic date and time settings.",
  "Refresh the EPG after major playlist changes.",
  "Avoid changing multiple advanced settings simultaneously.",
  "Keep your device's storage from becoming completely full.",
  "Test the guide after installing or changing your IPTV setup.",
  "Keep your Trex account information private.",
];

export const preventionClosing =
  "Trex also recommends keeping free device storage available and changing only one advanced player setting at a time.";

export const epgFaqs: { question: string; answer: string }[] = [
  {
    question:
      "Why is my Trex IPTV EPG not working but channels are playing?",
    answer:
      "The EPG and live playback perform different functions. Your channels can continue playing while guide data fails to refresh, becomes unavailable, or is not matched correctly.",
  },
  {
    question: "How do I refresh the EPG on Trex IPTV?",
    answer:
      "Open your IPTV player's EPG or TV Guide settings and select the available refresh or update option. Allow the update to finish before checking the guide again.",
  },
  {
    question: 'Why does my Trex IPTV guide say "No Information"?',
    answer:
      'It can happen when guide data has not loaded, the EPG source is unavailable, or channel information cannot be matched correctly. If every channel shows "No Information," check the EPG update status first.',
  },
  {
    question: "Why is my IPTV EPG one hour behind?",
    answer:
      "Check your device timezone, automatic date and time settings, and any manual EPG offset in the player. A timezone mismatch can shift otherwise correct program listings.",
  },
  {
    question: "Why does EPG work on one IPTV player but not another?",
    answer:
      "Different players handle EPG data and settings differently. If the guide works on another compatible player using the same account, compare the original player's EPG, timezone, cache, and playlist settings.",
  },
  {
    question: "Can Trex IPTV EPG problems fix themselves?",
    answer:
      "Yes, if the underlying problem is a temporary EPG source or service-side interruption. Recent Trex user reports have described EPG issues that later returned without a major change on the user's device.",
  },
  {
    question: "Should I reinstall my IPTV player if the EPG is blank?",
    answer:
      "Not immediately. First, refresh the EPG, check your timezone, restart the player, and check the playlist configuration. Reinstalling can remove settings you may need for further troubleshooting.",
  },
  {
    question: "What information should I send Trex support?",
    answer:
      "Provide your device brand and model, IPTV player name, exact error message, whether the problem affects one channel or the entire guide, and the troubleshooting steps you have already completed. Hide your login credentials in screenshots.",
  },
];
