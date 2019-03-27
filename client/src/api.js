export const createCompany = (name, ticker, exchange, fiscalYear, revenue, ebit, currentAssets, currentLiabilities, totalAssets, totalLiabilities, retainedEarnings) => {
  return postData('/companies', {
    name: name,
    ticker: ticker,
    exchange: exchange,
    fiscal_year: fiscalYear,
    revenue: revenue,
    ebit: ebit,
    current_assets: currentAssets,
    current_liabilities: currentLiabilities,
    total_assets: totalAssets,
    total_liabilities: totalLiabilities,
    retained_earnings: retainedEarnings
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
