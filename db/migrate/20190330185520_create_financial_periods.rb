class CreateFinancialPeriods < ActiveRecord::Migration[5.2]
  def change
    create_table :financial_periods do |t|

      t.timestamps
    end
  end
end
