export const notWorkingTivimateMeta = {
  title: "Trex IPTV Not Working on TiviMate? Try These Easy Fixes Now",
  headline:
    "Trex IPTV Not Working on TiviMate? 10 Fixes for Playlist, EPG & Playback",
  description:
    "Trex IPTV not working on TiviMate? Learn how to fix login, playlist, EPG, buffering, and playback problems with simple step-by-step solutions.",
  path: "/trex-iptv-not-working-tivimate/",
  datePublished: "2026-10-09",
  dateModified: "2026-10-09",
  category: "Troubleshooting",
  readTime: "11 min read",
  dateDisplay: "October 9, 2026",
  image: "/trex_iptv_tivimate_troubleshooting_1200x675_final.png",
};

export const intro = [
  "If Trex IPTV is not working on TiviMate, the problem may not be the IPTV service itself. TiviMate is a player, so it depends on the playlist, login details, EPG source, internet connection, and IPTV server to deliver channels correctly. A small issue with any of these can make channels disappear, keep videos loading, or prevent the playlist from being added.",
  "The good news is that most TiviMate IPTV problems can be narrowed down quickly. Start with the simple checks below before deleting your playlist or changing advanced settings.",
];

export const failureSymptoms = [
  "TiviMate cannot add the Trex IPTV playlist",
  "The playlist loads but channels are missing",
  "Channels appear but do not play",
  "Channels keep buffering or spinning",
  "The EPG is blank or outdated",
  "Trex IPTV works in another player but not TiviMate",
];

export type FixSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
  tip?: string;
};

