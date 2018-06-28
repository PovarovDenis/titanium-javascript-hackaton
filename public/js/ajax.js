(function ajax() {
  const btn = document.getElementById('btnForAJAX');
  const fld = document.getElementById('fldForAJAX');
  const taskTests = document.getElementById('taskTests');
  const taskSolution = document.getElementById('taskSolution');
  const request = new XMLHttpRequest();
  // .withCredentials doesn't help with CORS problems and conflicts with the cors-anywhere proxy
  // request.withCredentials = true;
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // fld.style.border = '1px solid #e8e8e8';
      // console.log(request);
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
  request.open('POST', 'https://cors-anywhere.herokuapp.com/http://78.46.208.140:3031', true);
  // In future i will add the local proxy functionality to the server and delete "https://cors-anywhere.herokuapp.com/"
  btn.addEventListener('click', () => {
    request.send({ multipart: [{ 'content-type': 'application/json',
      body: JSON.stringify({ solution: taskSolution.value, test: taskTests.value }) }] });
  });
}());
