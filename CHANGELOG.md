# Kanmi Sequenzia Framework
Do not mix and match Kanmi and Sequenzia JFS versions, v1.5 must use v1.5 across all software

## v17.1 (RC1 JFS v1.5)
### Important Notes
This update requires Kanmi v19.1 to be applied
### Change Log
- **BETA** Added new On-the-fly Spanned File Streaming, This allows any file to be accessible with the need to request a for download via a FileWorker. This system will used on the FileWorker as well to replace the current process.
- Podcasts feeds will now return all files regardless if there directly accessible and will return streamable links when necessary
- Updated to reduce the need for fileworker interactions
- Updates ecosystem.config.js

## v17 (RC1 JFS v1.5)
### Important Notes
This update requires Kanmi v19 to be applied

### Change Log
Severity: **Critical**<br>
- All management for items are merged into one button and uses a model to select the action
- Moved Repair Spanned File button to new manage menu for admins
- Added support to add custom items to index sidebar
- Server icon order has been reversed so that icons on the left are overlapping right items. AuthWare servers are no longer pushed to the top. Position is completely in control
- Fixed various issues with the back button and pagelist functions
- Added more URI encoding to prevent page loops when attempting to go back
- Added toggle to disable showing a display in the History view, you will always be able to see the display if you implicit request it from the Ambient History view
- Users can now set a name overide that will show insted of there discord name
- Corrected another issue with Ambient Displays looping due to bad sync pulse for a master that is either offline or did not boot fast enough
- Pageinator moved to total count number
- Added support to set URI overide for virtual channels
- Added support to set URI overide for channels
- Adjusted conditions for when a redirect will occur, due to a issue with ADS Mobile where if you favorite a image when session expires it will try to request a an impossible URL
- Updated to new attachment Hash
- Uses Discord CDN and Media CDN for preview images when ever possible, will use SizeH and SizeW to calculate the resolution request to the CDN
- Now returns server image inplace of default image for podcasts
- Added server image override to config file to add high quality images for things like podcasts
- Added support for JFIF file format
- Added support for Sequenzia Randomizer Embed History
- Added support to support by album add date
- Removed local cacheing support for now until it can be rewritten

### Configuration File Updates
None of the options are required for operations
#### host.config.json
```json
{
"telegram_secret" : "SECRETFROMTLEGRAM",
"telegram_callback_url" : "https://seq.moe/telegram/callback",
"telegram_bot_name" : "sequenzia_authware_bot"
}
```
- Added Telegram Login

#### web.config.json
```json
{
  "pinned_user": "716194461306191914",
  "index_items": [
    {
      "tooltip": "Global Artists Directory",
      "name": "Artists",
      "url": "/artists"
    },
    null,
    {
      "tooltip": "Images from Twitter",
      "name": "Twitter Images",
      "url": "/gallery?search=text:Twitter Image&title=Twitter Images&numdays=120"
    },
    {
      "tooltip": "Images from Pixiv",
      "name": "Pixiv Images",
      "url": "/gallery?search=text:\uD83C\uDF86 &title=Pixiv Images&numdays=120"
    },
    null,
    {
      "tooltip": "Media over 8MB",
      "name": "Large Media",
      "url": "/gallery?search=text:\uD83E\uDDE9 File &title=Large Media&numdays=120"
    }
  ],
  "server_avatar_overides": {
    "716206086947864617": "https://cdn.discordapp.com/attachments/827315100998172693/895151683473113088/juzo1.png",
    "849858527375523870": "https://cdn.discordapp.com/attachments/827315100998172693/895151684991451166/juzo2.png"
  }
}
```
- Set Pinned User in Index
- Set items for Index menu
- Set server image override for high quality images for Podcasts and RSS feed images

## v16 - Skipped

## v15 (RC1 JFS v1.4)
Severity: **Medium**<br>
- Readded the "waves" background to Files view
- Added slight translucent background to file list for contrast with background
- Added history search
- Removed history view from Ambient System
- Clicking a display will now search its history in the normal gallery view
- Added Sort by Displayed history
- Added new History button to side bar to see all history
- Added True Random to ADS Lite, this will extend history to 50000 to keep deep history of images to prevent duplicate images, once it has detected its running out of images it will reset
- History depth has been increased to 75 images
- Added browse history
- Updated About dialog to include list of beta testers
- Fixed bugs with Ambient Display History, Config,  and Set as ADS
- Custom name can be set for all ADS displays (You can set a `displayname=dis001` as set a Friendly Name as `My Pictures`)
- Custom ADS Names will now be displayed in history and gallery view
- Homepage can now have custom image request set from Ambient Settings
- Errors on Ambient Displays are more clear of what actually happened instead of generic "Failed to get response"
- ADS Lite has been overhauled to use much lighter weight client side code and now all request generation happens server side to keep display settings in sync instantly.
- Added configuration option to set discord join link for login
- Added configuration for telegram login config, forgot to move those out
- Fixed Album Manager to remember messageid when you create a new album and still need to add the last item to a album
- Now Album Manager does not close after adding item
- Videos will now appear in gallery view
- Videos with out thumbnails will be send for generation
- Added URI overides for classes
- Added custom support text
- Added custom pinned posts userid
- Moving urls that do not require pre-proccessing to direct hash changes, this makes it possible to do "Open in new tab" or copying lines that actually have values

