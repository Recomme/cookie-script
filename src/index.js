(function() {
  let hostname = window.location.hostname;
  let domain = "." + hostname.substring(hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1) + 1);
  let cookieName = 'recomme_r_code';
  let cookieValue = 'abc123567';
  let myDate = new Date();
  myDate.setMonth(myDate.getMonth() + 1);

  document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate 
                    + ";domain="+domain+";path=/";
})();