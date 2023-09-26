import fetcher from "./fetcher";

const uploader = async (file) => {
  const sign = await getSignature();
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const body = getFormData(file, sign);

  const response = await fetcher(
    `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`,
    "POST",
    body,
    headers
  );

  console.log(sign);
  return response;
};

const getSignature = async () => {
  const signatureObj = await fetcher(
    "http://localhost:5000/api/v1/upload",
    "GET"
  );
  return signatureObj;
};

const getFormData = (file, s) => {
  const form = new FormData();
  form.set("file", file);
  form.set("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
  form.set("signature", s.signature);
  form.set("timestamp", s.timestamp);
  return form;
};

export default uploader;
