import { authHeader, userHeader} from "../helpers/auth-header";
import {
  authAddress,
  signupAddress,
  profileAddress,
  subjectAddress,
  professorAddress,
  professorSubjectAddress,
  professorPublicAddress,
  subjectIdAddress
} from "../constants/back-address";
import { removeState } from "../store/localStorage";

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  getSubjects,
  getProfessors,
  getProfessorSubjects,
  getProfessorPublicProfile,
  getSubject,
  delete: _delete
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };

  return fetch(authAddress, requestOptions)
    .then(handleResponse)
    .then(token => {
      // localStorage.setItem("token");
      return token;
    });
}

function logout() {
  // remove user from local storage to log user out
  removeState();
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id, token) {
  const requestOptions = {
    method: "GET",
    headers: userHeader(token)
  };

  return fetch(`${profileAddress}/${id}`, requestOptions).then(handleResponse).then(response => {
    return response;
  });
}

function getProfessors(name) {
  const requestOptionsName = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name: `%${name}%`,
      last_name: `%${name}%`
    })
  };

  return fetch(`${professorAddress}`, requestOptionsName).then(handleResponse).then(response => {
    return response;
  });
}

function getSubjects(name) {
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name: `%${name}%`
    })
  };

  return fetch(`${subjectAddress}`, requestOptions).then(handleResponse).then(response => {
    return response;
  });
}

function getProfessorPublicProfile(id) {

  const requestOptions = {
    method: "GET",
  };
  return fetch(`${professorPublicAddress}/${id}`, requestOptions).then(handleResponse).then(response => {
    return response;
  });
}

function getProfessorSubjects(id) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(`${professorSubjectAddress}/${id}`, requestOptions).then(handleResponse).then(response => {
    return response;
  });
}

function getSubject(id) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(`${subjectIdAddress}/${id}`, requestOptions).then(handleResponse).then(response => {
    return response;
  });
}

function register(user) {

  const { email, password, password_confirmation, firstname, lastname, career_id, role_id } = user;
  const newUser = {
    user: {
      name: firstname,
      last_name: lastname,
      email,
      password: password,
      password_confirmation: password_confirmation,
      role_id,
      career_id
    }
  };

  const admin = {
    email: "admin@example.com.co",
    password: "123456789"
  };


  return login(admin.email, admin.password).then(
    token => {

      const requestOptions = {
        method: "POST",
        headers: { "Authorization": token.auth_token.toString(), "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      };

      return fetch(signupAddress, requestOptions)
        .then(handleResponse).then(
          user_returned => {

          }
        );
    }
  );
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    // console.log(text);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
