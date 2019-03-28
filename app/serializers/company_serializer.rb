class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :exchange, :fiscal_year, :revenue, :ebit, :current_assets, :current_liabilities, :total_assets, :total_liabilities, :retained_earnings,:intangible_assets
end
