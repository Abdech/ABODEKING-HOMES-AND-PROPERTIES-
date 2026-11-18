// =====================================================================
// AbodeKing listings — Supabase is the single source of truth.
// Public page data is loaded from published rows only.
// Owner contact fields are deliberately excluded from the public objects.
// =====================================================================

let PROPERTIES = [];

const propertiesReady = (async function loadProperties() {
  if (!window.supabase) {
    throw new Error("Supabase client is not loaded. Check the Supabase script tag before common.js.");
  }

  const { createClient } = window.supabase;
  const db = createClient(
    "https://bzwctfcavxhsxvxhpyie.supabase.co",
    "sb_publishable_eJHODFHVtOJ-ApJC_P26SA_U70AoPsd"
  );

  const { data, error } = await db
    .from("listings")
    .select("*")
    .eq("publish_status", "published")
    .order("id", { ascending: true });

  if (error) throw error;

  const privateFields = new Set([
    "owner_name",
    "owner_phone",
    "owner_email",
    "manager_name",
    "manager_phone",
    "frontdesk_name",
    "frontdesk_phone",
    "contact_email"
  ]);

  const topLevelFields = new Set([
    "id",
    "title",
    "type",
    "purpose",
    "location",
    "price",
    "priceLabel",
    "beds",
    "baths",
    "verified",
    "summary",
    "publish_status"
  ]);

  PROPERTIES = (data || []).map((row) => {
    const details = {};

    for (const [key, value] of Object.entries(row)) {
      if (!topLevelFields.has(key) && !privateFields.has(key)) {
        details[key] = value;
      }
    }

    return {
      id: Number(row.id),
      title: row.title || "",
      type: row.type || "",
      purpose: row.purpose || "",
      location: row.location || "",
      price: row.price === null ? null : Number(row.price),
      priceLabel: row.priceLabel || (
        row.price == null
          ? "Price on request"
          : `₦${Number(row.price).toLocaleString("en-NG")}`
      ),
      beds: row.beds,
      baths: row.baths,
      verified: Boolean(row.verified),
      summary: row.summary || "",
      details
    };
  });

  return PROPERTIES;
})();


// ===== Illustrated scenes (self-contained SVG, no external images/requests) =====

const ILLUS_HOUSE = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#14304F"/><circle cx="335" cy="45" r="30" fill="#F0A93E" opacity="0.85"/><path d="M0 175 L60 175 L60 120 L110 90 L160 120 L160 175 Z" fill="#0B1F35"/><rect x="80" y="140" width="24" height="35" fill="#FBF7F0"/><rect x="120" y="140" width="18" height="18" fill="#E8622C" opacity="0.8"/><path d="M150 175 L230 175 L230 100 L300 65 L370 100 L370 175 Z" fill="#1A3A5C"/><rect x="255" y="130" width="26" height="45" fill="#FBF7F0"/><rect x="290" y="125" width="20" height="20" fill="#F0A93E" opacity="0.7"/><rect x="320" y="125" width="20" height="20" fill="#F0A93E" opacity="0.7"/><rect x="0" y="175" width="400" height="45" fill="#0E2440"/><circle cx="30" cy="200" r="10" fill="#1F3D2B"/><rect x="27" y="185" width="6" height="18" fill="#1F3D2B"/></svg>`;

const ILLUS_LAND = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#1F3D2B"/><circle cx="345" cy="40" r="26" fill="#F0A93E" opacity="0.9"/><rect x="0" y="150" width="400" height="70" fill="#3E5A3E"/><path d="M0 150 L400 150" stroke="#FBF7F0" stroke-width="2" stroke-dasharray="10 8" opacity="0.6"/><g stroke="#0B1F35" stroke-width="4" opacity="0.7"><line x1="40" y1="150" x2="40" y2="120"/><line x1="150" y1="150" x2="150" y2="120"/><line x1="260" y1="150" x2="260" y2="120"/><line x1="360" y1="150" x2="360" y2="120"/></g><g fill="#0B1F35" opacity="0.7"><circle cx="40" cy="118" r="5"/><circle cx="150" cy="118" r="5"/><circle cx="260" cy="118" r="5"/><circle cx="360" cy="118" r="5"/></g></svg>`;

