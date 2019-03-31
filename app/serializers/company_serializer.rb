class CompanySerializer < ActiveModel::Serializer
  attributes :id, :companyname, :primarysymbol, :primaryexchange, :siccode, :sicdescription, :cik
  
end