export const fixSections: FixSection[] = [
  {
    title: "1. Check Your Trex IPTV Login Details",
    paragraphs: [
      "If you are using Xtream Codes, check the server URL, username, and password carefully.",
      "Long URLs are easy to enter incorrectly, especially when using a TV remote. A misplaced character, extra space, incorrect port, or wrong capitalization can prevent TiviMate from connecting.",
      "Go back to your Trex IPTV account details and enter them again.",
      "If your provider supplied an M3U URL instead, copy the complete address rather than manually typing it.",
      "Reddit users have repeatedly reported that seemingly correct Xtream Codes failed because of simple typing problems, including spaces and characters that look similar.",
    ],
    tip: "If possible, copy and paste the credentials instead of typing them with your remote.",
  },
  {
    title: "2. Refresh or Re-Add the Playlist",
    paragraphs: [
      "If the Trex IPTV playlist was working before but suddenly stopped, refresh it before doing anything more complicated.",
      "In TiviMate, open your playlist settings and look for the option to update or refresh the playlist.",
      "If the update fails:",
    ],
    bullets: [
      "Check that your subscription is still active.",
      "Confirm the playlist URL has not changed.",
      "Re-enter the credentials.",
      "Try adding the playlist again.",
      "Contact your IPTV provider if the supplied URL no longer works.",
    ],
    paragraphsAfter: [
      "This is especially important if the provider has changed its server or playlist information.",
      "TiviMate can only display the data supplied by the IPTV service. If the playlist itself is unavailable, changing random TiviMate settings will not repair the source.",
    ],
  },
  {
    title: "3. Trex IPTV Works in Another App but Not TiviMate",
    paragraphs: [
      "This is one of the more confusing situations.",
      "You may find that your Trex IPTV login works on another IPTV player, while TiviMate shows an error or refuses to load the channels. Similar situations have been reported by TiviMate users, including cases where a playlist worked in another player but failed to load in TiviMate.",
      "First, make sure both apps are using exactly the same:",
    ],
    bullets: [
      "Server address",
      "Username",
      "Password",
      "Playlist type",
      "EPG source, if applicable",
    ],
    paragraphsAfter: [
      "If everything matches, restart TiviMate and your streaming device.",
      "You can also try connecting the device through another network, such as a phone hotspot. If the playlist works on the second connection, your normal network may be contributing to the problem.",
      "Do not immediately assume that TiviMate or Trex IPTV is permanently broken. Testing another network helps identify where the failure is occurring.",
    ],
  },
  {
    title: "4. TiviMate Shows Channels, but They Keep Spinning",
    paragraphs: [
      "If your Trex IPTV channels appear but remain stuck on a loading screen, check the internet connection first.",
      "Try these basic steps:",
    ],
    bullets: [
      "Restart your router.",
      "Restart the Firestick, Android TV, or Google TV device.",
      "Close other streaming apps.",
      "Test another channel.",
      "Try a lower-quality stream if several qualities are available.",
      "Test the same channel later.",
    ],
    paragraphsAfter: [
      "If only one or two channels fail while most channels work, the problem may be specific to those streams rather than TiviMate itself.",
      "If every Trex IPTV channel suddenly stops playing, check whether the subscription or IPTV server is experiencing a problem.",
    ],
  },
  {
    title: "5. Trex IPTV Playlist Loads but Channels Are Missing",
    paragraphs: [
      "Sometimes TiviMate successfully connects but does not show all the channels you expect.",
      "Open the playlist settings and check whether groups or categories have been hidden.",
      "Also refresh the playlist. IPTV channel lists can change when a provider updates its source.",
      "If the same channels are missing on another compatible player, the issue is more likely related to the IPTV playlist rather than TiviMate.",
      "Remember that TiviMate does not create the channels itself. It reads the playlist supplied by the IPTV provider.",
    ],
  },
  {
    title: "6. Fix Trex IPTV EPG Not Working on TiviMate",
    paragraphs: [
      "The EPG, or Electronic Programme Guide, is separate from the actual video stream. This means your channels can work while the TV guide remains blank.",
      "If the Trex IPTV EPG is not updating:",
    ],
    bullets: [
      "Open TiviMate settings.",
      "Go to the EPG section.",
      "Check that the EPG source is present.",
      "Make sure the correct source is assigned to the playlist.",
      "Run a manual EPG update.",
      "Clear old EPG data if necessary.",
      "Update the EPG again.",
    ],
    paragraphsAfter: [
      "Recent Reddit discussions show that EPG problems remain a common TiviMate issue. Users have reported situations where the playlist worked but the EPG stopped updating, sometimes because an old EPG source remained attached after the playlist URL changed.",
      "If you recently received a new playlist URL from your IPTV provider, check the EPG source as well. Changing one does not necessarily mean the other has been updated automatically.",
    ],
  },
  {
    title: "7. Clear TiviMate Cache",
    paragraphs: [
      "A corrupted or outdated cache can sometimes cause strange app behaviour.",
      "On your Android TV, Google TV or Fire TV device, open the application settings and locate TiviMate.",
      "Choose Clear Cache, then restart TiviMate.",
      "Avoid clearing app data unless necessary because doing so can remove saved application settings and require you to configure the playlist again.",
      "If clearing the cache does not help, restarting the entire streaming device is another simple step worth trying.",
    ],
  },
  {
    title: "8. Check Whether Your IPTV Subscription Has Expired",
    paragraphs: [
      "If Trex IPTV suddenly stops working everywhere, check your subscription status.",
      "Look for:",
    ],
    bullets: [
      "Expiry date",
      "Active device limit",
      "Username status",
      "Password changes",
      "Updated server information",
      "Provider maintenance notices",
    ],
    paragraphsAfter: [
      "If your credentials are rejected on multiple compatible devices, the issue may be account-related rather than TiviMate-related.",
      "Do not repeatedly reinstall TiviMate if the same credentials are failing across different devices.",
    ],
  },
  {
    title: "9. Try Another Network",
    paragraphs: [
      "A useful troubleshooting test is to temporarily connect your streaming device to another internet connection.",
      "For example, you can test a phone hotspot if your device supports it.",
      "If Trex IPTV works through the second connection but not your normal Wi-Fi, the problem may involve your router, DNS, ISP connection, or network configuration.",
      "Reddit users troubleshooting TiviMate playlist errors have also suggested testing another connection to determine whether the network is contributing to the problem.",
      "This test does not prove exactly what caused the issue, but it helps separate an app or playlist problem from a network problem.",
    ],
  },
  {
    title: "10. Reinstall TiviMate Only as a Last Resort",
    paragraphs: [
      "If the playlist, credentials, network, and IPTV service all appear to be working, but TiviMate still refuses to load the service, reinstalling the app can be worth trying.",
      "Before doing this, make sure you have your Trex IPTV login details available.",
      "A complete reset may require you to:",
    ],
    bullets: [
      "Remove the existing TiviMate installation.",
      "Install the current version from your normal source.",
      "Add the Trex IPTV playlist again.",
      "Reconfigure the EPG.",
      "Test several channels.",
    ],
    paragraphsAfter: [
      "Some TiviMate users have reported that deleting the app data and entering their Xtream credentials again resolved situations where channels worked elsewhere but not in TiviMate.",
    ],
  },
];

