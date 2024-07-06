const url = "https://api.shutterstock.com/v2/images/search";
const token =
  "v2/UUJqZGhnYlZSYkRBNjV3YmRBNndHYUd4WGZaNlljdlQvNDM1NDczMjcxL2N1c3RvbWVyLzQvN2UzR2ZQcndqckc0T2JrX0NqSGxkWU9lNVItbmQzTkZSeTQzVlJWY1NsNDcybURVNUJEaDUzdHRyUThTUDZ4ZGVNcUw1X3ZKTndKazU1YWtmZ3phQkdwS3liYlkyNXRYenA5MFNFNDlfbGJ2aThlaTNHY2FSd3YzTG5fQXdUNmhfUU1FblEzSnEzR29aLXlwc1dtRHlySHNvZU5CZ0JsMi0xY2djdzFCWlJfN0ppU2tRaHNmRVlUdWM4VGhRUVNiNnFHdVA2MzIwQm9TVXYxaUdadkloZy9NUzNKdkxuVjVIQ3EySDRULWNkZDJR";
interface ISingleItem {
  id: string;
  description: string;
  assets: { preview: { url: string } };
}
interface IResponse {
  data: ISingleItem[];
  page: number;
  per_page: number;
  search_id: string;
  spelcheck_info: object;
  total_count: number;
}
export async function getData(searchedValue: string) {
  const preparedUrl = `${url}?${new URLSearchParams({ query: `${searchedValue}` }).toString()}`;
  const response = await fetch(preparedUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  let data;
  if (response.ok) {
    data = (await response.json()) as IResponse;
    console.log(data);
  } else {
    console.log(response.status);
  }
  const finalData = data?.data.map((item) => {
    const description = item.description;
    const image = item.assets.preview.url;
    return { description, image };
  });

  return finalData;
}
