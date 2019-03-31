require 'csv'



data = CSV.foreach('db/SecondComboList.csv') do |row|

  Company.create(
    primarysymbol: row[0],
    companyname: row[1],
    market_cap: row[2],
    industry: row[3],
    sector: row[4],
    primaryexchange: row[5],
    market_cap_date: Time.now()
  )
end 
