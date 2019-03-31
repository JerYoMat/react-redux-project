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
    ticker = params['ticker']
    if Company.find_by(primaryexchange: ticker)
      @company = Company.find_by(ticker: ticker)
      
    elsif Company.find_by(id: ticker)
      @company = Commpany.find(ticker)

    else
      @company = Company.new
      data = get_for_new_company(ticker)
      data.each do |key, value|
        @company[key] = value
      end
      @company.save
      render json: @company
    end 
  end

  def show
    @company = Company.find(params[:id])
    render json: @company
  end 



private 



  def get_for_new_company(ticker)
    ticker=url_encode(ticker.upcase)
    url = "https://datafied.api.edgar-online.com/v2/corefinancials/ann?primarysymbols=#{ticker}&numperiods=1&fields=companyname,primarysymbol,primaryexchange,siccode,sicdescription,cik&appkey=4490c1f19cccd10f4184adbe8a50598f"
    response = RestClient::Request.execute(
      method: :get,
      url: url
    )
    data = normalize_response(response)[0]
    return data

  end 


  def get_fin_data
    url="https://datafied.api.edgar-online.com/v2/corefinancials/ann?primarysymbols=#{ticker}&numperiods=5&fields=receiveddate,periodlengthcode,periodlength,periodenddate,fiscalyear,fiscalquarter,totalrevenue,costofrevenue,grossprofit,researchdevelopmentexpense,ebit,incomebeforetaxes,netincome,cashandcashequivalents,cashcashequivalentsandshortterminvestments,othercurrentassets,inventoriesnet,totalcurrentassets,intangibleassets,propertyplantequipmentnet,goodwill,otherassets,totalassets,othercurrentliabilities,totalshorttermdebt,totalcurrentliabilities,otherliabilities,totallongtermdebt,totalliabilities,retainedearnings,totalstockholdersequity,cashfromoperatingactivities,cashfrominvestingactivities,cashfromfinancingactivities,capitalexpenditures,cfdepreciationamortization,netchangeincash,formtype,audited,original,amended,preliminary,currencycode,crosscalculated,usdconversionrate&appkey=#{ENV['API_KEY']}"
  end

  def normalize_response(response)
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

  def assign_from_key_val_pair(hash, companyInst)
    hash.each do |key, value|
      companyInst[key] = value
    end    
  end 


end 