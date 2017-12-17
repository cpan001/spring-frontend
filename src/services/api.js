const baseURL = "http://localhost:3000/api/v1/emails";

function post(url, postData) {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  }).then(resp => resp.json());
}

export function addEmail(email) {
  return post(baseURL, email);
}
