class FinancialPeriodSerializer < ActiveModel::Serializer
  attributes :id, 
  :company_id,
  :receiveddate,
  :periodenddate,
  :fiscalyear,
  :totalrevenue,
  :grossprofit,
  :ebit,
  :incomebeforetaxes,
  :netincome,
  :cashandcashequivalents,
  :cashcashequivalentsandshortterminvestments,
  :inventoriesnet,
  :totalcurrentassets,
  :intangibleassets,
  :propertyplantequipmentnet,
  :goodwill,
  :totalassets,
  :othercurrentliabilities,
  :totalshorttermdebt,
  :totalcurrentliabilities,
  :otherliabilities,
  :totallongtermdebt,
  :totalliabilities,
  :retainedearnings,
  :totalstockholdersequity,
  :cashfromoperatingactivities,
  :cashfrominvestingactivities,
  :cashfromfinancingactivities,
  :capitalexpenditures,
  :cfdepreciationamortization,
  :audited,
  :preliminary,
  :currencycode,
  :crosscalculated,
  :usdconversionrate
end 