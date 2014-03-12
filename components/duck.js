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
