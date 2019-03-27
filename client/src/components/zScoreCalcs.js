const zScoreCalcs = (company) => {
  
  const scoreObj = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null
  }
  // Raw Calcs
  scoreObj[a] = company.ebit / company.total_assets
  scoreObj[b] = company.revenue / company.total_assets
  scoreObj[c] = (company.total_assets - company.total_liabilities) / 


  //Add bounds -4 to -8

  return scoreObj
}
t.integer "fiscal_year"
t.integer "revenue"
t.integer "ebit"
t.integer "current_assets"
t.integer "current_liabilities"
t.integer "total_assets"
t.integer "total_liabilities"
t.integer "retained_earnings"
export zScoreCalcs;