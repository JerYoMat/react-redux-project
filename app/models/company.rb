require 'pry'
class Company < ApplicationRecord
  has_many :financial_periods
  validates :companyname, 
    presence: true, length: { maximum: 255 },
    uniqueness: {case_sensitive: false}

  def fiscal_years 
    fiscal_year_ary = []
    self.financial_periods.each do |fp|
      fiscal_year_ary.push(fp['fiscalyear'])
    end 
    return fiscal_year_ary
  end

  def needed_num_periods(max = 5)
    if self.financial_periods.count == 0
      return max
    else 
    current_end = self.current_end_date
    num_years_missing = ((Date.today - current_end)/365).floor
      if num_years_missing > max
        return max 
      else
        return num_years_missing
      end 
    end 
    
  end 

  def current_end_date
    dates = []
    self.financial_periods.each do |fp|
      dates.push(fp.periodenddate)
    end 
    return dates.max
  end 


end
