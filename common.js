// =====================================================================
// AbodeKing property dataset
//
// Each property has two layers:
//   - top-level fields  → used by the cards/filters (unchanged shape,
//     so listings.html / index.html keep working with no edits)
//   - `details` object  → the fuller field-survey schema. Fields here
//     split into what the OWNER supplies (via the List a Property form)
//     and what the AbodeKing TEAM fills in after a verification visit.
//     See list-property.html for the form that produces the "owner"
//     half of this object.
// =====================================================================
const PROPERTIES = [
  {
    id: 1,
    title: "Modern 4-Bedroom Duplex with BQ",
    type: "House",
    purpose: "Sale",
    location: "Jimeta GRA, Yola",
    price: 85000000,
    priceLabel: "₦85,000,000",
    beds: 4,
    baths: 5,
    verified: true,
    summary: "Newly built duplex with a boys' quarters, gated compound and 24hr power backup, on a tarred street in GRA.",
    details: {
      property_id: "AK-2026-0001",
      photo_exterior_1: "https://images.timbu.com/hotels-ng/supplier_4i16vrz5wi_1_900x550.jpg",
      address: "12 Sardauna Crescent",
      street: "Sardauna Crescent",
      neighborhood: "Jimeta GRA",
      landmark: "Behind Adamawa State House of Assembly",
      property_category: "Residential",
      toilets: 5,
      store_rooms: 1,
      number_of_floors: 2,
      year_built: 2023,
      overall_condition: "Excellent",
      furnished_status: "Unfurnished",
      plot_size_sqm: 650,
      water_source: "Borehole",
      water_availability_hours: "24 hours",
      power_source: "PHCN + Generator",
      power_availability_hours: "18 hours",
      security_type: "Gated Compound, Security Guard",
      parking_type: "Private Compound",
      parking_capacity: 4,
      payment_cycle: "Outright",
      service_charge: null,
      agency_fee: "5% of sale price",
      live_availability: true,
      owner_name: "Alhaji Musa Ibrahim",
      owner_phone: "0803 000 0001",
      owner_email: "musa.ibrahim@example.com",
      nearest_market: "Jimeta Modern Market (1.8km)",
      nearest_school: "American University of Nigeria (2.5km)",
      nearest_hospital: "Federal Medical Centre Yola (3km)",
      nearest_major_road: "Numan Road",
      special_features: "Boys' quarters, fitted kitchen, en-suite bedrooms, tarred access road",
      verified_status: "Verified",
      data_source: "Site Visit",
      timestamp: "2026-06-14",
      last_visit: "2026-08-02"
    }
  },
  {
    id: 2,
    title: "Cozy 2-Bedroom Bungalow",
    type: "House",
    purpose: "Rent",
    location: "Doubeli, Yola",
    price: 1200000,
    priceLabel: "₦1,200,000 / year",
    beds: 2,
    baths: 2,
    verified: true,
    summary: "Quiet family bungalow close to schools and markets, fully tiled with a fenced compound and borehole.",
    details: {
      property_id: "AK-2026-0002",
      photo_exterior_1: "https://images.pexels.com/photos/34432716/pexels-photo-34432716.jpeg",
      address: "7 Bekaji Street",
      street: "Bekaji Street",
      neighborhood: "Doubeli",
      landmark: "Near Doubeli Primary School",
      property_category: "Residential",
      toilets: 2,
      store_rooms: 1,
      number_of_floors: 1,
      year_built: 2018,
      overall_condition: "Good",
      furnished_status: "Unfurnished",
      plot_size_sqm: 400,
      water_source: "Borehole",
      water_availability_hours: "24 hours",
      power_source: "PHCN",
      power_availability_hours: "14 hours",
      security_type: "Fenced Compound",
      parking_type: "Open Yard",
      parking_capacity: 2,
      payment_cycle: "Annual",
      service_charge: null,
      agency_fee: "10% of one year's rent",
      live_availability: true,
      owner_name: "Mrs. Halima Yusuf",
      owner_phone: "0806 000 0002",
      owner_email: null,
      nearest_market: "Doubeli Market (600m)",
      nearest_school: "Doubeli Primary School (300m)",
      nearest_hospital: "Yola Specialist Hospital (2.2km)",
      nearest_major_road: "Bekaji Link Road",
      special_features: "Fully tiled floors, fenced compound, close to schools",
      verified_status: "Verified",
      data_source: "Site Visit",
      timestamp: "2026-05-30",
      last_visit: "2026-07-19"
    }
  },
  {
    id: 3,
    title: "Benue Riverside Guest House",
    type: "Hotel",
    purpose: "Stay",
    location: "Jambutu, Yola",
    price: 25000,
    priceLabel: "₦25,000 / night",
    beds: 12,
    baths: 12,
    verified: true,
    summary: "12-room riverside guest house with AC, free WiFi and 24hr security — ideal for business and short stays.",
    details: {
      property_id: "AK-2026-0003",
      photo_exterior_1: "https://images.pexels.com/photos/36814806/pexels-photo-36814806.jpeg",
      address: "3 Riverside Close",
      street: "Riverside Close",
      neighborhood: "Jambutu",
      landmark: "Along the Benue River bank",
      property_category: "Hospitality",
      toilets: 12,
      store_rooms: 2,
      number_of_floors: 2,
      year_built: 2020, 
      overall_condition: "Excellent",
      furnished_status: "Fully Furnished",
      plot_size_sqm: 1200,
      water_source: "Borehole + Storage Tank",
      water_availability_hours: "24 hours",
      power_source: "PHCN + Generator + Inverter",
      power_availability_hours: "24 hours",
      security_type: "24hr Guard, CCTV",
      parking_type: "Private Lot",
      parking_capacity: 15,
      payment_cycle: "Nightly",
      service_charge: "10% service charge",
      agency_fee: null,
      live_availability: true,
      owner_name: "Benue Riverside Ltd.",
      owner_phone: null,
      owner_email: null,
      manager_name: "Emeka Obi",
      manager_phone: "0810 000 0003",
      frontdesk_name: "Front Desk",
      frontdesk_phone: "0810 000 0004",
      contact_website: null,
      contact_email: "reservations@benueriverside.example.com",
      nearest_market: "Jambutu Market (1km)",
      nearest_school: null,
      nearest_hospital: "General Hospital Yola (2.8km)",
      nearest_major_road: "Bridge Road",
      special_features: "River view, free WiFi, air conditioning, in-house restaurant",
      verified_status: "Verified",
      data_source: "Site Visit",
      timestamp: "2026-04-10",
      last_visit: "2026-08-15"
    }
  },
  {
    id: 4,
    title: "Ground-Floor Commercial Office Space",
    type: "Commercial",
    purpose: "Rent",
    location: "Yola Town",
    price: 3500000,
    priceLabel: "₦3,500,000 / year",
    beds: 0,
    baths: 2,
    verified: true,
    summary: "180sqm open-plan office on a busy commercial corridor, with ample parking and dedicated transformer.",
    details: {
      property_id: "AK-2026-0004",
      // photo_exterior_1: "https://images.timbu.com/hotels-ng/supplier_4i16vrz5wi_2_900x550.jpg",
      address: "22 Bekaji-Karewa Road",
      street: "Bekaji-Karewa Road",
      neighborhood: "Yola Town",
      landmark: "Opposite First Bank Yola Town Branch",
      property_category: "Commercial",
      toilets: 2,
      store_rooms: 1,
      number_of_floors: 1,
      year_built: 2016,
      overall_condition: "Good",
      furnished_status: "Unfurnished",
      plot_size_sqm: 180,
      water_source: "Borehole",
      water_availability_hours: "24 hours",
      power_source: "PHCN + Dedicated Transformer",
      power_availability_hours: "20 hours",
      security_type: "Security Guard",
      parking_type: "Frontage Parking",
      parking_capacity: 10,
      payment_cycle: "Annual",
      service_charge: "₦150,000 / year",
      agency_fee: "10% of one year's rent",
      live_availability: true,
      owner_name: "Yola Commercial Properties Ltd.",
      owner_phone: "0813 000 0005",
      owner_email: "info@yolacommercial.example.com",
      nearest_market: "Yola Town Market (500m)",
      nearest_school: null,
      nearest_hospital: "Yola Specialist Hospital (1.5km)",
      nearest_major_road: "Bekaji-Karewa Road",
      special_features: "Dedicated transformer, open-plan layout, high foot traffic corridor",
      verified_status: "Verified",
      data_source: "Site Visit",
      timestamp: "2026-06-01",
      last_visit: "2026-07-28"
    }
  },
  {
    id: 5,
    title: "Prime Residential Land, Half Plot",
    type: "Land",
    purpose: "Sale",
    location: "Yolde Pate, Yola",
    price: 12000000,
    priceLabel: "₦12,000,000",
    beds: 0,
    baths: 0,
    verified: false,
    summary: "Fenced half-plot in a fast-developing layout, C of O in progress — good for immediate residential build.",
    details: {
      property_id: "AK-2026-0005",
      // photo_exterior_1: "https://images.timbu.com/hotels-ng/supplier_4i16vrz5wi_2_900x550.jpg",
      address: "Plot 45, Yolde Pate Layout",
      street: "Yolde Pate Layout Extension",
      neighborhood: "Yolde Pate",
      landmark: "Near Yolde Pate Filling Station",
      property_category: "Land",
      toilets: null,
      store_rooms: null,
      number_of_floors: null,
      year_built: null,
      overall_condition: "Vacant Land",
      furnished_status: null,
      plot_size_sqm: 300,
      water_source: null,
      water_availability_hours: null,
      power_source: "Nearby PHCN line",
      power_availability_hours: null,
      security_type: "Fenced Perimeter",
      parking_type: null,
      parking_capacity: null,
      payment_cycle: "Outright",
      service_charge: null,
      agency_fee: "5% of sale price",
      live_availability: true,
      owner_name: "Alhaji Bello Adamu",
      owner_phone: "0705 000 0006",
      owner_email: null,
      nearest_market: "Yolde Pate Market (900m)",
      nearest_school: "Government Secondary School Yolde Pate (1.1km)",
      nearest_hospital: "Primary Health Centre Yolde Pate (1.3km)",
      nearest_major_road: "Yolde Pate Layout Road",
      special_features: "C of O in progress, fenced perimeter, dry-season accessible road",
      verified_status: "Pending Verification",
      data_source: "Owner Submission",
      timestamp: "2026-08-20",
      last_visit: null
    }
  }
];

