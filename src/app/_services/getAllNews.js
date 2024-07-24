import { parseStringPromise } from "xml2js";

async function getAllNews(startDate, endDate) {
  try {
    const url = `https://apis.data.go.kr/1371000/policyNewsService/policyNewsList?serviceKey=${process.env.NEWS_API_KEY}&startDate=${startDate}&endDate=${endDate}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const xmlText = await res.text();

    const json = await parseStringPromise(xmlText, { explicitArray: false });

    return json;
  } catch (error) {
    console.error(`Error in getAllNews: ${error.message}`);
    throw error;
  }
}

export default getAllNews;
