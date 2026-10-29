/* ==========================================================
   Hope SA Foundation - script.js (Part 3)
   Each feature checks that its page elements exist first,
   so this one file is safe to load on every page.
   ========================================================== */
"use strict";

/* ---------- Small helpers ---------- */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Build an element safely (textContent avoids injecting HTML from user input)
function el(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

// A paragraph with a bold label, e.g. "Cost: Free"
function labelled(label, value) {
  const p = el("p");
  p.append(el("strong", label + " "), document.createTextNode(value));
  return p;
}

document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
  initLightbox();
  initInitiativeFilter();
  initEvents();
  initEnquiryForm();
  initContactForm();
  initMap();
});

/* ==========================================================
   1. ACCORDION (donate page FAQ)
   ========================================================== */
function initAccordion() {
  $$(".accordion-btn").forEach((button) => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen; // hide if it was open, show if it was closed
    });
  });
}

/* ==========================================================
   2. GALLERY LIGHTBOX
   Click (or press Enter on) an image to view it larger.
   Esc closes it, arrow keys move between images.
   ========================================================== */
function initLightbox() {
  const images = $$(".gallery img");
  if (!images.length) return;

  const box = el("div", undefined, "lightbox");
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Image viewer");
  box.innerHTML =
    '<button class="lb-close" aria-label="Close image viewer">&times;</button>' +
    '<button class="lb-nav lb-prev" aria-label="Previous image">&#10094;</button>' +
    '<figure><img alt="" /><figcaption></figcaption></figure>' +
    '<button class="lb-nav lb-next" aria-label="Next image">&#10095;</button>';
  document.body.appendChild(box);

  const bigImage = $("img", box);
  const caption = $("figcaption", box);
  let current = 0;
  let opener = null; // remembers what to re-focus when the lightbox closes

  function show(index) {
    current = (index + images.length) % images.length; // wraps around
    bigImage.src = images[current].currentSrc || images[current].src;
    bigImage.alt = images[current].alt;
    caption.textContent = `${images[current].alt} (${current + 1} of ${images.length})`;
  }
  function open(index) {
    opener = document.activeElement;
    show(index);
    box.hidden = false;
    document.body.classList.add("no-scroll");
    $(".lb-close", box).focus();
  }
  function close() {
    box.hidden = true;
    document.body.classList.remove("no-scroll");
    if (opener) opener.focus();
  }

  images.forEach((img, index) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", "Enlarge image: " + img.alt);
    img.addEventListener("click", () => open(index));
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(index);
      }
    });
  });

  $(".lb-close", box).addEventListener("click", close);
  $(".lb-prev", box).addEventListener("click", () => show(current - 1));
  $(".lb-next", box).addEventListener("click", () => show(current + 1));
  box.addEventListener("click", (e) => {
    if (e.target === box) close(); // click on the dark background
  });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}

/* ==========================================================
   3. SEARCH + SORT (initiatives page)
   Filters and re-orders the existing cards using the DOM.
   ========================================================== */
function initInitiativeFilter() {
  const grid = $("#initiative-grid");
  if (!grid) return;

  const cards = $$(".card", grid);
  cards.forEach((card, i) => (card.dataset.order = i));

  const search = $("#initiative-search");
  const sort = $("#initiative-sort");
  const count = $("#initiative-count");
  const none = $("#initiative-none");

  function update() {
    const query = search.value.trim().toLowerCase();
    const ordered = [...cards].sort((a, b) => {
      const titleA = $("h3", a).textContent;
      const titleB = $("h3", b).textContent;
      if (sort.value === "az") return titleA.localeCompare(titleB);
      if (sort.value === "za") return titleB.localeCompare(titleA);
      return a.dataset.order - b.dataset.order; // original order
    });

    let shown = 0;
    ordered.forEach((card) => {
      const matches = card.textContent.toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) shown++;
      grid.appendChild(card); // re-appending moves the card into sorted position
    });

    count.textContent = `Showing ${shown} of ${cards.length} initiatives`;
    none.hidden = shown !== 0;
  }

  search.addEventListener("input", update);
  sort.addEventListener("change", update);
  update();
}

/* ==========================================================
   4. DYNAMIC CONTENT - upcoming events (home page)
   Events are stored as data and turned into cards by JavaScript.
   Past events are filtered out automatically.
   (Sample events for demonstration only.)
   ========================================================== */