const ILLUS_COMMERCIAL = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#3A2E17"/><rect x="90" y="40" width="220" height="180" fill="#5A4A2E"/><g fill="#F0A93E" opacity="0.85"><rect x="115" y="65" width="26" height="26"/><rect x="160" y="65" width="26" height="26"/><rect x="205" y="65" width="26" height="26"/><rect x="250" y="65" width="26" height="26"/><rect x="115" y="105" width="26" height="26"/><rect x="160" y="105" width="26" height="26"/><rect x="205" y="105" width="26" height="26"/><rect x="250" y="105" width="26" height="26"/><rect x="115" y="145" width="26" height="26"/><rect x="205" y="145" width="26" height="26"/><rect x="250" y="145" width="26" height="26"/></g><rect x="160" y="150" width="40" height="65" fill="#0B1F35"/><rect x="90" y="30" width="220" height="12" fill="#E8622C"/></svg>`;

const ILLUS_HOTEL = `<svg class="illus-bg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#7A3B10"/><rect x="120" y="20" width="170" height="200" fill="#B8611F"/><g fill="#FBF7F0" opacity="0.9"><rect x="140" y="40" width="18" height="18"/><rect x="175" y="40" width="18" height="18"/><rect x="210" y="40" width="18" height="18"/><rect x="245" y="40" width="18" height="18"/><rect x="140" y="75" width="18" height="18"/><rect x="175" y="75" width="18" height="18"/><rect x="210" y="75" width="18" height="18"/><rect x="245" y="75" width="18" height="18"/><rect x="140" y="110" width="18" height="18"/><rect x="175" y="110" width="18" height="18"/><rect x="210" y="110" width="18" height="18"/><rect x="245" y="110" width="18" height="18"/></g><rect x="180" y="160" width="50" height="60" fill="#0B1F35"/><rect x="60" y="150" width="10" height="70" fill="#1F3D2B"/><circle cx="65" cy="140" r="16" fill="#1F3D2B"/><rect x="330" y="150" width="10" height="70" fill="#1F3D2B"/><circle cx="335" cy="140" r="16" fill="#1F3D2B"/></svg>`;

const ILLUS = {
  House: ILLUS_HOUSE,
  Land: ILLUS_LAND,
  Commercial: ILLUS_COMMERCIAL,
  Hotel: ILLUS_HOTEL
};


// Renders the property's real photo if one was uploaded.
// Otherwise, it uses the illustrated fallback.

function mediaMarkup(p) {
  const photoUrl = p.details && p.details.photo_exterior_1;

  if (photoUrl) {
    return `<img src="${photoUrl}" alt="${p.title}" loading="lazy">`;
  }

  return ILLUS[p.type] || ILLUS_HOUSE;
}


function propertyCardHTML(p) {
  const badge = p.verified
    ? `<span class="badge-verified">✓ Verified</span>`
    : `<span class="badge-pending">Pending Verification</span>`;

  const metaBits = [];

  if (p.beds) metaBits.push(`<span>🛏 ${p.beds} bed</span>`);
  if (p.baths) metaBits.push(`<span>🛁 ${p.baths} bath</span>`);

  if (!p.beds && !p.baths) {
    metaBits.push(`<span>📐 Land parcel</span>`);
  }

  const purposeLabel =
    p.purpose === "Sale"
      ? "For Sale"
      : p.purpose === "Rent"
        ? "For Rent"
        : "Nightly Stay";

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
        <div class="card-meta">${metaBits.join("")}</div>
        <span class="card-cta">View Details →</span>
      </div>
    </a>
  `;
}


function initMobileNav() {
  const btn = document.querySelector(".mobile-toggle");
  const nav = document.querySelector("nav.links");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

document.addEventListener("DOMContentLoaded", initMobileNav);