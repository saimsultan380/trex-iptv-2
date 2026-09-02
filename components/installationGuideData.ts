import {
  Tv,
  Smartphone,
  Monitor,
  Apple,
  Box,
  Laptop,
  Radio,
  Settings2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface GuideStep {
  title: string;
  description: string;
}

export interface DeviceGuide {
  id: string;
  name: string;
  icon: LucideIcon;
  title: string;
  recommendedPlayers?: string;
  steps?: GuideStep[];
  bulletLists?: { title?: string; items: string[] }[];
  notes?: string[];
  methods?: { title: string; steps: GuideStep[] }[];
  subSections?: { title: string; steps: GuideStep[]; note?: string }[];
}

export const deviceGuides: DeviceGuide[] = [
  {
    id: "fire-tv",
    name: "Fire TV Stick and Fire TV",
    icon: Tv,
    title: "Fire TV Stick and Fire TV",
    recommendedPlayers:
      "Recommended players include IPTV Smarters Pro, TiviMate and compatible M3U players.",
    steps: [
      { title: "Open Find on the Fire TV home screen.", description: "" },
      { title: "Select Search.", description: "" },
      { title: "Search for your selected IPTV player.", description: "" },
      { title: "Install the official app when available.", description: "" },
      { title: "Open the player.", description: "" },
      { title: "Select Add User, Add Playlist or Xtream Codes.", description: "" },
      { title: "Enter a profile name such as “Trex IPTV.”", description: "" },
      { title: "Add the server URL, username and password.", description: "" },
      { title: "Save the profile.", description: "" },
      { title: "Allow the content to load.", description: "" },
    ],
    notes: [
      "If the app is unavailable in your Amazon Appstore, support may provide an official installation source.",
      "The current website instructions may reference Downloader code 686147. Downloader codes can change, so verify the code through the official website or support before installing any file.",
      "Do not download IPTV applications from unknown websites.",
    ],
  },
  {
    id: "android-tv",
    name: "Android TV, Google TV and Android Box",
    icon: Box,
    title: "Android TV, Google TV and Android Box",
    recommendedPlayers:
      "Recommended players include IPTV Smarters Pro, TiviMate, IBO Player, GSE Smart IPTV and Perfect Player.",
    steps: [
      { title: "Open the Google Play Store.", description: "" },
      { title: "Search for your chosen player.", description: "" },
      { title: "Confirm the app developer.", description: "" },
      { title: "Install and open the app.", description: "" },
      { title: "Choose Xtream Codes or M3U.", description: "" },
      { title: "Enter your account details.", description: "" },
      { title: "Save the profile.", description: "" },
      { title: "Wait for the playlist and EPG to load.", description: "" },
    ],
    notes: ["Some advanced TiviMate features require a separate premium license."],
  },
  {
    id: "smart-tv",
    name: "Samsung, LG and Other Smart TVs",
    icon: Tv,
    title: "Samsung, LG and Other Smart TVs",
    bulletLists: [
      {
        title: "Available Smart TV players may include:",
        items: [
          "IBO Player",
          "IBO Player Pro",
          "HOT IPTV",
          "SmartOne IPTV",
          "Bob Player",
          "MYTVOnline",
          "IPTV Smarters Pro",
        ],
      },
    ],
    steps: [
      { title: "Open the television’s official app store.", description: "" },
      { title: "Search for a compatible IPTV player.", description: "" },
      { title: "Install and open it.", description: "" },
      { title: "Record the device ID or MAC address shown by the app.", description: "" },
      { title: "Open the player developer’s official activation website.", description: "" },
      { title: "Add your M3U or Xtream Codes information.", description: "" },
      { title: "Restart the television app.", description: "" },
      { title: "Wait for the playlist to update.", description: "" },
    ],
    notes: ["Any player activation payment is separate from your Trex IPTV access."],
  },
  {
    id: "ios",
    name: "iPhone and iPad",
    icon: Apple,
    title: "iPhone and iPad",
    recommendedPlayers:
      "Compatible players may include iPlayTV, IBO Player Pro, GSE Smart IPTV and VU IPTV Player.",
    steps: [
      { title: "Open the Apple App Store.", description: "" },
      { title: "Search for a compatible player.", description: "" },
      { title: "Install and open it.", description: "" },
      { title: "Select the option to add a playlist or account.", description: "" },
      { title: "Choose Xtream Codes or M3U.", description: "" },
      { title: "Enter your login details.", description: "" },
      { title: "Save the account.", description: "" },
      { title: "Allow the content to load.", description: "" },
    ],
    notes: ["Only provide permissions required for normal playback or casting."],
  },
  {
    id: "android-mobile",
    name: "Android Phones and Tablets",
    icon: Smartphone,
    title: "Android Phones and Tablets",
    steps: [
      { title: "Open the Google Play Store.", description: "" },
      { title: "Install a supported player.", description: "" },
      { title: "Open the app.", description: "" },
      { title: "Select Xtream Codes or M3U.", description: "" },
      { title: "Enter the account information.", description: "" },
      { title: "Save the profile.", description: "" },
      { title: "Open live TV, movies or series.", description: "" },
      { title: "Enable screen rotation if you prefer landscape viewing.", description: "" },
    ],
  },
  {
    id: "windows-mac",
    name: "Windows and Mac",
    icon: Laptop,
    title: "Windows and Mac",
    recommendedPlayers:
      "Available desktop options may include IPTV Expert, IBO Player, VLC and Kodi.",
    subSections: [
      {
        title: "For a dedicated IPTV player",
        steps: [
          { title: "Download the app from its official source.", description: "" },
          { title: "Open the account or playlist area.", description: "" },
          { title: "Select Xtream Codes or M3U.", description: "" },
          { title: "Enter your login details.", description: "" },
          { title: "Save the account.", description: "" },
          { title: "Wait for synchronization.", description: "" },
        ],
      },
      {
        title: "For VLC",
        steps: [
          { title: "Open VLC.", description: "" },
          {
            title: "Select Media and Open Network Stream on Windows.",
            description: "On Mac, select File and Open Network.",
          },
          { title: "Paste your M3U link.", description: "" },
          { title: "Select Play.", description: "" },
        ],
        note: "VLC supports basic playlist playback but may not provide a complete TV-style interface.",
      },
    ],
  },
  {
    id: "mag",
    name: "MAG and Supported Set-Top Boxes",
    icon: Monitor,
    title: "MAG and Supported Set-Top Boxes",
    recommendedPlayers:
      "MAG-style boxes normally use a portal URL and registered MAC address.",
    steps: [
      { title: "Open the device settings.", description: "" },
      { title: "Find the correct MAC address.", description: "" },
      { title: "Send that address through official support.", description: "" },
      { title: "Enter the supplied portal URL.", description: "" },
      { title: "Save the setting.", description: "" },
      { title: "Restart the device.", description: "" },
      { title: "Allow the portal to load.", description: "" },
    ],
    notes: ["Use the MAC address connected to the network method you intend to use."],
  },
  {
    id: "enigma2",
    name: "Enigma2 and Dreambox",
    icon: Settings2,
    title: "Enigma2 and Dreambox",
    recommendedPlayers:
      "Enigma2 devices may require a receiver-specific account format.",
    steps: [
      { title: "Connect the receiver to the internet.", description: "" },
      { title: "Record the receiver model and installed image.", description: "" },
      { title: "Contact support for the correct setup method.", description: "" },
      { title: "Follow the instructions supplied for your receiver.", description: "" },
      { title: "Restart the device.", description: "" },
      { title: "Check the imported channel list.", description: "" },
    ],
    notes: ["Do not enter unknown commands into your receiver."],
  },
  {
    id: "roku",
    name: "Roku",
    icon: Radio,
    title: "Roku",
    recommendedPlayers:
      "Roku provides fewer direct IPTV apps.",
    bulletLists: [
      {
        title: "Available methods may include:",
        items: [
          "A compatible player from the Roku Channel Store",
          "Screen mirroring from Android or Windows",
          "AirPlay from an Apple device",
          "Connecting a Fire TV or Android device",
        ],
      },
    ],
    notes: [
      "Fire TV or Android TV generally provides more IPTV player choices.",
    ],
  },
];
