(function ajax() {
  // find the desired selectors
  let btn = document.getElementById('btnForAJAX');
  let fld = document.getElementById('fldForAJAX');
  // set up a request
  const request = new XMLHttpRequest();
  // .withCredentials doesn't work
  // request.withCredentials = true
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // add a border
      fld.style.border = '1px solid #e8e8e8';
      console.log(request);
      // check if the request is successful
      if (request.status === 200) {
        // update the HTML of the element
        const response = JSON.parse(request.responseText);
        fld.innerHTML = `Tests: ${response.tests} <br /> Failed: ${response.failed} <br /> Stderr: ${response.stderr}`;
      } else {
        // otherwise display an error message
        fld.innerHTML = `An error occurred during your request: ${request.status} ${request.statusText}`;
      }
    }
  };

  // request.open('POST', 'http://78.46.208.140:3031');
  // CORS problems
  // I don't want to use "chrome.exe --disable-web-security"
  request.open('POST', 'https://cors-anywhere.herokuapp.com/http://78.46.208.140:3031');
  // In future i will add the local proxy functionality to the server and delete "https://cors-anywhere.herokuapp.com/"
  btn.addEventListener('click', () => {
    // hide the button
    // this.style.display = 'none';
    // send the request
    request.send();
  });
}());
