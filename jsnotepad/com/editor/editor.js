/* exported $editor */

var $editor = (function() {
  var $DOM = $(''
      + '<div class="notepad-editor">'
        + '<textarea spellcheck="false"></textarea>'
      + '</div>');

  var $textArea = $DOM.find('textarea');

  function resize(isBig) {
    if(isBig) {
      $DOM.css({bottom: '21px'});
    } else {
      $DOM.css({bottom: '0'});
    }
  }

  function show() {
    $('body').append($DOM);
    $textArea.trigger('focus');
  }

  return {show: show, resize: resize};
}());

/*

let $editor = (() => {
  let $DOM = $(`

    <div class="notepad-editor">

      <textarea spellcheck="false" auto-size="none"></textarea>

    </div>`);

  let $textArea = $DOM.find('textarea');

  let cfg = {
    wrap:           false,
    posHandler:     null,
    contentHandler: null
  };

  let bSelect = false;

  let resize = (isBig) => {
    if(isBig) {
      $DOM.css({bottom: '21px'});
    } else {
      $DOM.css({bottom: '0'});
    }
  };

  let focus = () => $textArea.focus();

  $textArea.keyup(() => {
    cfg.posHandler(getRow(), getCol());
    cfg.contentHandler($textArea.val() !== '');
  });

  $textArea.keypress(() => {
    let title = $('title').html();

    if(title[0] !== '*') {
      $('title').text('*' + title);
    }

    np.hasChanged = true;

    cfg.posHandler(getRow(), getCol());
  });

  $textArea.mousedown(() => bSelect = true);
  $textArea.mouseup(() => bSelect = false);
  $textArea.mousemove(() => { if(bSelect) cfg.posHandler(getRow(), getCol()); });
  $textArea.click(() => cfg.posHandler(getRow(), getCol()));

  let getCol = () => {
    let sub = $textArea.val().substr(0, $textArea[0].selectionStart);
    let subs = sub.split('\n');

    return subs[subs.length-1].length + 1;
  };

  let getRow = () => {
    let sub = $textArea.val().substr(0, $textArea[0].selectionStart);
    return sub.split('\n').length;
  };

  let getTotalLn = () => $textArea.val().split('\n').length;

  let setWrap = (bWrap) => {
    if(bWrap) {
      $textArea.attr('wrap', 'soft');
      $textArea.css({'overflow-x': 'hidden'});
    } else {
      $textArea.attr('wrap', 'off');
      $textArea.css({'overflow-x': 'scroll'});
    }
  };

  let setFont = (e) => {
    $textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
    np.setFontStyle($textArea, e.style);
  };



  let gotoLn = (num) => {
    let str = $textArea.val(),
        m   = 0;

    let aryStr = str.split('\n');
    for(let i=0; i<num-1; i++) {
      m += aryStr[i].length + 1;
    }

    $textArea[0].selectionStart = m;
    $textArea[0].selectionEnd = m;
    $textArea.focus();
    cfg.posHandler(getRow(), getCol());
  };


  let getContent = () => $textArea.val();
  let setContent = (data) => $textArea.val(data);

  let show = (conf) => {
    $.extend(cfg, conf);

    $('body').append($DOM);
    $textArea.trigger('focus');
    setWrap(cfg.wrap);
  };

  return {
    show,
    resize,
    focus,
    getTotalLn,
    getRow,
    getCol,
    getContent,
    setContent,
    setWrap,
    gotoLn,
    setFont
  };
})();
*/
