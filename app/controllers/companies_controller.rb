require 'pry'
class CompaniesController < ApplicationController
COMPANY_KEYS =["name", "ticker", "exchange", "fiscal_year", "revenue", "ebit", "current_assets", "current_liabilities", "total_assets", "total_liabilities", "retained_earnings", "intangible_assets"]

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

def search 
  potential_name = params[:name]
  uri = URI("https://datafied.api.edgar-online.com/v2/companies?companynames=*#{potential_name}*&limit=10&appkey=#{ENV['API_KEY']}&fields=companyname,primarysymbol,primaryexchange")
  params = { :limit => 50}
  uri.query = URI.encode_www_form(params)
  
  res = Net::HTTP.get_response(uri)
  binding.pry 

end 


end
