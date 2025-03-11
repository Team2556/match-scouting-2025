import { DataType } from "./types";

const generateDataCode = (dataCode: DataType) => {
  let code = Object.values(dataCode).join(",");
  return code;
};

export default generateDataCode;
