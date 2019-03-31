class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :companyname
      t.string :primarysymbol
      t.string :primaryexchange
      t.string :siccode
      t.string :sicdescription
      t.string :cik
      #t.belongs_to :user
      t.timestamps
    end
  end
end
