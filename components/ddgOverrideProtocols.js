/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is by Alexander Salas, released
 * 2014.
 *
 * The Initial Developer of the Original Code is
 * Benedikt Pfeifer <benediktp@ymail.com>
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

let {interfaces: Ci, utils: Cu} = Components;

Cu.import("resource:///modules/imXPCOMUtils.jsm");
Cu.import("resource:///modules/jsProtoHelper.jsm");
Cu.import("resource:///modules/xmpp.jsm");
Cu.import("resource:///modules/xmpp-session.jsm");

function DuckDuckGoAccount(aProtoInstance, aImAccount) {
  this._init(aProtoInstance, aImAccount);
}

DuckDuckGoAccount.prototype = {
  __proto__: XMPPAccountPrototype,
  get canJoinChat() true,
  connect: function() {
    this._jid = this._parseJID(this.name.replace("@","\\40") + "@dukgo.com/instantbird");
    this._connection = new XMPPSession("dukgo.com", 5222,
                                       "opportunistic_tls", this._jid,
                                       this.imAccount.password, this);
  }
};

function DuckDuckGoProtocol() { }

DuckDuckGoProtocol.prototype = {
  __proto__: GenericProtocolPrototype,
  get normalizedName() "duck",
  get name() "DuckDuckGo",
  get iconBaseURI() "chrome://prpl-duck/skin/",
  getAccount: function(aImAccount) new DuckDuckGoAccount(this, aImAccount),
  get chatHasTopic() true,
  classID: Components.ID("{d5c14bc0-a56d-11e3-a5e2-0800200c9a66}")
};

const NSGetFactory = XPCOMUtils.generateNSGetFactory([DuckDuckGoProtocol]);

/* {"linkedin":"","twitter":"","web":"http://alexandersalas.name","whyddg":"","email":"a.salas at ieee.org","realname":"","city":"","languages":{"es_VE":5,"en_US":2},"facebook":"","about":"","gravatar_email":"4a14258e09d19be8002d418c9a633baa","openid_server":"http://www.myopenid.com/server","country":"","reddit":"","birth_country":"","imgur":"","username":"alexandersalas","youtube":"","openid_delegate":"http://alexandersalas.myopenid.com/","deviantart":"","github":"https://github.com/alexsalas","headline":"Alexander Salas","flickr":""} */
