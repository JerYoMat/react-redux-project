const zScoreCalcs = (company) => {
  
  const scoreObj = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null
  }
  // Raw Calcs
  scoreObj.a = 3.107 * (company.ebit / company.total_assets);
  scoreObj.b = 0.998 * (company.revenue / company.total_assets);
  scoreObj.c = 0.420 * ((company.total_assets - company.intangible_assets - company.total_liabilities) / company.total_liabilities)
  scoreObj.d = 0.717 * ((company.current_assets - company.current_liabilities) / company.total_assets)
  scoreObj.e = 0.847 * (company.retained_earnings / company.total_assets)

  //Add bounds -4 to -8
  for (let property in scoreObj) {
    if (scoreObj[property] < -4) {
      scoreObj[property] = -4
    }
    if (scoreObj[property] > 8) {
      scoreObj[property] = 8
    }
  }  
  return scoreObj
}


export default zScoreCalcs;