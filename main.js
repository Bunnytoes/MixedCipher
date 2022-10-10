/*var MixedCipher = (function () {
  let key = "hapara".toUpperCase();
    function MixedCipher() {
    }
    MixedCipher.rBackwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( String(code.charAt(0)).toString() === ("e")) {
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
        if ( String(code.charAt(0)).toString() === ("d")) {
            MixedCipher.finalMessage = MixedCipher.decrypt(MixedCipher.finalMessage, key);
        }
        return MixedCipher.finalMessage;
    };
    MixedCipher.Backwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( String(code.charAt(0)).toString() === ("e")) {
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
        if ( String(code.charAt(0)).toString() === ("d")) {
            MixedCipher.finalMessage = MixedCipher.decrypt(MixedCipher.finalMessage, key);
        }
        return MixedCipher.finalMessage;
    };
    MixedCipher.Forwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( String(code.charAt(0)).toString() === ("e")) {
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
        if (String(code.charAt(0)).toString() === ("d")) {
            MixedCipher.finalMessage = MixedCipher.decrypt(MixedCipher.finalMessage, key);
        }
        return MixedCipher.finalMessage;
    };
    MixedCipher.rForwards = function (message,  code) {
        code = code.toLowerCase();
        key = key.toUpperCase();
        if ( String(code.charAt(0)).toString() === ("e")) {
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
        if ( String(code.charAt(0)).toString() === ("d")) {
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
*/
(function()%7Bvar%20MixedCipher%20%3D%20%2F**%20%40class%20*%2F%20(function%20()%20%7Blet%20key%20%3D%20%22hapara%22.toUpperCase()%3Bfunction%20MixedCipher()%20%7B%7DMixedCipher.rBackwards%20%3D%20function%20(message%2C%20%20code)%20%7Bcode%20%3D%20code.toLowerCase()%3Bkey%20%3D%20key.toUpperCase()%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22e%22))%20%7Bmessage%20%3D%20MixedCipher.encrypt(message%2C%20key)%3B%7DMixedCipher.finalMessage%20%3D%20%22%22%3Bfor%20(var%20i%20%3D%20message.length%3B%20i%20%3E%3D%201%3B%20--i)%20%7B%7BMixedCipher.ch%20%3D%20message.charAt(MixedCipher.valueAt)%3Bif%20(i%20%25%202%20%3D%3D%3D%201%20%7C%7C%20i%20%3D%3D%3D%201)%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20%2B%20i)%3B%7Delse%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20-%20i)%3B%7DMixedCipher.valueAt%20%2B%3D%201%3BMixedCipher.finalMessage%20%2B%3D%20MixedCipher.ch%3B%7D%3B%7DMixedCipher.valueAt%20%3D%200%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22d%22))%20%7BMixedCipher.finalMessage%20%3D%20MixedCipher.decrypt(MixedCipher.finalMessage%2C%20key)%3B%7Dreturn%20MixedCipher.finalMessage%3B%7D%3BMixedCipher.Backwards%20%3D%20function%20(message%2C%20%20code)%20%7Bcode%20%3D%20code.toLowerCase()%3Bkey%20%3D%20key.toUpperCase()%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22e%22))%20%7Bmessage%20%3D%20MixedCipher.encrypt(message%2C%20key)%3B%7DMixedCipher.finalMessage%20%3D%20%22%22%3Bfor%20(var%20i%20%3D%20message.length%3B%20i%20%3E%3D%201%3B%20--i)%20%7B%7BMixedCipher.ch%20%3D%20message.charAt(MixedCipher.valueAt)%3Bif%20(i%20%25%202%20%3D%3D%3D%201%20%7C%7C%20i%20%3D%3D%3D%201)%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20-%20i)%3B%7Delse%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20%2B%20i)%3B%7DMixedCipher.valueAt%20%2B%3D%201%3BMixedCipher.finalMessage%20%2B%3D%20MixedCipher.ch%3B%7D%3B%7DMixedCipher.valueAt%20%3D%200%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22d%22))%20%7BMixedCipher.finalMessage%20%3D%20MixedCipher.decrypt(MixedCipher.finalMessage%2C%20key)%3B%7Dreturn%20MixedCipher.finalMessage%3B%7D%3BMixedCipher.Forwards%20%3D%20function%20(message%2C%20%20code)%20%7Bcode%20%3D%20code.toLowerCase()%3Bkey%20%3D%20key.toUpperCase()%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22e%22))%20%7Bmessage%20%3D%20MixedCipher.encrypt(message%2C%20key)%3B%7DMixedCipher.finalMessage%20%3D%20%22%22%3Bfor%20(var%20i%20%3D%201%3B%20i%20%3C%3D%20message.length%3B%20%2B%2Bi)%20%7B%7BMixedCipher.ch%20%3D%20message.charAt(MixedCipher.valueAt)%3Bif%20(i%20%25%202%20%3D%3D%3D%201%20%7C%7C%20i%20%3D%3D%3D%201)%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20%2B%20i)%3B%7Delse%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20-%20i)%3B%7DMixedCipher.valueAt%20%2B%3D%201%3BMixedCipher.finalMessage%20%2B%3D%20MixedCipher.ch%3B%7D%3B%7DMixedCipher.valueAt%20%3D%200%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22d%22))%20%7BMixedCipher.finalMessage%20%3D%20MixedCipher.decrypt(MixedCipher.finalMessage%2C%20key)%3B%7Dreturn%20MixedCipher.finalMessage%3B%7D%3BMixedCipher.rForwards%20%3D%20function%20(message%2C%20%20code)%20%7Bcode%20%3D%20code.toLowerCase()%3Bkey%20%3D%20key.toUpperCase()%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22e%22))%20%7Bmessage%20%3D%20MixedCipher.encrypt(message%2C%20key)%3B%7DMixedCipher.finalMessage%20%3D%20%22%22%3Bfor%20(var%20i%20%3D%201%3B%20i%20%3C%3D%20message.length%3B%20%2B%2Bi)%20%7B%7BMixedCipher.ch%20%3D%20message.charAt(MixedCipher.valueAt)%3Bif%20(i%20%25%202%20%3D%3D%3D%201%20%7C%7C%20i%20%3D%3D%3D%201)%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20-%20i)%3B%7Delse%20%7BMixedCipher.ch%20%3D%20String.fromCharCode((MixedCipher.ch).charCodeAt(0)%20%2B%20i)%3B%7DMixedCipher.valueAt%20%2B%3D%201%3BMixedCipher.finalMessage%20%2B%3D%20MixedCipher.ch%3B%7D%3B%7DMixedCipher.valueAt%20%3D%200%3Bif%20(%20%2F*%20valueOf%20*%2FString(code.charAt(0)).toString()%20%3D%3D%3D%20(%22d%22))%20%7BMixedCipher.finalMessage%20%3D%20MixedCipher.decrypt(MixedCipher.finalMessage%2C%20key)%3B%7Dreturn%20MixedCipher.finalMessage%3B%7D%3BMixedCipher.getMessage%20%3D%20function%20()%20%7Breturn%20MixedCipher.finalMessage%3B%7D%3BMixedCipher.setMessage%20%3D%20function%20(message)%20%7Bmessage%20%3D%20MixedCipher.finalMessage%3Breturn%20message%3B%7D%3BMixedCipher.resetMessage%20%3D%20function%20()%20%7Breturn%20MixedCipher.finalMessage%20%3D%20%22%22%3B%7D%3BMixedCipher.encrypt%20%3D%20function%20(text%2C%20key)%20%7Bvar%20res%20%3D%20%22%22%3Btext%20%3D%20text.toUpperCase()%3Bfor%20(var%20i%20%3D%200%2C%20j%20%3D%200%3B%20i%20%3C%20text.length%3B%20i%2B%2B)%20%7B%7Bvar%20c%20%3D%20text.charAt(i)%3Bif%20((function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(c)%20%3C%20'A'.charCodeAt(0)%20%7C%7C%20(function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(c)%20%3E%20'Z'.charCodeAt(0))continue%3Bres%20%2B%3D%20String.fromCharCode((((function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(c)%20%2B%20(function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(key.charAt(j))%20-%202%20*%20'A'.charCodeAt(0))%20%25%2026%20%2B%20'A'.charCodeAt(0)))%3Bj%20%3D%20%2B%2Bj%20%25%20key.length%3B%7D%3B%7Dreturn%20res%3B%7D%3BMixedCipher.decrypt%20%3D%20function%20(text%2C%20key)%20%7Bvar%20res%20%3D%20%22%22%3Btext%20%3D%20text.toUpperCase()%3Bfor%20(var%20i%20%3D%200%2C%20j%20%3D%200%3B%20i%20%3C%20text.length%3B%20i%2B%2B)%20%7B%7Bvar%20c%20%3D%20text.charAt(i)%3Bif%20((function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(c)%20%3C%20'A'.charCodeAt(0)%20%7C%7C%20(function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(c)%20%3E%20'Z'.charCodeAt(0))continue%3Bres%20%2B%3D%20String.fromCharCode((((function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(c)%20-%20(function%20(c)%20%7B%20return%20c.charCodeAt%20%3D%3D%20null%20%3F%20c%20%3A%20c.charCodeAt(0)%3B%20%7D)(key.charAt(j))%20%2B%2026)%20%25%2026%20%2B%20'A'.charCodeAt(0)))%3Bj%20%3D%20%2B%2Bj%20%25%20key.length%3B%7D%3B%7Dreturn%20res%3B%7D%3BMixedCipher.ch%20%3D%20null%3BMixedCipher.valueAt%20%3D%200%3BMixedCipher.finalMessage%20%3D%20%22%22%3Breturn%20MixedCipher%3B%7D())%3BMixedCipher%5B%22__class%22%5D%20%3D%20%22MixedCipher%22%3Blet%20fnlmsg%20%3D%20''%3Blet%20mssg%20%3D%20prompt('Please%20enter%20message'%2C'')%3Blet%20mode%20%3D%20prompt('please%20select%20mode%20rb%2Fb%2Ff%2Frf')%3Blet%20eord%20%3D%20prompt('Encode%20or%20Decode%3F'%2C'')%3Bif%20(mode%20%3D%3D%3D%20'rb')%7Balert(MixedCipher.rBackwards(mssg%2Ceord))%3B%7Dif%20(mode%20%3D%3D%3D%20'b')%7Balert(MixedCipher.Backwards(mssg%2Ceord))%3B%7Dif%20(mode%20%3D%3D%3D%20'f')%7Balert(MixedCipher.Forwards(mssg%2Ceord))%3B%7Dif%20(mode%20%3D%3D%3D%20'rf')%7Balert(MixedCipher.rForwards(mssg%2Ceord))%3B%7D%7D)()
