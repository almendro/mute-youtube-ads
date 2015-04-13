// ==UserScript==
// @name         Mute Youtube Ads
// @description  Mutes the volume of Youtube videos whenever an ad is playing - Still in Beta, and only supports HTML5, please report any bugs you encounter
// @version      0.1
// @date         2015-04-13
// @autor        Erik Lundmark
// @contact      mail@elundmark.se
// @namespace	 http://elundmark.se/code/
// @license      MIT; http://opensource.org/licenses/MIT
// @supportURL   https://github.com/elundmark/mute-youtube-ads/issues
// @updateURL    http://elundmark.se/_files/js/mute-youtube-ads/mute-youtube-ads.meta.js
// @downloadURL  http://elundmark.se/_files/js/mute-youtube-ads/mute-youtube-ads.user.js
// @include      http*://embed.youtube.com/*
// @include      http*://embed.youtube-nocookie.com/*
// @include      http*://www.youtube.com/*
// @include      http*://www.youtube-nocookie.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA6lBMVEUAESDeLS3fLS3gLS3eLi7fLi7gLi7eLy/fLy/gLy/hLy/iLy/jLy/kLy/lMDDmMDDnMDDoMDDpMDDqMTHrMTHsMTHtMTHuMjLvMjLwMjLxMjLyMjL0MzP1MzP2MzP3MzP4NDT5NDT6NDT8NTX9NTX+NTX/NTX/Njb/Nzf/ODj/OTn/Ojr/Ozv/PDz/PT3/Pj7/Pz//QED/QUH/QkL/Q0P/RET/RUX/Rkb/R0f/SEj/SUn/Skr/S0v/Tk7/T0//UFD/U1P/VVX/YWH/d3f/eXn/fHz/gYH/ior/np7/p6f/vLz/1tb/4+P///+Oisu+AAAAAXRSTlMAQObYZgAABGRJREFUeAHsxrENA0EMA8GXdCK9/Tds4CowjA850TwRERERv0AIaqVV9UB7XJS5bscD7tKe2Y8lxPMfMetTvGp6m8O3XXPtT9uG4rDBMfKfhAYCJUu6hHVdF8qlZAWDZe++rLts/v5fZ8hDJ1Fqy+BK9hued+cH/PIc+ehIirVHqtZpnTh5NFARfnb2FcJO6vr7BHOe4aFiPEehCaKWQkAdtOoWgEO4qHkIUBM1VqA6E1AXbt0CkKtfPVAvaNQtgPpgdQvAxjL04vtIwG/2FWiYFoh4yrqHYppbAd+SAF+29xsCZkuAL/brhSjF6XQ6KRLgb1AEKy2w4DwsFIjOUURZgXuuCqifEQtbAu+5RgBrTlzaEbjnWoGLR4O1FYE5zxB4GwvuILjjxLhQwCtRf1kCb3jK7U5RsjQvMOM6Ad4XwRk9hOi2aD1slshfJ/AdBGMuCYo6kV8if51ANIEg4JKbghFwS+SvE+DhUIS3XDIr2Jp7JfLXCvB5WgUrGa4KevHB/adQIBqIeKKE+RyyJZ1yjcDpkguoDjuRDKefVQOrzSM8Q2AuPniRDjqXbF4q5bKBhmaRwJrnEtJTWZ1hyzsuSfvhawoH2hGAAQH+Pl2HQ77jgwj7NGLfQIPTMCEQv03rTj72uCOKgubBRDsLmAkBvjwVARX+WNkXzLXHQxgR4K+UurtPayKiWWG5BmjvM1YWgJtoj1bETAlESv9dd0VRxvTFKgRGAAahnPrpzKOatC1AW5+2FAi/wJaNFDi3LUANlwSuny7Jcb8KgfnTnMN0UqykwMsqBGbqCCgCgyoEJorA1dPfxhdVCIhm3KVZMHzaGON2FdOwB+BKCqzTnGO+A5YFqPd9S43oDMAwlhE0mFiMaAswU44jdxFF+bhmlmO+7ihfnirHo4XlR0CT8DX13rQRLhWdPAxsyegpr5RdYJd+emddILzEllGopHzJJdefsykN40eyBBbxljEEHziPU6IvRTiNd0RtQ+cCajMkoDCjjnMQhxzNeoFG4JoW/oNgBx1OOxvN0aycQOuw43kvMC3gHyaA03WxwKAvOIOkn3KRJ+ABJcZAIzBIUv6R+7Cfk/8xMQKCdlAg0E92DCH4QYbG/k3XDYoEJJeUvxkBYlUgQLzCj4kNgfMgQ6A7Go2+kgKSXxOzAsRKFSBIgLAkcB7kC/SSTP42/MZkmSuAVZLBX/kvDk9Qhk4QR8hhlnzCn+38l1YwT5A84w/d62sf5pkmCh+1725hg4/6CUDYenX7U6LSr1jgl+QZ/w4rfHmt5E9caa5QWM2fGCELx4hB+VZM1/hqEmjSNR5LAr99rRegC22WBB6Ad1oBx67Ag4jGWgHChsADoBho7zT6MMdFkvK7jCckoLvS6Nd1j4uo7SodwerLvwaFRs7NYheVwFpOLh4Y7MJczykE8Bhjhu+2M6/pOqXxvRbQTO/3nzThg7UaYK4PdyvaANLL/T5rNsC2X2kALdfXJ3rkyJEjR44cOUL8Bzo0ZR7xsYEYAAAAAElFTkSuQmCC
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	var muteState = false,
		MutationObserver,
		observer,
		makeArray = function (o) {
			// Turn array-like objects into Arrays
			// cwestblog.com/2015/02/11/javascript-quirk-array-slicing-with-node-lists/
			try {
				return Array.prototype.slice.call(o);
			} catch (e) {}
			for (var i = 0, l = o.length, a = new Array(i); i < l; i+=1) {
				if (i in o) {
					a[i] = o[i];
				}
			}
			return a;
		},
		log = (function (wconsole) {
			return function () {
				var args = makeArray(arguments);
				args.unshift("Mute Youtube Ads:");
				if (wconsole) {
					return wconsole.log.apply(wconsole, args);
				} else {
					throw new Error(JSON.stringify(args));
				}
			};
		}(window.console)),
		watchVideo = function (api) {
			// developers.google.com/youtube/iframe_api_reference
			/*  States
			---------------
			-1 – unstarted
			0  – ended
			1  – playing
			2  – paused
			3  – buffering
			5  – video cued
			---------------
			*/
			if (api.dataset.muteYoutubeAdsUserscriptAttached === "true") return;
			api.dataset.muteYoutubeAdsUserscriptAttached = "true";
			var mute = (function (t) {
					return function () {
						t.mute();
						return t.isMuted();
					};
				}(api)),
				unMute = (function (t) {
					return function () {
						t.unMute();
						return t.isMuted();
					};
				}(api));
			// Always start it muted
			muteState = mute();
			api.addEventListener("onStateChange", function (e) {
				log("onStateChange", e);
				if (e === 1) {
					// Only unmute when playing (1 doesn't appear when ads are playing)
					muteState = unMute();
				} else {
					muteState = mute();
				}
				log("[DEBUG] isMuted:", muteState);
			});
			api.addEventListener("onApiChange", function (e) {
				log("onApiChange", e);
				// Check if we need to mute the video; check the state after a delay
				setTimeout(function () {
					var apiState = api.getPlayerState();
					if (apiState === 1) {
						muteState = unMute();
					} else {
						muteState = mute();
					}
					log("[DEBUG]", "onApiChange:", apiState, "isMuted:", muteState);
				}, 200);
			});
			api.addEventListener("onError", function (e) {
				log("[DEBUG] onError event:", e);
			});
			log("watchVideo:", api.id);
		},
		validPlayerIds = [
			"c4-player",
			"movie_player",
			"player_uid_"
		],
		embeddedPlayerIdPatt = /(^player_uid_).+/,
		getPlayer = function () {
			/* embedded clasName *= html5-video-player el-embedded ? */
			return (document.querySelector("#c4-player")                       // Channel video
			 	|| document.querySelector("#player div#movie_player")          // Default HTML5 Video
			 	|| document.querySelector("#player > div.html5-video-player")  // Embedded HTML5
			 );
		},
		initCheck = function (mutations) {
			mutations.forEach(function (mutation) {
				if (!mutation.addedNodes || mutation.addedNodes.length === 0) return;
				makeArray(mutation.addedNodes).forEach(function (node) {
					if (node && node.id && node.nodeName.toUpperCase() === "DIV") {
						// Match embedded player id
						var nodeId = node.id.replace(embeddedPlayerIdPatt, "$1");
						if (validPlayerIds.indexOf(nodeId) >= 0) {
							watchVideo(node);
						}
					}
				});
			});
		};
	window.addEventListener("load", function () {
		// The general idea is to treat every newly found video id as an active video,
		//  thereby solving the prolblem of flash and html5 on the same page,
		//  plus the channel video "#c4-plaer" appearing after "#movie_player"
		var player;
		MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		if (document.body.dataset.muteYoutubeAdsUserscript === "loaded") {
			return log("already loaded: exit");
		} else {
			document.body.dataset.muteYoutubeAdsUserscript = "loaded";
		}
		log("window load");
		if ((player=getPlayer())) {
			// Start watching any videos already in the DOM
			watchVideo(player);
		}
		// Start checking for injected DIVs
		observer = new MutationObserver(initCheck);
		return observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: false,
			characterData: false
		});
	});
	log("EOF");
}());
