// node_modules/typed.js/dist/typed.module.js
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t2) {
    for (var s = 1;s < arguments.length; s++) {
      var e = arguments[s];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t2[n] = e[n]);
    }
    return t2;
  }, t.apply(this, arguments);
}
var s = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: true, shuffle: false, backDelay: 700, fadeOut: false, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: false, loopCount: Infinity, showCursor: true, cursorChar: "|", autoInsertCss: true, attr: null, bindInputFocusEvents: false, contentType: "html", onBegin: function(t2) {}, onComplete: function(t2) {}, preStringTyped: function(t2, s2) {}, onStringTyped: function(t2, s2) {}, onLastStringBackspaced: function(t2) {}, onTypingPaused: function(t2, s2) {}, onTypingResumed: function(t2, s2) {}, onReset: function(t2) {}, onStop: function(t2, s2) {}, onStart: function(t2, s2) {}, onDestroy: function(t2) {} };
var e = new (/* @__PURE__ */ function() {
  function e2() {}
  var n = e2.prototype;
  return n.load = function(e3, n2, i) {
    if (e3.el = typeof i == "string" ? document.querySelector(i) : i, e3.options = t({}, s, n2), e3.isInput = e3.el.tagName.toLowerCase() === "input", e3.attr = e3.options.attr, e3.bindInputFocusEvents = e3.options.bindInputFocusEvents, e3.showCursor = !e3.isInput && e3.options.showCursor, e3.cursorChar = e3.options.cursorChar, e3.cursorBlinking = true, e3.elContent = e3.attr ? e3.el.getAttribute(e3.attr) : e3.el.textContent, e3.contentType = e3.options.contentType, e3.typeSpeed = e3.options.typeSpeed, e3.startDelay = e3.options.startDelay, e3.backSpeed = e3.options.backSpeed, e3.smartBackspace = e3.options.smartBackspace, e3.backDelay = e3.options.backDelay, e3.fadeOut = e3.options.fadeOut, e3.fadeOutClass = e3.options.fadeOutClass, e3.fadeOutDelay = e3.options.fadeOutDelay, e3.isPaused = false, e3.strings = e3.options.strings.map(function(t2) {
      return t2.trim();
    }), e3.stringsElement = typeof e3.options.stringsElement == "string" ? document.querySelector(e3.options.stringsElement) : e3.options.stringsElement, e3.stringsElement) {
      e3.strings = [], e3.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
      var r = Array.prototype.slice.apply(e3.stringsElement.children), o = r.length;
      if (o)
        for (var a = 0;a < o; a += 1)
          e3.strings.push(r[a].innerHTML.trim());
    }
    for (var u in e3.strPos = 0, e3.currentElContent = this.getCurrentElContent(e3), e3.currentElContent && e3.currentElContent.length > 0 && (e3.strPos = e3.currentElContent.length - 1, e3.strings.unshift(e3.currentElContent)), e3.sequence = [], e3.strings)
      e3.sequence[u] = u;
    e3.arrayPos = 0, e3.stopNum = 0, e3.loop = e3.options.loop, e3.loopCount = e3.options.loopCount, e3.curLoop = 0, e3.shuffle = e3.options.shuffle, e3.pause = { status: false, typewrite: true, curString: "", curStrPos: 0 }, e3.typingComplete = false, e3.autoInsertCss = e3.options.autoInsertCss, e3.autoInsertCss && (this.appendCursorAnimationCss(e3), this.appendFadeOutAnimationCss(e3));
  }, n.getCurrentElContent = function(t2) {
    return t2.attr ? t2.el.getAttribute(t2.attr) : t2.isInput ? t2.el.value : t2.contentType === "html" ? t2.el.innerHTML : t2.el.textContent;
  }, n.appendCursorAnimationCss = function(t2) {
    var s2 = "data-typed-js-cursor-css";
    if (t2.showCursor && !document.querySelector("[" + s2 + "]")) {
      var e3 = document.createElement("style");
      e3.setAttribute(s2, "true"), e3.innerHTML = `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `, document.body.appendChild(e3);
    }
  }, n.appendFadeOutAnimationCss = function(t2) {
    var s2 = "data-typed-fadeout-js-css";
    if (t2.fadeOut && !document.querySelector("[" + s2 + "]")) {
      var e3 = document.createElement("style");
      e3.setAttribute(s2, "true"), e3.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `, document.body.appendChild(e3);
    }
  }, e2;
}());
var n = new (/* @__PURE__ */ function() {
  function t2() {}
  var s2 = t2.prototype;
  return s2.typeHtmlChars = function(t3, s3, e2) {
    if (e2.contentType !== "html")
      return s3;
    var n2 = t3.substring(s3).charAt(0);
    if (n2 === "<" || n2 === "&") {
      var i;
      for (i = n2 === "<" ? ">" : ";";t3.substring(s3 + 1).charAt(0) !== i && !(1 + ++s3 > t3.length); )
        ;
      s3++;
    }
    return s3;
  }, s2.backSpaceHtmlChars = function(t3, s3, e2) {
    if (e2.contentType !== "html")
      return s3;
    var n2 = t3.substring(s3).charAt(0);
    if (n2 === ">" || n2 === ";") {
      var i;
      for (i = n2 === ">" ? "<" : "&";t3.substring(s3 - 1).charAt(0) !== i && !(--s3 < 0); )
        ;
      s3--;
    }
    return s3;
  }, t2;
}());
var i = /* @__PURE__ */ function() {
  function t2(t3, s3) {
    e.load(this, s3, t3), this.begin();
  }
  var s2 = t2.prototype;
  return s2.toggle = function() {
    this.pause.status ? this.start() : this.stop();
  }, s2.stop = function() {
    this.typingComplete || this.pause.status || (this.toggleBlinking(true), this.pause.status = true, this.options.onStop(this.arrayPos, this));
  }, s2.start = function() {
    this.typingComplete || this.pause.status && (this.pause.status = false, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
  }, s2.destroy = function() {
    this.reset(false), this.options.onDestroy(this);
  }, s2.reset = function(t3) {
    t3 === undefined && (t3 = true), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t3 && (this.insertCursor(), this.options.onReset(this), this.begin());
  }, s2.begin = function() {
    var t3 = this;
    this.options.onBegin(this), this.typingComplete = false, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
      t3.strPos === 0 ? t3.typewrite(t3.strings[t3.sequence[t3.arrayPos]], t3.strPos) : t3.backspace(t3.strings[t3.sequence[t3.arrayPos]], t3.strPos);
    }, this.startDelay);
  }, s2.typewrite = function(t3, s3) {
    var e2 = this;
    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
    var i2 = this.humanizer(this.typeSpeed), r = 1;
    this.pause.status !== true ? this.timeout = setTimeout(function() {
      s3 = n.typeHtmlChars(t3, s3, e2);
      var i3 = 0, o = t3.substring(s3);
      if (o.charAt(0) === "^" && /^\^\d+/.test(o)) {
        var a = 1;
        a += (o = /\d+/.exec(o)[0]).length, i3 = parseInt(o), e2.temporaryPause = true, e2.options.onTypingPaused(e2.arrayPos, e2), t3 = t3.substring(0, s3) + t3.substring(s3 + a), e2.toggleBlinking(true);
      }
      if (o.charAt(0) === "`") {
        for (;t3.substring(s3 + r).charAt(0) !== "`" && (r++, !(s3 + r > t3.length)); )
          ;
        var u = t3.substring(0, s3), p = t3.substring(u.length + 1, s3 + r), c = t3.substring(s3 + r + 1);
        t3 = u + p + c, r--;
      }
      e2.timeout = setTimeout(function() {
        e2.toggleBlinking(false), s3 >= t3.length ? e2.doneTyping(t3, s3) : e2.keepTyping(t3, s3, r), e2.temporaryPause && (e2.temporaryPause = false, e2.options.onTypingResumed(e2.arrayPos, e2));
      }, i3);
    }, i2) : this.setPauseStatus(t3, s3, true);
  }, s2.keepTyping = function(t3, s3, e2) {
    s3 === 0 && (this.toggleBlinking(false), this.options.preStringTyped(this.arrayPos, this));
    var n2 = t3.substring(0, s3 += e2);
    this.replaceText(n2), this.typewrite(t3, s3);
  }, s2.doneTyping = function(t3, s3) {
    var e2 = this;
    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(true), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === false || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
      e2.backspace(t3, s3);
    }, this.backDelay));
  }, s2.backspace = function(t3, s3) {
    var e2 = this;
    if (this.pause.status !== true) {
      if (this.fadeOut)
        return this.initFadeOut();
      this.toggleBlinking(false);
      var i2 = this.humanizer(this.backSpeed);
      this.timeout = setTimeout(function() {
        s3 = n.backSpaceHtmlChars(t3, s3, e2);
        var i3 = t3.substring(0, s3);
        if (e2.replaceText(i3), e2.smartBackspace) {
          var r = e2.strings[e2.arrayPos + 1];
          e2.stopNum = r && i3 === r.substring(0, s3) ? s3 : 0;
        }
        s3 > e2.stopNum ? (s3--, e2.backspace(t3, s3)) : s3 <= e2.stopNum && (e2.arrayPos++, e2.arrayPos === e2.strings.length ? (e2.arrayPos = 0, e2.options.onLastStringBackspaced(), e2.shuffleStringsIfNeeded(), e2.begin()) : e2.typewrite(e2.strings[e2.sequence[e2.arrayPos]], s3));
      }, i2);
    } else
      this.setPauseStatus(t3, s3, false);
  }, s2.complete = function() {
    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = true;
  }, s2.setPauseStatus = function(t3, s3, e2) {
    this.pause.typewrite = e2, this.pause.curString = t3, this.pause.curStrPos = s3;
  }, s2.toggleBlinking = function(t3) {
    this.cursor && (this.pause.status || this.cursorBlinking !== t3 && (this.cursorBlinking = t3, t3 ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
  }, s2.humanizer = function(t3) {
    return Math.round(Math.random() * t3 / 2) + t3;
  }, s2.shuffleStringsIfNeeded = function() {
    this.shuffle && (this.sequence = this.sequence.sort(function() {
      return Math.random() - 0.5;
    }));
  }, s2.initFadeOut = function() {
    var t3 = this;
    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
      t3.arrayPos++, t3.replaceText(""), t3.strings.length > t3.arrayPos ? t3.typewrite(t3.strings[t3.sequence[t3.arrayPos]], 0) : (t3.typewrite(t3.strings[0], 0), t3.arrayPos = 0);
    }, this.fadeOutDelay);
  }, s2.replaceText = function(t3) {
    this.attr ? this.el.setAttribute(this.attr, t3) : this.isInput ? this.el.value = t3 : this.contentType === "html" ? this.el.innerHTML = t3 : this.el.textContent = t3;
  }, s2.bindFocusEvents = function() {
    var t3 = this;
    this.isInput && (this.el.addEventListener("focus", function(s3) {
      t3.stop();
    }), this.el.addEventListener("blur", function(s3) {
      t3.el.value && t3.el.value.length !== 0 || t3.start();
    }));
  }, s2.insertCursor = function() {
    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", true), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
  }, t2;
}();

// dist/main.js
var myTyped = new i("#typedText", {
  strings: ["Software Developer", "Java Developer", "Web Developer"]
});
