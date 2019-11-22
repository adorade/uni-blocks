var get = function (url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var txt = xhr.responseText;
      txt = txt.split('<body>')[1].split('</body>')[0];
      callback(txt);
    }
  };

  xhr.open('GET', url, false );
  xhr.send();
};

var chooseBlock = function (e) {
  e.preventDefault();

  get(this.href, function (resp) {
    document.querySelector('#playground').innerHTML = resp;
  });
};

var els = document.querySelectorAll('#navigator a');

for (var i = 0; i < els.length; i++) {
  var el = els[i];

  el.addEventListener('click', chooseBlock);
}
