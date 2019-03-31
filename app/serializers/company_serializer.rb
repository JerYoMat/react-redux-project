class CompanySerializer < ActiveModel::Serializer
  attributes :id, :companyname, :primarysymbol, :primaryexchange, :industry, :sector, :market_cap, :market_cap_date
  
end
