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

  userType: string;
  propState: string;
  propCategory: string;
  propType: string;

  propKeyList = [
    'brca',
    'orrf',
    'orrg',
    'osre',
    'osrf',
    'osrg'
  ];
  propKeySelected: string;
  propKey: string;
  sections = [
    {
      name: 'price_details', fields: [
        {name: 'complete_price_details', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'basic_price', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'floor_plc', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'facing_plc', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'free_car_parking', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'car_parking_cost', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'free_club_membership', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'club_membership_cost', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'free_power_backup', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'power_backup_cost', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'free_electricity_water_charges', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'electricity_water_charges_cost', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'free_other_charges', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'other_charges_cost', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'total_price', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'total_price_per_sqft', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'exclude_stamp_duty_registration_charges', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'stamp_duty_registration_charges', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'booking_amount', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'maintenance_charges', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'maintenance_window', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'free_open_car_parking', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'free_covered_car_parking', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'rent_per_month', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'security_amount', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'lock_in_period', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'price_per_seat', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'availability', fields: [
        {name: 'possession_status', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'availability_date', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'currently_leased', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'assured_returns', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'assurance_description', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'transaction_type', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'area', fields: [
        {name: 'covered_area', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'covered_area_unit', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'super_area', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'super_area_unit', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'buildup_area', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'buildup_area_unit', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'carpet_area', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'carpet_area_unit', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'plot_length', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'plot_breadth', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'plot_area', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'plot_area_unit', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'corner_plot', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'amenities', fields: [
        {name: 'gym', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'veg', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'non_veg', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'gated_security', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'lift', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'internet_services', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'air_conditioner', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'club_house', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'inter_com', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'swimming_pool', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'children_play_area', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'fire_safety', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'servant_room', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'gas_pipeline', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'sewage_treatment', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'house_keeping', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'power_backup', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'visitor_parking', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'water_supply', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'park', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'rain_water_harvesting', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'shopping_center', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'specification', fields: [
        {name: 'bedroom', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'washroom', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'balcony', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'pantry', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'direction', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'name', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'open_sides', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'road_width', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'furnished_status', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'age_of_construction', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'tenant_preferred', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'land_zone', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'description', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'location', fields: [
        {name: 'city', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'locality', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'address', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'floor', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'total_floor', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'is_in_a_gated_community', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'construction_configuration', fields: [
        {name: 'floor_configuration', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'construction_status', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'total_units', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'reserved_parking', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'legal', fields: [
        {name: 'rera_id', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'url', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'floors_allowed_to_be_constructed', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'commercial_options', fields: [
        {name: 'ideal_for_business', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'willing_to_modify_interiors', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'personal_washroom', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'pantry_or_cafeteria', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'near_by_business', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'no_of_seats', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'cabin_meeting_rooms', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'open_hours', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'shop_options', fields: [
        {name: 'corner_shop', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'main_road_facing', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'width_of_entrance', edit: false, view: false, mandatory: false, numeric: false},
      ]
    },
    {
      name: 'ownership_details', fields: [
        {name: 'any_construction_done', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'boundary_wall', edit: false, view: false, mandatory: false, numeric: false},
        {name: 'property_ownership', edit: false, view: false, mandatory: false, numeric: false},
      ]
    }
  ];
  sectionsMap = {};
  sectionName: string;
  section: any;

  constructor() {
    this.categoryList.forEach(o => {
      this.categoryType[o.id] = this.typeList.filter(i => i.cat_id === o.id);
    });
    this.sections.forEach(section => {
      this.sectionsMap[section.name] = section;
      section.fields = section.fields.sort((n1, n2) => {
        if (n1.name > n2.name) {
          return 1;
        }
        if (n1.name < n2.name) {
          return -1;
        }
        return 0;
      });
    });
    this.sections = this.sections.sort((n1, n2) => {
      if (n1.name > n2.name) {
        return -1;
      }
      if (n1.name < n2.name) {
        return 1;
      }
      return 0;
    });
  }

  asKey(): string {
    return this.userType + this.propState + this.propCategory + this.propType;
  }

  copyFrom(source: any): void {
    source.forEach((src) => {
      const dst = this.sectionsMap[src.name];
      if (dst) {
        src.fields.forEach(srcField => {
          const dstField = dst.fields.find(field => field.name === srcField.name);
          if (dstField) {
            dstField.edit = srcField.edit;
            dstField.view = srcField.view;
            dstField.mandatory = srcField.mandatory;
            dstField.numeric = srcField.numeric;
          }
        });
      }
    });
  }
}
