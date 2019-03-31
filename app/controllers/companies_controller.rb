require 'pry'
require 'rest-client'
require 'json'
require 'erb'

class CompaniesController < ApplicationController
include ERB::Util

def index
  @companies = Company.all
  render json: @companies
end 

def create  
  @company = Company.new
  @company.name = params['company']['name']
  @company.ticker = params['company']['ticker']
  @company.exchange = params['company']['exchange'] 
  if @company.save
    render json: @company
  end 
end

def show
  @company = Company.find(params[:id])
  render json: @company
end 

  def search 
    name=url_encode(params['name'])

    url = "https://datafied.api.edgar-online.com/v2/companies.json?companynames=*#{name}*&limit=10&appkey=#{ENV['API_KEY']}&fields=companyname,primarysymbol,primaryexchange"
   
    response = RestClient::Request.execute(
      method: :get,
      url: url
      )
  binding.pry 
end 


end
