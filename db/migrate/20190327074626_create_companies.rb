class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :companyname
      t.string :primarysymbol
      t.string :primaryexchange
      t.string :industry
      t.string :sector
      t.bigint :market_cap
      t.date :market_cap_date
      t.timestamps
    end
  end
end
