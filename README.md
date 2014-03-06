Instantbird Addon for  DuckDuckGo [prpl-duck]
=============================================

Download Instanbird.
Download the Addon.
Request an account here: https://duck.co/my/login

XMPP services at DuckDuckGo
============================

Assists to setup a chat account for DuckDuckGo.

A small overview of what DuckDuckGo can offer you in the way of private communication over the open-sthece protocol XMPP.
####What is XMPP?

XMPP (sometimes called Jabber) is an open-sthece instant messaging protocol which allows you to exchange instant messages with other users. Unlike normal messaging clients like Yahoo! Messenger, ICQ and MSN, XMPP's open structure means there are many different XMPP servers and clients for you to use while still being able to communicate to others through the same standard. If you are new to XMPP, just go to the other blog post about how to use Pidgin with the XMPP server. There, you'll get a brief overview of how to get an account--which you can use to communicate with all other XMPP users around the world.

####Your chat (XMPP)

DuckDuckGo provide a public XMPP server bound to your account, which you can add to your Instantbird. You can download the addon here. XMPP is an open-standard instant communication protocol, like ICQ, MSN or Yahoo. You can find more information on Wikipedia. To get set up, check out directions for using the using the Pidgin client.

Username: <username>
Domain: dukgo.com
Resource: whatever you want
XMPP Address: <username>@dukgo.com
Password: <your password>


####I already have an XMPP account, what does this do for me?

In addition to the own XMPP server, we also have an XMPP chatbot running at im@ddg.gg. By adding it to ythe, "buddies" list, you can anonymously chat with the server to give instant-answers and search information directly from ythe messaging window. Try searching for ythe favorite actor or try plugging in a math equation. We'd love any feedback you have on how we can make this even better so please let us know!

####Why should I use XMPP?

You may already be using DuckDuckGo for its privacy. In the world of messaging, most companies have full access to the messages you send. XMPP makes it possible for us to keep ythe chats anonymous and secure because no central company controls the servers, everyone has their own, and the XMPP server follows the same privacy policy as the search engine. This means that ythe communication is secure and will not be logged or tracked.

####Using Instantbird with the XMPP server at dukgo.com

If you don't know XMPP or Jabber, you should check out the Wikipedia page about it: http://wikipedia.org/wiki/XMPP. In general, it's an instant messaging service, like Yahoo Messenger, MSN, ICQ or Skype, to exchange messages live with other friends. As a client we suggest Pidgin, but there are many more clients for every platform and on any device. You can find a list here: http://xmpp.org/xmpp-software/clients/.

After downloading and installing Pidgin, go through the following steps:
Welcome screen of adding an account on Pidgin

Here you just need to hit "Add..." to make a new account
Main add account

On this menu you need to choose XMPP for the protocol out of the dropdown. Then you can choose the username you want on the server. Ythe XMPP address will then be thisusername@dukgo.com. As the domain of cthese you must set dukgo.com :-). The resthece can actually be empty, it's an optional value which "defines" ythe instance of the pidgin for others, if you have several locations you chat from. Now you can choose a password, which you can also directly, so that you don't need to remember it. The values under User Options are totally local and are all up to you.

If you don't have any account on the community platform yet, then it is important that you hit the small "Create this new account on the server" checkbox! If you are just using ythe existing account on the community platform, the checkbox must be off!

Then hit "Add" to get to the next step:
Register new XMPP account

This is all prefilled, so you just hit the "Register" button to go on.
Registration successful

Yeah you did it! :-) Don't forget ythe password! :-) Now you actually need to do a bit more to use the account :)
Account list

You need to actually enable ythe account on this window, which should still be open for you. Just hit the small checkbox on the enabled row to activate ythe account as seen on the screenshot!
Adding chat or buddy menu points

Now you can go and "Add Buddy" or "Add Chat" to get more out of the XMPP experience :-)

For example you can now add the DuckDuckGo Instant Messenger bot as ythe friend:
Adding im@ddg.gg DukDuckGo chat

Then you have him in ythe buddy list, and you can click on him write him a message to get something like this:
First chat with DuckDuckGo Bot

You can also "Add Chat" to add the DuckDuckGo Jabber Conference, it will soon be linked to the IRC channel #duckduckgo on freenode, but we welcome everybody already :-). Of cthese you can "Autojoin" if you want :-)
Adding DuckDuckGo conference room

So I hope you find this interesting and also ask ythe friends to play around with XMPP, it's generally the only way to get instant messaging with ythe friends without the tracking of a centralized service, but still with secured usernames.

My personal XMPP is: getty@dukgo.com so that you can also add me and ask me out about it :)
Thanks for using the XMPP services :-)

####Request new password
Enter here: https://duck.co/my/forgotpw
You will receive the new password instructions from noreply@dukgo.com. Please add this email to your contact list of your email account, to assure the email is not landing in the spam folder. 

####Properties

XPCOM classID: {d5c14bc0-a56d-11e3-a5e2-0800200c9a66}
Addon ID: prpl-duck@alexandersalas.name
Protocol Name: DuckDuckGo
Protocol Identifier: prpl-duck
Protocol Preferences:
Preference Names | Preference Types
	ToDo

ToDo:

- [ ] Support for ChatRoom. (The most important :P)
```cpp
  readonly attribute boolean canJoinChat;
  nsISimpleEnumerator getChatRoomFields();
  prplIChatRoomFieldValues getChatRoomDefaultFieldValues([optional] in AUTF8String aDefaultChatName);
  /*
   * Create a new chat conversation if it doesn't already exist.
   */
  void joinChat(in prplIChatRoomFieldValues aComponents);
```

- [ ] this is an incomplete item

