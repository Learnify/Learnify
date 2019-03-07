function authHeader() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem("token"));

  if (token && token.token) {
    return { "Authorization": "Bearer " + token.token };
  } else {
    return {};
  }
}

function userHeader(token) {
  if (token) {
    return { "Authorization": token };
  } else {
    return {};
  }
}

function searchHeader(token) {
  if (token) {
    return {
      "Authorization": token,
      "content-type": "application/json"
    }
  }
  else {
    return {};
  }
}

export { authHeader, userHeader, searchHeader };