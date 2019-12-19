
export const addressUrl = ( baseUrl, query, start = 0,  rows= 20) => {
  query = encodeURI(query);
  return `${baseUrl}suggest?fq=type:adres&q=${query}&start=${start}&rows=${rows}&fq=*:*`
}
export const addressDetailsUrl = (baseUrl,addressId)=>{
  return `${baseUrl}lookup?id=${addressId}`;
}