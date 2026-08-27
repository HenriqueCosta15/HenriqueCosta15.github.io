// AIToolPick — Cookie Consent Script
// Add this to every page before </body>

(function() {
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
  }

  window.acceptCookies = function() {
    setCookie('cookie_consent', 'accepted', 365);
    document.getElementById('cookie-banner').style.display = 'none';
    loadAnalytics();
  };

  window.declineCookies = function() {
    setCookie('cookie_consent', 'declined', 365);
    document.getElementById('cookie-banner').style.display = 'none';
  };

  function loadAnalytics() {
    // Uncomment and replace GA_MEASUREMENT_ID when you have a Google Analytics account
    // var s = document.createElement('script');
    // s.async = true;
    // s.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    // document.head.appendChild(s);
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'GA_MEASUREMENT_ID');
  }

  window.showCookieConsent = function() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'block';
  };

  window.addEventListener('DOMContentLoaded', function() {
    var consent = getCookie('cookie_consent');
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      if (!consent) {
        banner.style.display = 'block';
      } else if (consent === 'accepted') {
        loadAnalytics();
      }
    }
  });
})();
