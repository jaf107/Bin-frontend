import axios from "axios";

const fetcher = async (url, method, body, options) => {
  let data;
  method = method.toUpperCase();
  if (method === "GET") {
    data = getReq(url, options);
  } else if (method === "POST") {
    data = postReq(url, body, options);
  } else if (method === "PUT") {
    data = putReq(url, body, options);
  } else if (method === "DELETE") {
    data = deleteReq(url, options);
  }
  return data;
};

const getAuthorizationHeaderConfig = (options) => {
  const session = JSON.parse(localStorage.getItem("user_session"));
  let config = session
    ? {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${session.tokenType} ${session.accessToken}`,
        },
      }
    : null;

  if (config) {
    config.headers.assign(options);
  } else {
    config = {
      headers: {
        ...options,
      },
    };
  }

  return config;
};

const getReq = async (url, options) => {
  const authConfig = getAuthorizationHeaderConfig(options);
  const { data } = await axios.get(url, authConfig);
  return data;
};

const postReq = async (url, body, options) => {
  const authConfig = getAuthorizationHeaderConfig(options);
  const { data } = await axios.post(url, body, authConfig);
  return data;
};

const putReq = async (url, body, options) => {
  const authConfig = getAuthorizationHeaderConfig(options);
  const { data } = await axios.put(url, body, authConfig);
  return data;
};

const deleteReq = async (url, options) => {
  const authConfig = getAuthorizationHeaderConfig(options);
  const { data } = await axios.delete(url, authConfig);
  return data;
};

export default fetcher;