// ===== Illustrated scenes (self-contained SVG, no external images/requests) =====
const ILLUS_HOUSE = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#14304F"/><circle cx="335" cy="45" r="30" fill="#F0A93E" opacity="0.85"/><path d="M0 175 L60 175 L60 120 L110 90 L160 120 L160 175 Z" fill="#0B1F35"/><rect x="80" y="140" width="24" height="35" fill="#FBF7F0"/><rect x="120" y="140" width="18" height="18" fill="#E8622C" opacity="0.8"/><path d="M150 175 L230 175 L230 100 L300 65 L370 100 L370 175 Z" fill="#1A3A5C"/><rect x="255" y="130" width="26" height="45" fill="#FBF7F0"/><rect x="290" y="125" width="20" height="20" fill="#F0A93E" opacity="0.7"/><rect x="320" y="125" width="20" height="20" fill="#F0A93E" opacity="0.7"/><rect x="0" y="175" width="400" height="45" fill="#0E2440"/><circle cx="30" cy="200" r="10" fill="#1F3D2B"/><rect x="27" y="185" width="6" height="18" fill="#1F3D2B"/></svg>`;
const ILLUS_LAND = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#1F3D2B"/><circle cx="345" cy="40" r="26" fill="#F0A93E" opacity="0.9"/><rect x="0" y="150" width="400" height="70" fill="#3E5A3E"/><path d="M0 150 L400 150" stroke="#FBF7F0" stroke-width="2" stroke-dasharray="10 8" opacity="0.6"/><g stroke="#0B1F35" stroke-width="4" opacity="0.7"><line x1="40" y1="150" x2="40" y2="120"/><line x1="150" y1="150" x2="150" y2="120"/><line x1="260" y1="150" x2="260" y2="120"/><line x1="360" y1="150" x2="360" y2="120"/></g><g fill="#0B1F35" opacity="0.7"><circle cx="40" cy="118" r="5"/><circle cx="150" cy="118" r="5"/><circle cx="260" cy="118" r="5"/><circle cx="360" cy="118" r="5"/></g></svg>`;
const ILLUS_COMMERCIAL = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#3A2E17"/><rect x="90" y="40" width="220" height="180" fill="#5A4A2E"/><g fill="#F0A93E" opacity="0.85"><rect x="115" y="65" width="26" height="26"/><rect x="160" y="65" width="26" height="26"/><rect x="205" y="65" width="26" height="26"/><rect x="250" y="65" width="26" height="26"/><rect x="115" y="105" width="26" height="26"/><rect x="160" y="105" width="26" height="26"/><rect x="205" y="105" width="26" height="26"/><rect x="250" y="105" width="26" height="26"/><rect x="115" y="145" width="26" height="26"/><rect x="205" y="145" width="26" height="26"/><rect x="250" y="145" width="26" height="26"/></g><rect x="160" y="150" width="40" height="65" fill="#0B1F35"/><rect x="90" y="30" width="220" height="12" fill="#E8622C"/></svg>`;
const ILLUS_HOTEL = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#7A3B10"/><rect x="120" y="20" width="170" height="200" fill="#B8611F"/><g fill="#FBF7F0" opacity="0.9"><rect x="140" y="40" width="18" height="18"/><rect x="175" y="40" width="18" height="18"/><rect x="210" y="40" width="18" height="18"/><rect x="245" y="40" width="18" height="18"/><rect x="140" y="75" width="18" height="18"/><rect x="175" y="75" width="18" height="18"/><rect x="210" y="75" width="18" height="18"/><rect x="245" y="75" width="18" height="18"/><rect x="140" y="110" width="18" height="18"/><rect x="175" y="110" width="18" height="18"/><rect x="210" y="110" width="18" height="18"/><rect x="245" y="110" width="18" height="18"/></g><rect x="180" y="160" width="50" height="60" fill="#0B1F35"/><rect x="60" y="150" width="10" height="70" fill="#1F3D2B"/><circle cx="65" cy="140" r="16" fill="#1F3D2B"/><rect x="330" y="150" width="10" height="70" fill="#1F3D2B"/><circle cx="335" cy="140" r="16" fill="#1F3D2B"/></svg>`;
const ILLUS = { House: ILLUS_HOUSE, Land: ILLUS_LAND, Commercial: ILLUS_COMMERCIAL, Hotel: ILLUS_HOTEL };

