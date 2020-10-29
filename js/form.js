/* SmtpJS.com - v3.0.0 */
var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = 'Send');
      var t = JSON.stringify(a);
      Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest('POST', e);
    a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest('GET', e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      'withCredentials' in t
        ? t.open(e, n, !0)
        : 'undefined' != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let name = document.getElementById('name');
  let firma = document.getElementById('firma');
  let email = document.getElementById('email');
  let betreff = document.getElementById('subject');
  let message = document.getElementById('message');
  const button = document.getElementById('send');

  button.classList.add('sending');

  Email.send({
    SecureToken: '5d737de6-4681-4656-926a-7baaae2c701b',
    To: ['christian_cramer@me.com'],
    From: 'info@bn-training.com',
    Subject: subject.value,
    Body: `${email.value} ||||||| ${name.value} ||||||| ${firma.value} ||||||| ${message.value}`,
  }).then((message) => {
    if (message === 'OK') {
      const loading = setTimeout(() => {
        const inputs = document.querySelectorAll('.input_container');

        name.value = '';
        firma.value = '';
        email.value = '';
        betreff.value = '';
        message.value = '';

        inputs.forEach((input) => {
          input.classList.remove('active');
        });
        button.classList.remove('sending');
        button.classList.add('success');

        const restart = setTimeout(() => {
          button.classList.remove('success');
        }, 2000);
      }, 1000);
    }
  });
});
