export const ADD_COMPANY = 'ADD_COMPANY';
export const addCompany = (name, ticker, exchange, fiscalYear, revenue, ebit, currentAssets, currentLiabilities, totalAssets, totalLiabilities, retainedEarnings) => ({
  type: ADD_COMPANY,
  payload: {
    id: Math.floor(Math.random() * 100),  
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
  }
})