const EVENTS = [
  {
    date: "2026-10-31",
    title: "Monthly Food Hamper Packing Day",
    location: "Johannesburg",
    text: "Volunteers pack and sort food hampers for families in need.",
  },
  {
    date: "2026-11-25",
    title: "16 Days of Activism Awareness Launch",
    location: "Gauteng",
    text: "Kick-off of awareness activities against gender-based violence.",
  },
  {
    date: "2026-12-05",
    title: "Safer Women Care Pack Drive",
    location: "Durban",
    text: "Assembling and handing out care packs through the #SaferWomen Drive.",
  },
  {
    date: "2027-03-21",
    title: "Community Garden Planting Day",
    location: "Pietermaritzburg",
    text: "Planting day for a planned community food garden.",
  },
];

function initEvents() {
  const list = $("#events-list");
  if (!list) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = EVENTS.map((e) => ({
    ...e,
    when: new Date(e.date + "T00:00:00"),
  }))
    .filter((e) => e.when >= today)
    .sort((a, b) => a.when - b.when)
    .slice(0, 3);

  list.innerHTML = "";
  if (!upcoming.length) {
    list.appendChild(
      el("p", "No upcoming events right now. Please check back soon."),
    );
    return;
  }

  upcoming.forEach((e) => {
    const card = el("article", undefined, "card");
    card.append(
      el(
        "p",
        e.when.toLocaleDateString("en-ZA", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        "event-date",
      ),
      el("h3", e.title),
      el("p", e.location, "small"),
      el("p", e.text),
    );
    list.appendChild(card);
  });
}

/* ==========================================================
   5. FORM VALIDATION (shared helpers)
   ========================================================== */
const checks = {
  name: (input) => {
    const v = input.value.trim();
    if (!v) return "Please enter your full name.";
    if (v.length < 2) return "Your name must be at least 2 characters.";
    if (!/^[A-Za-zÀ-ÿ' -]+$/.test(v))
      return "Use letters, spaces, hyphens or apostrophes only.";
    return "";
  },
  email: (input) => {
    const v = input.value.trim();
    if (!v) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
      return "Enter a valid email, e.g. name@example.com.";
    return "";
  },
  // "required" can be true/false, or a function that decides at the moment of checking
  phone: (required) => (input) => {
    const v = input.value.trim();
    const mustHave = typeof required === "function" ? required() : required;
    if (!v)
      return mustHave
        ? "Please enter your phone number so we can reach you this way."
        : "";
    // South African numbers: 0 + 9 digits, or +27 + 9 digits
    if (!/^(\+27|0)[1-8][0-9]{8}$/.test(v.replace(/[\s-]/g, ""))) {
      return "Enter a valid South African number, e.g. 079 387 1716 or +27 79 387 1716.";
    }
    return "";
  },
  select: (input) => (input.value ? "" : "Please choose an option."),
  consent: (input) =>
    input.checked ? "" : "Please tick this box so we can contact you.",
  maxLength: (max, label) => (input) =>
    input.value.trim().length > max
      ? `${label} must be ${max} characters or fewer.`
      : "",
  message: (input) => {
    const v = input.value.trim();
    if (!v) return "Please enter a message.";
    if (v.length < 10) return "Your message must be at least 10 characters.";
    if (v.length > 500) return "Your message must be 500 characters or fewer.";
    return "";
  },
  cv: (input) => {
    const file = input.files[0];
    if (!file) return "";
    if (!/\.(pdf|docx?)$/i.test(file.name))
      return "Upload your CV as a PDF or Word file (.pdf, .doc, .docx).";
    if (file.size > 2 * 1024 * 1024) return "Your CV must be 2 MB or smaller.";
    return "";
  },
};

// Show or clear the error message under one field
function setFieldError(input, message) {
  const errorBox = document.getElementById(input.id + "-error");
  input.classList.toggle("invalid", Boolean(message));
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (errorBox) errorBox.textContent = message;
  return !message;
}

// Attach live validation to a form. Returns a function that checks every field.
function wireValidation(rules) {
  const check = (id) => {
    const input = document.getElementById(id);
    return setFieldError(input, rules[id](input));
  };
  Object.keys(rules).forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("blur", () => check(id));
    ["input", "change"].forEach((evt) =>
      input.addEventListener(evt, () => {
        if (input.classList.contains("invalid")) check(id); // re-check once an error is showing
      }),
    );
  });
  function validateAll() {
    let firstBad = null;
    Object.keys(rules).forEach((id) => {
      if (!check(id) && !firstBad) firstBad = document.getElementById(id);
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }
  validateAll.check = check; // lets other code re-check a single field
  return validateAll;
}

// Re-check the phone field when the preferred-contact radio buttons change
function watchRadios(name, phoneId, validateAll) {
  $$(`input[name='${name}']`).forEach((radio) =>
    radio.addEventListener("change", () => {
      const phone = document.getElementById(phoneId);
      if (phone.value || phone.classList.contains("invalid"))
        validateAll.check(phoneId);
    }),
  );
}

function wireCounter(textarea, counter, max) {
  const update = () =>
    (counter.textContent = `${textarea.value.length} / ${max} characters`);
  textarea.addEventListener("input", update);
  update();
}

/* ==========================================================
   6. ENQUIRY FORM (enquiry.html)
   Validate -> send with AJAX (fetch) -> show a tailored response
   about cost and availability.
   ========================================================== */
const ENQUIRY_RESPONSES = {
  Volunteering: {
    cost: "Volunteering is free.",
    availability:
      "Weekday and weekend outreach slots are available. We match you to a project in your area.",
    next: "Our outreach team will reply within 5 working days.",
  },
  Sponsorship: {
    cost: "Sponsorship is flexible. As a sample, sponsoring a food hamper starts from R350 per hamper.",
    availability: "Sponsorship opportunities are open all year.",
    next: "Our corporate team will send you a proposal within 7 working days.",
  },
  Partnership: {
    cost: "There is no joining fee. Partnership terms are agreed case by case.",
    availability: "A discovery call can be arranged within 10 working days.",
    next: "Our partnerships team will contact you to set up a time.",
  },
  Fundraising: {
    cost: "Starting a fundraiser costs nothing. We can supply a fundraising pack.",
    availability: "You can start a campaign at any time of the year.",
    next: "We will email you the pack and a contact person within 5 working days.",
  },
  "General enquiry": {
    cost: "There is no cost to enquire.",
    availability: "Our team is available on weekdays.",
    next: "We will reply within 2 working days.",
  },
};

function initEnquiryForm() {
  const form = $("#enquiry-form");
  if (!form) return;

  const validateAll = wireValidation({
    name: checks.name,
    email: checks.email,
    phone: checks.phone(() => !$("#method-email").checked), // needed for phone or WhatsApp
    type: checks.select,
    availability: checks.maxLength(100, "Availability / Area"),
    message: checks.message,
    cv: checks.cv,
    consent: checks.consent,
  });
  watchRadios("contact-method", "phone", validateAll);
  wireCounter($("#message"), $("#message-count"), 500);

  const status = $("#enquiry-status");
  const responseBox = $("#enquiry-response");
  const button = $("button[type='submit']", form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // stop the normal page reload
    responseBox.hidden = true;
    status.className = "form-status";

    if (!validateAll()) {
      status.textContent = "Please fix the highlighted fields and try again.";
      status.classList.add("error-msg");
      return;
    }
    status.textContent = "";

    button.disabled = true;
    button.textContent = "Sending...";

    // AJAX: send the form data in the background, without reloading the page
    let sent = false;
    try {
      const result = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });
      sent = result.ok;
    } catch (error) {
      sent = false; // e.g. offline, or testing on a computer without a server
    }

    const method = $("input[name='contact-method']:checked").value;
    showEnquiryResponse(
      responseBox,
      $("#name").value.trim(),
      $("#type").value,
      sent,
      method,
    );
    if (sent) form.reset(); // clear the form after a successful send
    wireCounterReset();
    button.disabled = false;
    button.textContent = "Submit Enquiry";
  });

  function wireCounterReset() {
    $("#message-count").textContent =
      `${$("#message").value.length} / 500 characters`;
  }
}

