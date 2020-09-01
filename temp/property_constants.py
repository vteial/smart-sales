field_dict = dict()
main_table = 'property'
sub_tables = [
]

field_dict['property'] = [
    "id",
    "owner_id",
    "property_type",
    "property_category",
    "sale_type",
    "featured",
    "exclusive_posting",
    "status",
    "created_at",
    "posted_by"
]
field_dict['price_details'] = [
    "id",
    "property_id",
    "complete_price_details",
    "basic_price",
    "floor_plc",
    "facing_plc",
    "open_car_parking_unit_1_charge",
    "open_car_parking_unit_2_charge",
    "open_car_parking_unit_3_charge",
    "free_car_parking",
    "car_parking_cost",
    "covered_car_parking_unit_1_charge",
    "covered_car_parking_unit_2_charge",
    "covered_car_parking_unit_3_charge",
    "free_club_membership",
    "club_membership_cost",
    "free_power_backup",
    "power_backup_cost",
    "free_electricity_water_charges",
    "electricity_water_charges_cost",
    "free_other_charges",
    "other_charges_cost",
    "total_price",
    "total_price_per_sqft",
    "exclude_stamp_duty_registration_charges",
    "stamp_duty_registration_charges",
    "booking_amount",
    "maintenance_charges",
    "maintenance_window",
    "free_open_car_parking",
    "free_covered_car_parking",
    "rent_per_month",
    "security_amount",
    "lock_in_period",
    "price_per_seat"
]

field_dict['availability'] = [
    "id",
    "property_id",
    "possession_status",
    "availability_date",
    "currently_leased",
    "assured_returns",
    "assurance_description",
    "transaction_type"
]
field_dict['area'] = [
    "id",
    "property_id",
    "covered_area",
    "covered_area_unit",
    "super_area",
    "super_area_unit",
    "buildup_area",
    "buildup_area_unit",
    "carpet_area",
    "carpet_area_unit",
    "plot_length",
    "plot_breadth",
    "plot_area",
    "plot_area_unit",
    "corner_plot"
]

field_dict['amenities'] = [
    "id",
    "property_id",
    "gym",
    "veg",
    "non_veg",
    "gated_security",
    "lift",
    "internet_services",
    "air_conditioner",
    "club_house",
    "inter_com",
    "swimming_pool",
    "children_play_area",
    "fire_safety",
    "servant_room",
    "gas_pipeline",
    "sewage_treatment",
    "house_keeping",
    "power_backup",
    "visitor_parking",
    "water_supply",
    "park",
    "rain_water_harvesting",
    "shopping_center"
]
field_dict['specification'] = [
    "id",
    "property_id",
    "bedroom",
    "washroom",
    "balcony",
    "pantry",
    "direction",
    "name",
    "open_sides",
    "road_width",
    "furnished_status",
    "age_of_construction",
    "tenant_preferred",
    "land_zone",
    "description"
]
field_dict['location'] = [
    "id",
    "property_id",
    "address",
    "city",
    "longitude",
    "latitude",
    "state",
    "floor",
    "total_floor",
    "locality",
    "is_in_a_gated_community"
]

field_dict['construction_configuration'] = [
    "id",
    "property_id",
    "floor_configuration",
    "construction_status",
    "total_units",
    "reserved_parking"
]

field_dict['legal'] = [
    "id",
    "property_id",
    "rera_id",
    "url",
    "floors_allowed_to_be_constructed"
]

field_dict['commercial_options'] = [
    "id",
    "property_id",
    "ideal_for_business",
    "willing_to_modify_interiors",
    "personal_washroom",
    "pantry_or_cafeteria",
    "near_by_business",
    "no_of_seats",
    "cabin_meeting_rooms",
    "open_hours"
]

field_dict['shop_options'] = [
    "id",
    "property_id",
    "corner_shop",
    "main_road_facing",
    "width_of_entrance"
]

field_dict['ownership_details'] = [
    "id",
    "property_id",
    "any_construction_done",
    "boundary_wall",
    "property_ownership"
]