## v14 (RC1 JFS v1.4)
Severity: Low
- Displays full image at all times if file type is GIF
- Fixes various issues with gallery selection mode
- Migrated some functions that used standard JS selectors to JQuery


## v13 (RC1 JFS v1.4)
Severity: High
- LOTS of updates to CSS to address all sorts of issues
- ADS Lite default image updated
- ADS Lite hides all display parts until system has completely booted up completely
- Added pins=false supports, this returns images that are not Favorited
- Added "Not Favotired" option to ADS Lite config
- Added confirmation when attempting to delete a display or history
- Started migration from req_uri.includes to params.has and other URL parameter commands insted of reading the string raw
- Added more improvements to JuneOS
- Will redirect non-JuneOS URLs that are handled by JuneOS
- Fixed issues with single item display
- Added server icons to sidebar and stacked them on top each other for fancy effects
- Moved page list to "..." icon in navigator
- Various other small fixes and improvements

Added support for JFS 2.0 Path names (finally)
All these folder paths are accepted
```SERVER:\CLASS\CHANNEL
\SERVER\CLASS\CHANNEL
SERVER:CLASS:CHANNEL
SERVER:\CLASS\*
\SERVER\CLASS\*
SERVER:CLASS:*
SERVER:\*\*
\SERVER\*\*
SERVER:*:*
\CLASS\CHANNEL
CLASS:CHANNEL
\CLASS\*
CLASS:*
\CLASS
CLASS
```
Note that when ever defining a server in the path you must always specify the channel as * if you want all items ts in the class

## v12 (RC1 JFS v1.4)
Severity: Critical (if running version 11)
- More robust URL handling and page navigation
- Logo is moved to sidebar from toolbar
- Logo in mobile menu
- Now handles # and #_ to ignore and replace history
- Fixed offset correction when removing items from the page
- Various mobile and desktop fixes

## v11 (RC1 JFS v1.4)
Severity: Medium
- ADS Lite Displays now show color bars warning bars
- Added macOS Plash setup instructions
- Moved Random/Favorite icons to better positions in the Filter menu
- Corrected various UI issues
- Logo and extended path info now hides on scroll
- Added animations for hiding of info on scroll
- Added Class icon to title bar in place of generic type icons
- Added server avatar icon to title bar when accessing channel or folders that belong to a single server
- Added virtual folder path to title bar when accessing inner channels
- Added full width results option
- Utilizing cookies to store last values:
  Last Upload Channel, Last Upload Server, Image Grid Size, Full Width Page Mode
- Added JuneOS, this is now what the page browser will be called. It will handle all browser history events. This changes the URL paths to be in the hash but previous URLs will always redirect to JOS. JSON requests are uneffected.
- Fixed endless loop of history from using search
- Ambient History has been re-sorted: Defaults, Ambient Displays, Mobile Services, Desktop Service
- Added direct URI path bar, you can access the path bar by clicking the page title
- Added "_h" value to track how many page browser push states have happened, this allow the back button to go back to the first page and now get trapped going trough all the previous pages in the paginator
- Added "Send to ADS" option to use page results as images on a Ambient Display
- Image options are now hidden by default in the ADS Settings page

## v10 (RC1 JFS v1.4)
Severity: Critical
- Added various headers to external requests

Update is required for ADS and other services to function

## v9 (RC1 JFS v1.4)
Severity: Low
- Added support for Sessions with source 900 to upload via a bypass in the headers

## v8 (RC1 JFS v1.4)
- Fixes issue with cards url that will cause internal server error

## v7 (RC1 JFS v1.4)
Severity: Medium
- Added check before attempting to parse user agent data

## v6 (RC1 JFS v1.4)
Severity: Medium
- Disables High-speed database updates when moving files between channels and requires data to be actually moved before it will appear in the new channel
- Various cosmetic issues

## v5 (RC1 JFS v1.4)
- Fixes big where users with null avatar will not be able to reload sessions
- Corrected issues with single item view effecting pages outside of gallery mode

## v4 (RC1 JFS v1.4)
Update 4 for Sequenzia
Dropping _v# from version as the discord gateway version is irrelevant to Sequenzia, but adding the Interface Version of the Kanmi Interface
- Added support to rebuild/re-request a file from the web interface
- Fixed URL not being correct in Notification for full file build