function showEnquiryResponse(box, name, type, sent, method) {
  const info = ENQUIRY_RESPONSES[type] || ENQUIRY_RESPONSES["General enquiry"];
  box.innerHTML = "";
  box.append(
    el("h3", `Thank you, ${name.split(" ")[0]}!`),
    el("p", `Here is what to expect for your ${type.toLowerCase()} enquiry:`),
    labelled("Cost:", info.cost),
    labelled("Availability:", info.availability),
    labelled("Next step:", info.next),
    labelled("We will contact you by:", method),
    el(
      "p",
      "Figures shown are sample information for this student project.",
      "small",
    ),
    el(
      "p",
      sent
        ? "Your enquiry has been sent to our team."
        : "We could not send your enquiry to the server just now (this is normal when testing locally). Please email enquiries@hopesa.org instead.",
      sent ? "form-status" : "form-status error-msg",
    ),
  );
  box.hidden = false;
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ==========================================================
   7. CONTACT FORM (contact.html)
   Validate -> compile an email -> let the visitor send it.
   ========================================================== */
const RECIPIENTS = {
  "Volunteer message": "Outreach@hopesa.org",
  "Partnership or corporate": "info@hopesa.org",
};

function initContactForm() {
  const form = $("#contact-form");
  if (!form) return;

  const validateAll = wireValidation({
    "contact-name": checks.name,
    "contact-email": checks.email,
    "contact-phone": checks.phone(() => $("#reply-phone").checked), // needed if they want a phone reply
    "contact-type": checks.select,
    "contact-message": checks.message,
  });
  watchRadios("reply-method", "contact-phone", validateAll);
  wireCounter($("#contact-message"), $("#contact-message-count"), 500);

  const status = $("#contact-status");
  const preview = $("#email-preview");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    preview.hidden = true;
    status.className = "form-status";

    if (!validateAll()) {
      status.textContent = "Please fix the highlighted fields and try again.";
      status.classList.add("error-msg");
      return;
    }
    status.textContent = "";

    const name = $("#contact-name").value.trim();
    const email = $("#contact-email").value.trim();
    const phone = $("#contact-phone").value.trim() || "Not provided";
    const type = $("#contact-type").value;
    const message = $("#contact-message").value.trim();
    const replyMethod = $("input[name='reply-method']:checked").value;
    const wantsCopy = $("#contact-copy").checked;

    // Compile the email
    const to = RECIPIENTS[type] || "enquiries@hopesa.org";
    const subject = `${type} - website message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage type: ${type}\nPreferred reply: ${replyMethod}\n\nMessage:\n${message}`;
    let mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (wantsCopy) mailto += `&cc=${encodeURIComponent(email)}`; // copy the visitor in

    // Show it to the visitor so they can check it before sending
    const sendLink = el("a", "Open in my email app", "button");
    sendLink.href = mailto;
    preview.innerHTML = "";
    preview.append(
      el("h3", "Your email is ready"),
      labelled("To:", to),
      labelled("Subject:", subject),
      el("pre", body, "email-body"),
      sendLink,
      el(
        "p",
        "This opens your email app with the message filled in. Press send there to deliver it.",
        "small",
      ),
    );
    preview.hidden = false;
    preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

/* ==========================================================
   8. INTERACTIVE MAP (contact page) - Leaflet + OpenStreetMap
   ========================================================== */
function initMap() {
  const mapBox = $("#outreach-map");
  if (!mapBox) return;

  if (typeof L === "undefined") {
    mapBox.textContent =
      "The map could not be loaded. Please check your internet connection.";
    return;
  }

  const places = [
    {
      name: "Johannesburg & Gauteng",
      coords: [-26.2041, 28.0473],
      text: "Diepsloot, Alberton, Tembisa, Brixton, Fietas and more.",
    },
    {
      name: "Pietermaritzburg",
      coords: [-29.6006, 30.3794],
      text: "Disaster-relief and food-support distribution network.",
    },
    {
      name: "Durban & KwaZulu-Natal",
      coords: [-29.8587, 31.0218],
      text: "Reservoir Hills, Phoenix, Verulam, Tongaat, Chatsworth and more.",
    },
  ];

  const map = L.map(mapBox, { scrollWheelZoom: false });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  places.forEach((place) => {
    L.marker(place.coords)
      .addTo(map)
      .bindPopup(`<strong>${place.name}</strong><br>${place.text}`);
  });
  map.fitBounds(
    places.map((p) => p.coords),
    { padding: [40, 40] },
  );
}
