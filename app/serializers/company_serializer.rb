class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :exchange
end
