interface BodyFields<T> {
  key: keyof T;
  required: boolean;
  type: string;
}

export const validateBodyFields = <T>(fields: BodyFields<T>[], data: T) => {
  const missingParams = [];
  const invalidParams = [];
  const exceededParams = [];

  for (const field of fields) {
    if (!field.required) {
      if (typeof data[field.key] !== field.type) {
        invalidParams.push(field.key);
        continue;
      }
    }

    if (data[field.key] === undefined) {
      missingParams.push(field.key);
      continue;
    }

    if (typeof data[field.key] !== field.type) {
      invalidParams.push(field.key);
      continue;
    }
  }

  for (const key in data) {
    if (!fields.find((field) => field.key === key)) exceededParams.push(key);
  }

  let string = "";

  if (missingParams.length > 0)
    string += `[Missing Params: ${missingParams.join(", ")}]`;

  if (invalidParams.length > 0)
    string += `[Invalid Params: ${invalidParams.join(", ")}]`;

  if (exceededParams.length > 0)
    string += `[Exceeded Params: ${exceededParams.join(", ")}]`;

  if (string) throw new Error(string);

  return data;
};
