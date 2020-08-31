export class FieldConfig {

  categoryList = [
    {id: 'r', value: 'Residential'},
    {id: 'c', value: 'Commercial'},
    {id: 'a', value: 'Agricultural'}
  ];

  typeList = [
    {id: 101, cat_id: 'r', type_id: 'a', value: 'Flat / Apartment'},
    {id: 102, cat_id: 'r', type_id: 'b', value: 'Residential House'},
    {id: 103, cat_id: 'r', type_id: 'c', value: 'Villa'},
    {id: 104, cat_id: 'r', type_id: 'd', value: 'Builder Floor Apartment'},
    {id: 105, cat_id: 'r', type_id: 'e', value: 'Residential Land / Plot'},
    {id: 106, cat_id: 'r', type_id: 'f', value: 'Penthouse'},
    {id: 107, cat_id: 'r', type_id: 'g', value: 'Studio Apartment'},
    {id: 201, cat_id: 'c', type_id: 'a', value: 'Commercial Office Space'},
    {id: 202, cat_id: 'c', type_id: 'b', value: 'Office in IT Park / SEZ'},
    {id: 203, cat_id: 'c', type_id: 'c', value: 'Commercial Shop'},
    {id: 204, cat_id: 'c', type_id: 'd', value: 'Commercial Showroom'},
    {id: 205, cat_id: 'c', type_id: 'e', value: 'Commercial Land'},
    {id: 206, cat_id: 'c', type_id: 'f', value: 'Warehouse / Godown'},
    {id: 207, cat_id: 'c', type_id: 'g', value: 'Industrial Land'},
    {id: 208, cat_id: 'c', type_id: 'h', value: 'Industrial Building'},
    {id: 209, cat_id: 'c', type_id: 'i', value: 'Industrial Shed'},
    {id: 210, cat_id: 'c', type_id: 'j', value: 'Co-Working Space'},
    {id: 211, cat_id: 'c', type_id: 'k', value: 'Commercial Shed'},
    {id: 301, cat_id: 'a', type_id: 'a', value: 'Agricultural Land'},
    {id: 302, cat_id: 'a', type_id: 'b', value: 'Farm House'}
  ];

  categoryType = {};

  sections = [
    { name: 'Location', fields: [
        { name: 'name', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'city', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'locality', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'address', edit: true, view: true, mandatory: true, numeric: false }
      ] },
    { name: 'Legal', fields: [
        { name: 'rera_id', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'floors_allowed_to_be_constructed', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'url', edit: true, view: true, mandatory: true, numeric: false },
      ] },
    { name: 'Features', fields: [
        { name: 'bedroom', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'open_sides', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'road_width', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'total_units', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'balcony', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'floor_configuration', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'floor', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'furnished_status', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'reserved_parking', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'direction', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'washroom', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'tenant_preferred', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'personal_washroom', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'willing_to_modify_interiors', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'lock_in_period', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'land_zone', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'ideal_for_business', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'near_by_business', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'main_road_facing', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'corner_shop', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'no_of_seats', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'cabin_meeting_rooms', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'open_hours', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'pantry_or_cafeteria', edit: true, view: true, mandatory: true, numeric: false },
      ] },
    { name: 'Area', fields: [
        { name: 'covered_area', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'covered_area_unit', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'super_area', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'super_area_unit', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'buildup_area_unit', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'carpet_area', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'carpet_area_unit', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'plot_area', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'plot_area_unit', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'plot_length', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'plot_breadth', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'corner_plot', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'width_of_entrance', edit: true, view: true, mandatory: true, numeric: false },
      ] },
    { name: 'Availability', fields: [
        { name: 'transaction_type', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'currently_leased', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'possession_status', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'availability_date', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'age_of_construction', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'assured_returns', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'assurance_description', edit: true, view: true, mandatory: true, numeric: false },

      ] },
    { name: 'Rent', fields: [
        { name: 'price_per_seat', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'rent_per_month', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'security_amount', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'maintenance_charges', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'maintenance_window', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_electricity_water_charges', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'electricity_water_charges_cost', edit: true, view: true, mandatory: true, numeric: false },
      ] },
    { name: 'Price', fields: [
        { name: 'complete_price_details', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'total_price', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'total_price_per_sqft', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_car_parking', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'car_parking_cost', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_club_membership', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'club_membership_cost', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'base_price', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'floor_plc', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'facing_plc', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_open_car_parking', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_covered_car_parking', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_club_membership', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_power_backup', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'free_electricity_water_charges', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'exclude_stamp_duty_registration_charges', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'maintenance_charges', edit: true, view: true, mandatory: true, numeric: false },
        { name: 'booking_amount', edit: true, view: true, mandatory: true, numeric: false },
      ] },
    { name: 'Amenities', fields: [
        { name: 'power_backup', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'water_supply', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'house_keeping', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'inter_com', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'park', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'club_house', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'air_conditioner', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'veg', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'non_veg', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'gym', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'servant_room', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'gas_pipeline', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'internet_services', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'swimming_pool', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'lift', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'visitor_parking', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'children_play_area', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'sewage_treatment', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'fire_safety', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'rain_water_harvesting', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'shopping_center', edit: true, view: true, mandatory: false, numeric: false },
        { name: 'pets_allowed', edit: true, view: true, mandatory: false, numeric: false },
      ] }
  ];

  userType: string;
  propState: string;
  propCategory: string;
  propType: string;
  sectionName: 'Location';
  section = this.sections[0];

  constructor() {
    this.categoryList.forEach((o) => {
      this.categoryType[o.id] = this.typeList.filter((i) => {
        return i.cat_id === o.id;
      });
    });
  }
}
