export const getCompanies = () => {
  return fetch('/companies')
    .then(response => response.json())
}


export const createCompany = (companyData) => {
  const {name, ticker, exchange} = companyData
  
  return postData('/companies', {
    name: name,
    ticker: ticker,
    exchange: exchange
  });
};

function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json());
}
