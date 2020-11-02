const inputs = document.querySelectorAll('.input_container');
const form = document.getElementById('form');

// F O R M   F I E L D

inputs.forEach((input) => {
  const inputField = input.childNodes[3];
  // Each Input Field
  inputField.addEventListener('focus', () => {
    input.classList.add('active');
  });
  inputField.addEventListener('blur', () => {
    if (inputField.value === '') {
      input.classList.remove('active');
    } else {
      inputField.classList.remove('error');
    }
  });
});

const observeTextarea = function (el, event, handler) {
  el.addEventListener(event, handler);
};

const textAreaInit = () => {
  const textarea = document.getElementById('message');

  function resize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  function delayedResize() {
    setTimeout(resize, 0);
  }

  observeTextarea(textarea, 'change', resize);
  observeTextarea(textarea, 'cut', delayedResize);
  observeTextarea(textarea, 'paste', delayedResize);
  observeTextarea(textarea, 'drop', delayedResize);
  observeTextarea(textarea, 'keydown', delayedResize);

  resize();
};

textAreaInit();

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

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let name = document.getElementById('name');
  let firma = document.getElementById('firma');
  let email = document.getElementById('email');
  let betreff = document.getElementById('subject');
  let message = document.getElementById('message');
  const button = document.getElementById('send');

  if (name.value === '' || email.value === '' || message.value === '') {
    if (name.value === '') {
      name.classList.add('error');
    }
    if (email.value === '') {
      email.classList.add('error');
    }
    if (message.value === '') {
      message.classList.add('error');
    }
    return;
  }

  button.classList.add('sending');

  Email.send({
    SecureToken: '5d737de6-4681-4656-926a-7baaae2c701b',
    To: 'info@bn-training.com',
    From: 'info@bn-training.com',
    Subject: subject.value,
    Body: `${email.value} ||||||| ${name.value} ||||||| ${firma.value} ||||||| ${message.value}`,
  }).then((msg) => {
    if (msg === 'OK') {
      const loading = setTimeout(() => {
        name.value = '';
        firma.value = '';
        email.value = '';
        betreff.value = '';
        message.value = '';

        function resize() {
          message.style.height = 'auto';
          message.style.height = message.scrollHeight + 'px';
        }

        resize();

        inputs.forEach((input) => {
          input.childNodes[3].classList.remove('error');
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
