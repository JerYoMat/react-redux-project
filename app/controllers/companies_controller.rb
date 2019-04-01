require 'pry'
require 'rest-client'
require 'json'
require 'erb'
require 'date'

class CompaniesController < ApplicationController
include ERB::Util

  def index
    @companies = Company.limit(100)
    render json: @companies
  end 

  def return_fins
    ticker = url_encode(params['ticker'].upcase)
    @company = Company.find_by(primarysymbol: ticker)
    num_periods = @company.needed_num_periods
    if num_periods > 0
      url = compose_url_from_ticker(ticker, num_periods)
      response = RestClient::Request.execute(
        method: :get,
        url: url
      )
      dataAry = normalize_data(response)
      dataAry.each do |data|
        new_financial_period = @company.financial_periods.build()
        data.each do |key, value|
          binding.pry 
          if ['receiveddate', 'periodenddate'].include?(key)
            value = return_date(value)
          end 
          new_financial_period[key] = value
        end 
        new_financial_period.save
      end 
    end  
    render json: @company.financial_periods

  end 




private 

  def return_date(string)
    Date.strptime(string, '%m/%d/%Y')
  end 


  def normalize_data(response)
    data =JSON.parse(response)
    rows = data['result']['rows']
    company_data = []
    rows.each do |row|
      newObj = {}
      row['values'].each do |pair|
          newObj[pair['field']] = pair['value']
      end
      company_data.push(newObj)
    end 
      return company_data
  end 

  def compose_url_from_ticker(ticker, numperiods=5)
    url="https://datafied.api.edgar-online.com/v2/corefinancials/ann?primarysymbols=#{ticker}&numperiods=#{numperiods}&fields=receiveddate,periodlengthcode,periodlength,periodenddate,fiscalyear,fiscalquarter,totalrevenue,costofrevenue,grossprofit,researchdevelopmentexpense,ebit,incomebeforetaxes,netincome,cashandcashequivalents,cashcashequivalentsandshortterminvestments,othercurrentassets,inventoriesnet,totalcurrentassets,intangibleassets,propertyplantequipmentnet,goodwill,otherassets,totalassets,othercurrentliabilities,totalshorttermdebt,totalcurrentliabilities,otherliabilities,totallongtermdebt,totalliabilities,retainedearnings,totalstockholdersequity,cashfromoperatingactivities,cashfrominvestingactivities,cashfromfinancingactivities,capitalexpenditures,cfdepreciationamortization,netchangeincash,formtype,audited,original,amended,preliminary,currencycode,crosscalculated,usdconversionrate&appkey=#{ENV['API_KEY']}"
    return url
  end 
  

end 
