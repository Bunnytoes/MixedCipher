var MixedCipher = /** @class */ (function () {
  let key = "hapara".toUpperCase();
    function MixedCipher() {
    }
    MixedCipher.rBackwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( /* valueOf */String(code.charAt(0)).toString() === ("e")) {
            message = MixedCipher.encrypt(message, key);
        }
        MixedCipher.finalMessage = "";
        for (var i = message.length; i >= 1; --i) {
            {
                MixedCipher.ch = message.charAt(MixedCipher.valueAt);
                if (i % 2 === 1 || i === 1) {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) + i);
                }
                else {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) - i);
                }
                MixedCipher.valueAt += 1;
                MixedCipher.finalMessage += MixedCipher.ch;
            }
            ;
        }
        MixedCipher.valueAt = 0;
        if ( /* valueOf */String(code.charAt(0)).toString() === ("d")) {
            MixedCipher.finalMessage = MixedCipher.decrypt(MixedCipher.finalMessage, key);
        }
        return MixedCipher.finalMessage;
    };
    MixedCipher.Backwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( /* valueOf */String(code.charAt(0)).toString() === ("e")) {
            message = MixedCipher.encrypt(message, key);
        }
        MixedCipher.finalMessage = "";
        for (var i = message.length; i >= 1; --i) {
            {
                MixedCipher.ch = message.charAt(MixedCipher.valueAt);
                if (i % 2 === 1 || i === 1) {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) - i);
                }
                else {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) + i);
                }
                MixedCipher.valueAt += 1;
                MixedCipher.finalMessage += MixedCipher.ch;
            }
            ;
        }
        MixedCipher.valueAt = 0;
        if ( /* valueOf */String(code.charAt(0)).toString() === ("d")) {
            MixedCipher.finalMessage = MixedCipher.decrypt(MixedCipher.finalMessage, key);
        }
        return MixedCipher.finalMessage;
    };
    MixedCipher.Forwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( /* valueOf */String(code.charAt(0)).toString() === ("e")) {
            message = MixedCipher.encrypt(message, key);
        }
        MixedCipher.finalMessage = "";
        for (var i = 1; i <= message.length; ++i) {
            {
                MixedCipher.ch = message.charAt(MixedCipher.valueAt);
                if (i % 2 === 1 || i === 1) {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) + i);
                }
                else {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) - i);
                }
                MixedCipher.valueAt += 1;
                MixedCipher.finalMessage += MixedCipher.ch;
            }
            ;
        }
        MixedCipher.valueAt = 0;
        if ( /* valueOf */String(code.charAt(0)).toString() === ("d")) {
            MixedCipher.finalMessage = MixedCipher.decrypt(MixedCipher.finalMessage, key);
        }
        return MixedCipher.finalMessage;
    };
    MixedCipher.rForwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( /* valueOf */String(code.charAt(0)).toString() === ("e")) {
            message = MixedCipher.encrypt(message, key);
        }
        MixedCipher.finalMessage = "";
        for (var i = 1; i <= message.length; ++i) {
            {
                MixedCipher.ch = message.charAt(MixedCipher.valueAt);
                if (i % 2 === 1 || i === 1) {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) - i);
                }
                else {
                    MixedCipher.ch = String.fromCharCode((MixedCipher.ch).charCodeAt(0) + i);
                }
                MixedCipher.valueAt += 1;
                MixedCipher.finalMessage += MixedCipher.ch;
            }
            ;
        }
        MixedCipher.valueAt = 0;
        if ( /* valueOf */String(code.charAt(0)).toString() === ("d")) {
            MixedCipher.finalMessage = MixedCipher.decrypt(MixedCipher.finalMessage, key);
        }
        return MixedCipher.finalMessage;
    };
    MixedCipher.getMessage = function () {
        return MixedCipher.finalMessage;
    };
    MixedCipher.setMessage = function (message) {
        message = MixedCipher.finalMessage;
        return message;
    };
    MixedCipher.resetMessage = function () {
        return MixedCipher.finalMessage = "";
    };
    MixedCipher.encrypt = function (text, key) {
        var res = "";
        text = text.toUpperCase();
        for (var i = 0, j = 0; i < text.length; i++) {
            {
                var c = text.charAt(i);
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) < 'A'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) > 'Z'.charCodeAt(0))
                    continue;
                res += String.fromCharCode((((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) + (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(key.charAt(j)) - 2 * 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0)));
                j = ++j % key.length;
            }
            ;
        }
        return res;
    };
    MixedCipher.decrypt = function (text, key) {
        var res = "";
        text = text.toUpperCase();
        for (var i = 0, j = 0; i < text.length; i++) {
            {
                var c = text.charAt(i);
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) < 'A'.charCodeAt(0) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) > 'Z'.charCodeAt(0))
                    continue;
                res += String.fromCharCode((((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c) - (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(key.charAt(j)) + 26) % 26 + 'A'.charCodeAt(0)));
                j = ++j % key.length;
            }
            ;
        }
        return res;
    };
    MixedCipher.ch = null;
    MixedCipher.valueAt = 0;
    MixedCipher.finalMessage = "";
    return MixedCipher;
}());
MixedCipher["__class"] = "MixedCipher";
let isRun = true;
if (isRun === true)
{
run();
}else{
}
function run ()
{
let mssg = prompt('Please enter message','');
let mode = prompt('please select mode rb/b/f/rf');
let eord = prompt('Encode or Decode?','');
if (mode === 'rb')
{
 alert(MixedCipher.rBackwards(mssg,eord));
}
if (mode === 'b')
{
alert(MixedCipher.Backwards(mssg,eord));
}
if (mode === 'f')
{
alert(MixedCipher.Forwards(mssg,eord));
}
if (mode === 'rf')
{
alert(MixedCipher.rForwards(mssg,eord));
}
}
