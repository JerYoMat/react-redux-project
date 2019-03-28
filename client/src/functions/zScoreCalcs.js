
const zScoreCalcs = (company) => {
  const {ebit, revenue, total_assets, total_liabilities, current_assets, current_liabilities, intangible_assets, retained_earnings, fiscal_year} = company
  const scoreObj = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null
  }
  
  // Raw Calcs
  scoreObj.a = 3.107 * (ebit / total_assets);
  scoreObj.b = 0.998 * (revenue / total_assets);
  scoreObj.c = 0.420 * ((total_assets - intangible_assets - total_liabilities) / total_liabilities)
  scoreObj.d = 0.717 * ((current_assets - current_liabilities) / total_assets)
  scoreObj.e = 0.847 * (retained_earnings / total_assets)


  //Add bounds -4 to 8
  let zScore = 0;
  for (let property in scoreObj) {
    if (scoreObj[property] < -4) {
      scoreObj[property] = -4
    }
    if (scoreObj[property] > 8) {
      scoreObj[property] = 8
    }
  //Add up for Altman Z-Score
    zScore += scoreObj[property]
    scoreObj[property] = scoreObj[property].toFixed(2)
  }
  
  //Assign warning color and message
  let risk;
  if (zScore < 1.23) {
      risk = {
        label: 'danger',
        message: 'High risk, evaluate exposure'
      }
    } else if (zScore < 2.9) {
      risk = {
        label: 'warning',
        message: 'Moderate risk, monitor for deterioration'
      }
    } else {
      risk = {
        label: 'success',
        message: 'Low risk'
      }
  }

  const zScoreObj = {
    zScore: zScore.toFixed(2),
    data: scoreObj,
    risk: risk
  }

  return zScoreObj;

}


export default zScoreCalcs;