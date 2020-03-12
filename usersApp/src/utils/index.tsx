export const checkError = async (response: Response) => {
  let json = await response.json();
  let newRes = null;
  if (response.status !== 200) {
    newRes = `${response.status} - ${json.message}`;
    throw new Error(`${response.status} - ${json.message}`);
  } else {
    newRes = json;
  }
  return newRes;
};
