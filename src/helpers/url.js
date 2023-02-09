export const getBaseUrl = () => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return 'https://www.rdev.com';
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    default:
      return `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
};

export const getParams = (
  obj
) =>
  Object.entries(obj)
    .filter((entry) => entry[1])
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
