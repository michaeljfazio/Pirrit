Some malicious code that I found running on my new MacBook Pro. 

I probably managed to become infected after searching from MAME ROMs.

The file "ps-ef-grep-osa" contains the relevant parts of my process table after running "ps -ef | grep osa". It would appear that the malicious javascript code is being bootstrapped using Apple's Open Scripting Architecture framework.

The file "malicious.js" contains the main payload.
