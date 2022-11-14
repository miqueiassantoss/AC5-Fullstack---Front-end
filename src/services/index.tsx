import axios from "axios";

export const createText = async (newText: {}) => {
  const textData = (await axios.post("http://localhost:5002/", newText)).data;
  return textData;
};

export const getText = async (): Promise<any> => {
  const textData = (await axios.get("http://localhost:5002/")).data;
  return textData;
};
