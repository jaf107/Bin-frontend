import fetcher from "./fetcher";

const cloud_name = "dljep9qgw";
const cloud_api_key = "485977825684594";

const uploader = async (file, type, uniqueId) => {
  console.log(cloud_name, cloud_api_key);

  const sign = await getSignature();
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const body = getFormData(file, sign);

  const cloudinaryResponse = await fetcher(
    `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
    "POST",
    body,
    headers
  );

  const res = await updateImageUrl(type, uniqueId, cloudinaryResponse);

  if (res.status === 200) {
    return res;
  } else {
    return "Something went wrong while uploading file";
  }
};

const getSignature = async () => {
  const signatureObj = await fetcher(
    "http://localhost:5000/api/v1/file/upload-signature",
    "GET"
  );
  return signatureObj;
};

const getFormData = (file, s) => {
  const form = new FormData();
  form.set("file", file);
  form.set("api_key", cloud_api_key);
  form.set("signature", s.signature);
  form.set("timestamp", s.timestamp);
  return form;
};

const updateImageUrl = async (
  collectionName,
  queryObject,
  cloudinaryResponse
) => {
  const body = {
    "public-id": cloudinaryResponse.public_id,
    "image-url": cloudinaryResponse.secure_url,
    collection: collectionName,
    "query-param": queryObject,
  };

  const response = await fetcher(
    "http://localhost:5000/api/v1/file/upload-signatue",
    "POST",
    body
  );

  return response;
};

export default uploader;
