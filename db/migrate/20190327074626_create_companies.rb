class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :ticker
      t.string :exchange
      t.integer :fiscal_year
      t.integer :revenue
      t.integer :ebit
      t.integer :current_assets
      t.integer :current_liabilities
      t.integer :total_assets
      t.integer :total_liabilities
      t.integer :retained_earnings
      t.integer :intangible_assets
      t.timestamps
    end
  end
end
