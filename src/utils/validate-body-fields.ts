interface BodyFields<T> {
  key: keyof T;
  required: boolean;
  type: string;
}

export const validateBodyFields = <T>(fields: BodyFields<T>[], data: T) => {
  const missingParams = [];
  const invalidParams = [];

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

  let string = "";

  if (missingParams.length > 0)
    string += `[Missing Params: ${missingParams.join(", ")}]`;

  if (invalidParams.length > 0)
    string += `[Invalid Params: ${invalidParams.join(", ")}]`;

  if (string) throw new Error(string);

  return data;
};
