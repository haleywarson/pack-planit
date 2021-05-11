class Trip < ActiveRecord::Base
    has_one :packing_list 
end 