// Renders the property's real photo if one was uploaded (details.photo_exterior_1
// holds a URL — see the Cloudinary upload flow in list-property.html), otherwise
// falls back to the illustrated scene. Card and detail page both call this so
// there's one place that decides "do we have a real photo yet?"
function mediaMarkup(p){
  const photoUrl = p.details && p.details.photo_exterior_1;
  if(photoUrl){
    return `<img src="${photoUrl}" alt="${p.title}" loading="lazy">`;
  }
  return ILLUS[p.type] || ILLUS_HOUSE;
}

function propertyCardHTML(p){
  const badge = p.verified
    ? `<span class="badge-verified">✓ Verified</span>`
    : `<span class="badge-pending">Pending Verification</span>`;
  const metaBits = [];
  if(p.beds) metaBits.push(`<span>🛏 ${p.beds} bed</span>`);
  if(p.baths) metaBits.push(`<span>🛁 ${p.baths} bath</span>`);
  if(!p.beds && !p.baths) metaBits.push(`<span>📐 Land parcel</span>`);
  const purposeLabel = p.purpose === 'Sale' ? 'For Sale' : p.purpose === 'Rent' ? 'For Rent' : 'Nightly Stay';

  return `
    <a class="card" href="property.html?id=${p.id}">
      <div class="card-media">
        ${mediaMarkup(p)}
        <span class="badge-purpose">${purposeLabel}</span>
        ${badge}
      </div>
      <div class="card-body">
        <div class="card-price">${p.priceLabel}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-loc">📍 ${p.location}</div>
        <div class="card-meta">${metaBits.join('')}</div>
        <span class="card-cta">View Details →</span>
      </div>
    </a>
  `;
}

function initMobileNav(){
  const btn = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav.links');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', initMobileNav);
