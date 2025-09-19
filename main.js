const date = "20231001";    
const time_period = "q";          

const baseUrl = new URL("https://bank.gov.ua/");

baseUrl.pathname = "/NBUStatService/v1/statdirectory/basindbank";

baseUrl.searchParams.append("date", date);
baseUrl.searchParams.append("period", time_period);
baseUrl.searchParams.append("json", "");

console.log(baseUrl.toString());
