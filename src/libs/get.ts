export const get = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};
