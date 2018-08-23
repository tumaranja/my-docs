var controls = {
    undo: function () {
        document.execCommand('undo', false, null);
    },
    redo: function () {
        document.execCommand('redo', false, null);
    },
    clear: function () {
        document.querySelector('#writing-area').innerHTML = '';
    },
    reset: function () {
        document.execCommand('removeFormat', false, null);
    },
    cut: function () {
        document.execCommand('cut', false, null);
    },
    copy: function () {
        document.execCommand('copy', false, null);
    },
    paste: function () {
        document.execCommand('paste', false, null);
    },
    bold: function () {
        document.execCommand('bold', false, null);
    },
    italicize: function () {
        document.execCommand('italic', false, null);
    },
    underline: function () {
        document.execCommand('underline', false, null);
    },    
    setFontFamily: function () {
        var fontFamily = document.getElementById('font-family').value;
        document.execCommand('fontName', false, fontFamily);
    },
    setFontSize: function () {
        var size = document.getElementById('size').value;
        document.execCommand('fontSize', false, size);
    },
    setFontColor: function () {
        var color = document.getElementById('color').value;
        document.execCommand('foreColor', false, color);
    },
    setBackgroundColor: function () {
        var color = document.getElementById('background-color').value;
        document.execCommand('backColor', false, color);
    },
    insertOrderedList: function () {
        document.execCommand('insertOrderedList', false, null);
    },
    insertUnorderedList: function () {
        document.execCommand('insertUnorderedList', false, null);
    },
    justify: function () {
        var type = document.getElementById('justify').value;
        document.execCommand('justify' + type, false, null);
    },
    strikethrough: function () {
        document.execCommand('strikeThrough', false, null);
    },
    subscript: function () {
        document.execCommand('subscript', false, null);
    },
    superscript: function () {
        document.execCommand('superscript', false, null);
    },
    insertLine: function () {
        document.execCommand('insertHorizontalRule', false, null);
    },
    insertImage: function () {
        var url = document.querySelector('[name="imageUrl"]');
        document.querySelector('insertImage', false, url);
    },
    hyperlink: function () {
        var url = document.querySelector('[name="url"]').value;
        document.execCommand('createLink', false, url);
    },
    unlink: function () {
        document.execCommand('unlink', false, null);
    },
    save: function () {
        var text = document.getElementById('writing-area').innerHTML;
        localStorage.setItem('myDocs', JSON.stringify(text));
    },
    print: function () {
        window.print();
    }
};

function loadSavedText () {
    var savedText = localStorage.getItem('myDocs');
    if (savedText) {
        document.getElementById('writing-area').innerHTML = JSON.parse(savedText);
    }
}

loadSavedText();