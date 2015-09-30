# **This project is no longer maintained**

# Mute Youtube Ads

Very simple idea: Mute the volume whenever an ad is playing. Applies to both the website and embeds. If you still use Flash to view videos, sorry, you're left out.

This is a re-hash of my [old userscript](http://userscripts-mirror.org/scripts/show/153701) which mainly worked for Flash videos and wasn't very well written. Having not visited Youtube for over 2 years I forgot all about this, but now that I'm back watching Youtube again I just had to get this script working again.

_This project is mainly maintained on [github](https://github.com/elundmark/mute-youtube-ads), so please report any issues or feature requests @ [github.com/elundmark/mute-youtube-ads/issues](https://github.com/elundmark/mute-youtube-ads/issues)._

## How to use

1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for Firefox, [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) for Google Chrome / Chromium, or [Violent Monkey](https://addons.opera.com/en/extensions/details/violent-monkey/) for Opera (should work but I don't check if it does very often).
2. Install the userscript itself from any of the following repositories:
	* **[openuserjs.org](https://openuserjs.org/?q=mute+youtube+ads)**
	* **[greasyfork.org](https://greasyfork.org/en/scripts/search?q=mute+youtube+ads)**
	* And you can of course also install it from this repository.
3. Disable _Require Secure Updates_ in your userscript engine to enable automatic updates.

_Tested on Firefox 35+ (GreaseMonkey) and Google Chrome 41+ with Tampermonkey. I have not checked if it works with Chrome's built-in userscript installer, yet. But it should._

## [Changelog](https://github.com/elundmark/mute-youtube-ads/blob/master/Changelog.md)

## Features

- **Mutes all ads on Youtube videos**
- It does this by setting the volume to "mute" on pageload, and then turns the volume back on when the video starts playing.
- This also applies to when you pause the video, or another ad comes on in the middle of the video.

## Applies to these sites

* [http\*://embed.youtube.com/\*](http://embed.youtube.com/)
* [http\*://embed.youtube-nocookie.com/\*](http://embed.youtube-nocookie.com/)
* [http\*://www.youtube.com/\*](http://www.youtube.com/)
* [http\*://www.youtube-nocookie.com/\*](http://www.youtube-nocookie.com/)

## Known Issues

* When I've tried this with TamperMonkey, it sometimes doesn't work when I use it alongside other userscripts for Youtube, [Yays!](http://eugenox.appspot.com/script/yays) especially. It this happens to you try changing the order in which they get executed, and put this script **last** in order, or atleast make sure it's the last one loaded for Youtube. This solves the issue for me.
  - It could also be that TamperMonkey hadn't executed my script at all for some reason, who knows...
  - If you know how, please check the console and copy the output before posting an issue.
* Does not work with Flash, and I'm not planning on adding support for it because Youtube's Api has it listed as "old" (a.k.a. dead).

## Reporting bugs

Please report all issues [here on Github](https://github.com/elundmark/mute-youtube-ads/issues).
** If you know how, please check the console and copy the output before posting an issue, thx! **

My email and info: [https://github.com/elundmark](https://github.com/elundmark)

## License

This UserScript is licensed under The MIT License (MIT) - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
