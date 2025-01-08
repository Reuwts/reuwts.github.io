// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Divine Servers";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Initiating jump to hyperspace...",
  "Preparing for Battle with Seperatist Army.",
  "Entering the Unknown Regions...",
  "Scanning Galaxy for Potential Threats...",
  "Navigating Through the Asteroid Field in the Outer Rim."
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 10000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