export const checklistTable: { problem: string; check: string }[] = [
  {
    problem: "Playlist will not add",
    check: "Username, password, and server URL",
  },
  {
    problem: "Invalid playlist",
    check: "URL, account status, and provider server",
  },
  {
    problem: "Channels missing",
    check: "Playlist update and hidden groups",
  },
  {
    problem: "Channels keep loading",
    check: "Internet connection and stream availability",
  },
  { problem: "EPG is blank", check: "EPG source and playlist assignment" },
  {
    problem: "EPG is outdated",
    check: "Clear EPG data and update again",
  },
  {
    problem: "Works in another app",
    check: "Compare credentials and test TiviMate",
  },
  {
    problem: "Works on another network",
    check: "Check your normal network",
  },
  {
    problem: "Nothing works anywhere",
    check: "Check account or provider status",
  },
];

export const contactSupport = {
  intro:
    "Contact your IPTV provider when the problem appears to be on the service side.",
  whenToContact: [
    "Your subscription is active, but the login is rejected everywhere.",
    "The provider has changed its server address.",
    "Your M3U or Xtream Codes details no longer work.",
    "Channels are unavailable across multiple compatible players.",
    "The provider's EPG source has stopped responding.",
    "You were given outdated playlist information.",
  ],
  closing:
    'Give support the exact error message rather than simply saying "TiviMate is not working." This makes it easier to identify whether the problem concerns your account, playlist, server, or device.',
};

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Why is Trex IPTV not working on TiviMate?",
    answer:
      "Check your IPTV credentials, playlist URL, subscription status, and internet connection first. If the playlist loads but channels do not play, test several channels and compare the service on another compatible player.",
  },
  {
    question: "Why does Trex IPTV work on another app but not TiviMate?",
    answer:
      "The two apps may be handling the playlist or connection differently. Confirm that the same server, username, and password are being used. Restart TiviMate, refresh the playlist, and test another network if necessary.",
  },
  {
    question: "Why is my Trex IPTV EPG not updating in TiviMate?",
    answer:
      "Check the EPG source assigned to the playlist and manually update it. If the playlist URL was recently changed, make sure TiviMate is not still using an old EPG source. Similar EPG problems have been reported by TiviMate users recently.",
  },
  {
    question: "Why does TiviMate keep buffering with Trex IPTV?",
    answer:
      "Buffering can come from the internet connection, device, IPTV stream, or server. Restart your network, test several channels and compare playback on another connection or compatible player.",
  },
  {
    question: "Should I delete my Trex IPTV playlist and add it again?",
    answer:
      "Not immediately. First, check the credentials, subscription status, and playlist URL. If those are correct and the playlist remains unusable, removing and re-adding it can help rebuild the connection.",
  },
  {
    question: "Does TiviMate provide IPTV channels itself?",
    answer:
      "No. TiviMate is an IPTV player. It uses a playlist or login supplied by an IPTV service to display channels and other available content. Therefore, an issue with the provider's playlist can affect TiviMate even when the app itself is working correctly.",
  },
  {
    question: "What should I do if my Trex IPTV login is rejected?",
    answer:
      "Re-enter the server address, username, and password carefully and check for spaces or incorrect characters. If the same credentials fail on other compatible devices, contact your IPTV provider to confirm that the account and server details are still active.",
  },
];

export const finalThoughts = [
  "When Trex IPTV is not working on TiviMate, avoid changing multiple settings at once. Start by identifying whether the problem is the login, playlist, EPG, playback, internet connection, or IPTV service.",
  "For most users, checking the credentials, refreshing the playlist, testing another network and verifying the EPG source are the best first steps. If the same Trex IPTV details work elsewhere but TiviMate continues to fail, then focus on TiviMate's cache, playlist configuration and app installation.",
  "The key is to isolate the problem rather than simply reinstalling everything. That approach can save time and usually makes it much easier to determine whether the issue is with TiviMate, your device, your network or the IPTV service itself.",
];
