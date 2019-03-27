require 'pry'
class CompaniesController < ApplicationController
COMPANY_KEYS =["name", "ticker", "exchange", "fiscal_year", "revenue", "ebit", "current_assets", "current_liabilities", "total_assets", "total_liabilities", "retained_earnings"]

  def index
  @companies = Company.all
  render json: @companies
end 

def create  
  @company = Company.new
  COMPANY_KEYS.each do |key|
    @company[key] = params[key]
  end 

  if @company.save
    render json: @company
  end 

end

def show
  @company = Company.find(params[:id])
  render json: @company
end 


end
