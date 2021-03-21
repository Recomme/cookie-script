(function() {
  let hostname = window.location.hostname;
  let cookieDomain = "." + hostname.substring(hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1) + 1);
  let cookieName = "recomme_r_code";
  
  let cookieDate = new Date();
  cookieDate.setMonth(cookieDate.getMonth() + 1);

  let url = new URL(window.location.href);
  let rcrCode = url.searchParams.get("rcr");
  let cookieValue = rcrCode;

  document.cookie = cookieName +"=" + cookieValue + ";expires=" + cookieDate 
                    + ";domain="+cookieDomain+";path=/";
})();