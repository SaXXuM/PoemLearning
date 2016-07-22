function convertPoem() {
    var srcElement = document.getElementsByName('src')[0],
        dstElement = document.getElementsByName('dst')[0];

    dstElement.value =  srcElement.value.split('\n').map(function (el) {
        //console.log(el);
        var words = el.match(/[а-яА-ЯёЁa-zA-Z0-9]+/g) || [];
        return words.length ? words.map(function(word) {
            return word.charAt(0);
        }).join('') : '';
    }).join('\n');
}

function printResult() {
    childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes');
    childWindow.document.open();
    childWindow.document.write('<html><head></head><body>');
    childWindow.document.write(document.getElementsByName('dst')[0].value.replace(/\n/gi,'<br>'));
    childWindow.document.write('</body></html>');
    childWindow.print();
    childWindow.document.close();
    childWindow.close();
}
