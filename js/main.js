/* Product copy extracted 6 Oct 2026 from the LT Shop:
   https://shop.lifetime.life/lth-power-creatine-monohydrate
   https://shop.lifetime.life/lth-nutrition/daily-essentials
   https://shop.lifetime.life/lth-flex-whey-protein-isolate
   https://shop.lifetime.life/lth-glow-omega-3-fish-oil
*/

const profile = {
  name: "Power",
  kicker: "Creatine monohydrate",
  lede:
    "Helps promote strength, lean body mass, and overall athletic performance.* Each serving is 5 grams of Creapure creatine monohydrate, with no artificial additives or fillers.",
  price: 35.99,
  compareAt: 39.99,
  image: "assets/power-creatine.jpg",
  imageAlt:
    "White tub of LTH Power Creatine Monohydrate. The label reads Power, dietary supplement, net wt 1 lb (16 oz) 450 g.",
  url: "https://shop.lifetime.life/lth-power-creatine-monohydrate",
  servings: 90,
  scoopGrams: 5,
  specs: [
    { value: "5 g", label: "Creapure per serving" },
    { value: "90", label: "Servings per tub" },
    { value: "450 g", label: "Net weight, 1 lb" },
    { value: "NSF", label: "Certified for Sport" },
  ],
  why:
    "Power Creatine Monohydrate uses Creapure, a clinically studied form of creatine, to support muscle strength, size, and power output. The flavorless powder mixes into water or a shake.",
  benefits: [
    {
      title: "Strength",
      detail:
        "Creatine helps replenish ATP, the body’s primary energy molecule, to support explosive power and short bursts of high-intensity effort. With resistance training, it is clinically shown to enhance performance and lean body mass.",
    },
    {
      title: "Energy",
      detail:
        "It helps sustain muscle energy and delay fatigue during intense exercise, and may improve muscle hydration and endurance for a more consistent output.",
    },
    {
      title: "Focus",
      detail:
        "It supports brain energy metabolism and focus, especially during high-intensity training and mental work.",
    },
    {
      title: "Formula",
      detail:
        "One ingredient: Creapure creatine monohydrate. No additives, fillers, or artificial ingredients. Flavorless, vegan, non-GMO, and gluten-free. Batches are tested for identity, purity, potency, and contaminants, and the powder is made in the USA in FDA-registered, GMP-certified facilities.",
    },
  ],
  use: "Mix one rounded scoop (5 g) into any liquid, once or twice a day.",
  ingredient: {
    name: "Creatine monohydrate (Creapure)",
    benefit:
      "One of the most-researched performance supplements. Used to help increase lean body mass, muscular strength, cardiovascular ability, brain function, and overall athletic performance.",
  },
};

const essentials = [
  {
    name: "LTH Flex Whey Protein Isolate",
    role: "Daily protein",
    image: "assets/flex-whey.jpg",
    priceLabel: "As low as $62.99",
    url: "https://shop.lifetime.life/lth-flex-whey-protein-isolate",
    linkLabel: "View Flex Whey on LT Shop",
    points: [
      "20 grams of ultra-filtered, cold-processed whey protein isolate per serving, with less than 0.5 g lactose and no added sugar.",
      "Made to support recovery, lean muscle, and satiety. 30 servings per container.",
      "NSF Certified for Sport and non-GMO. Mix two level scoops (25–28 g) with 6–8 oz of liquid.",
    ],
  },
  {
    name: "LTH Power Creatine Monohydrate",
    role: "Strength",
    image: "assets/creatine-tub.png",
    priceLabel: "$35.99",
    compareAt: 39.99,
    url: profile.url,
    linkLabel: "View Power Creatine on LT Shop",
    points: [
      "5 grams of Creapure creatine monohydrate per serving. Flavorless and a single ingredient.",
      "Supports strength, lean mass, energy output, and focus. 90 servings per tub.",
      "NSF Certified for Sport, vegan, and non-GMO. Mix one rounded scoop into any liquid, once or twice a day.",
    ],
  },
  {
    name: "LTH Glow Omega-3 Fish Oil",
    role: "Omega-3",
    image: "assets/glow-omega.png",
    priceLabel: "$26.99",
    compareAt: 29.99,
    url: "https://shop.lifetime.life/lth-glow-omega-3-fish-oil",
    linkLabel: "View Glow Omega-3 on LT Shop",
    points: [
      "2,400 mg EPA + DHA per serving, from wild-caught anchovies off the coast of Chile.",
      "Re-esterified triglyceride form. Supports cardiovascular function, cognition, joints, and skin. 120 softgels, a 30-day supply.",
      "NSF Certified for Sport. Non-GMO, gluten-free, soy-free, and dairy-free, with peppermint oil to soften the aftertaste.",
    ],
  },
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value == null || value === false) return;
    if (key === "className") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value === true ? "" : value);
  });
  children.flat().forEach((child) => {
    if (child == null) return;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  });
  return node;
}

function priceBlock(amount, compareAt) {
  const nodes = [el("span", { className: "price-now", text: money.format(amount) })];
  if (compareAt) {
    nodes.push(
      el("span", { className: "visually-hidden", text: "was" }),
      el("s", { className: "price-was", text: money.format(compareAt) })
    );
  }
  return nodes;
}

function renderProfile() {
  const section = document.getElementById("profile");
  const specs = el(
    "div",
    { className: "spec-band" },
    [
      el(
        "ul",
        { className: "specs section-wrap" },
        profile.specs.map((spec) =>
          el("li", {}, [
            el("span", { className: "spec-value", text: spec.value }),
            el("span", { className: "spec-label", text: spec.label }),
          ])
        )
      ),
    ]
  );

  section.append(
    el("div", { className: "section-wrap profile-grid" }, [
      el("div", { className: "profile-copy" }, [
        el("p", { className: "profile-kicker", text: profile.kicker }),
        el("h1", { className: "profile-title", id: "profile-heading", text: profile.name }),
        el("p", { className: "profile-lede", text: profile.lede }),
        el("p", { className: "price" }, priceBlock(profile.price, profile.compareAt)),
        el("div", { className: "profile-actions" }, [
          el("a", { className: "profile-cta", href: profile.url, text: "View on LT Shop" }),
          el("a", { className: "text-link", href: "#formula", text: "Read the formula" }),
        ]),
      ]),
      el("figure", { className: "profile-photo" }, [
        el("img", {
          src: profile.image,
          alt: profile.imageAlt,
          width: "1024",
          height: "1024",
        }),
      ]),
    ]),
    specs
  );
}

function renderFormula() {
  const section = document.getElementById("formula");
  const detail = el("p", {
    className: "benefit-detail",
    id: "benefit-detail",
    "aria-live": "polite",
    text: profile.benefits[0].detail,
  });
  const list = el(
    "div",
    { className: "benefit-list", role: "group", "aria-label": "What a serving supports" },
    profile.benefits.map((benefit, index) => {
      const button = el("button", {
        className: "benefit",
        type: "button",
        text: benefit.title,
        "aria-pressed": index === 0 ? "true" : "false",
      });
      button.addEventListener("click", () => {
        list.querySelectorAll(".benefit").forEach((item) => {
          item.setAttribute("aria-pressed", "false");
        });
        button.setAttribute("aria-pressed", "true");
        detail.textContent = benefit.detail;
      });
      return button;
    })
  );

  section.append(
    el("div", { className: "section-wrap formula-grid" }, [
      el("div", { className: "formula-copy" }, [
        el("h2", { id: "formula-heading", text: "Why you’ll love it" }),
        el("p", { className: "prose", text: profile.why }),
      ]),
      el("div", { className: "formula-aside" }, [list, detail]),
    ])
  );
}

function renderEssentials() {
  const section = document.getElementById("essentials");
  const list = el("div", { className: "essential-list" });

  essentials.forEach((product, index) => {
    const panelId = `essential-panel-${index}`;
    const open = index === 0;
    const button = el(
      "button",
      {
        className: "essential-button",
        type: "button",
        "aria-expanded": open ? "true" : "false",
        "aria-controls": panelId,
      },
      [
        el("img", {
          className: "essential-photo",
          src: product.image,
          alt: "",
          width: "96",
          height: "96",
        }),
        el("span", { className: "essential-copy" }, [
          el("span", { className: "essential-name", text: product.name }),
          el("span", { className: "essential-role", text: product.role }),
        ]),
        el("span", { className: "essential-price" }, [
          product.priceLabel,
          product.compareAt
            ? el("span", { className: "visually-hidden", text: ", was" })
            : null,
          product.compareAt
            ? el("s", { className: "price-was", text: money.format(product.compareAt) })
            : null,
        ]),
        el("span", { className: "mark", "aria-hidden": "true" }),
      ]
    );
    const panel = el("div", { className: "essential-panel", id: panelId }, [
      el(
        "ul",
        { className: "essential-points" },
        product.points.map((point) => el("li", { text: point }))
      ),
      el("a", { className: "text-link", href: product.url, text: product.linkLabel }),
    ]);
    if (!open) panel.hidden = true;

    button.addEventListener("click", () => {
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      list.querySelectorAll(".essential").forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".essential-button").setAttribute("aria-expanded", "false");
        item.querySelector(".essential-panel").hidden = true;
      });
      if (willOpen) {
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        button.closest(".essential").classList.add("is-open");
      }
    });

    list.append(
      el("article", { className: open ? "essential is-open" : "essential" }, [
        el("h3", {}, [button]),
        panel,
      ])
    );
  });

  section.append(
    el("div", { className: "section-wrap" }, [
      el("h2", { id: "essentials-heading", text: "Featured essentials" }),
      el("p", {
        className: "prose essentials-intro",
        text: "The first three products in Life Time’s Daily Essentials collection.",
      }),
      list,
    ])
  );
}

function servingCopy(scoops) {
  const days = profile.servings / scoops;
  const grams = profile.scoopGrams * scoops;
  return {
    days: `${days} days`,
    note: `At ${grams} grams a day, this ${profile.servings}-serving tub lasts ${days} days.`,
  };
}

function renderUse() {
  const section = document.getElementById("use");
  const result = servingCopy(1);
  const days = el("span", { className: "servings-days", text: result.days });
  const note = el("span", { className: "servings-note", text: result.note });
  const choices = [
    { scoops: 1, label: "Once a day" },
    { scoops: 2, label: "Twice a day" },
  ];
  const group = el("div", {
    className: "segment",
    role: "group",
    "aria-label": "Scoops per day",
  });

  choices.forEach((choice) => {
    const button = el("button", {
      type: "button",
      text: choice.label,
      "aria-pressed": choice.scoops === 1 ? "true" : "false",
    });
    button.addEventListener("click", () => {
      group.querySelectorAll("button").forEach((item) => {
        item.setAttribute("aria-pressed", "false");
      });
      button.setAttribute("aria-pressed", "true");
      const next = servingCopy(choice.scoops);
      days.textContent = next.days;
      note.textContent = next.note;
    });
    group.append(button);
  });

  section.append(
    el("div", { className: "section-wrap use-grid" }, [
      el("div", {}, [
        el("h2", { id: "use-heading", text: "How to use it" }),
        el("p", { className: "prose", text: profile.use }),
        el("div", { className: "ingredient" }, [
          el("h3", { text: profile.ingredient.name }),
          el("p", { className: "prose", text: profile.ingredient.benefit }),
        ]),
      ]),
      el("div", { className: "servings" }, [
        el("h3", { text: "How long a tub lasts" }),
        group,
        el("p", { "aria-live": "polite" }, [days, note]),
      ]),
    ])
  );
}

function renderFooter() {
  const footer = document.querySelector(".site-footer");
  footer.append(
    el("div", { className: "section-wrap" }, [
      el("h2", { text: "LTH Power Creatine Monohydrate" }),
      el("a", { className: "footer-cta", href: profile.url, text: "View on LT Shop" }),
      el("p", {
        className: "fine-print",
        text: "*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
      }),
      el("p", {
        className: "fine-print",
        text: "If you’re pregnant, nursing, or taking any medications, consult a doctor or medical provider before starting any supplements.",
      }),
      el("p", {
        className: "fine-print",
        text: "Product details were taken from the LT Shop on October 6, 2026.",
      }),
    ])
  );
}

function bindTheme() {
  const input = document.querySelector(".theme-toggle input");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const colors = { light: "#e4e4e4", dark: "#141614" };

  function storedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  }

  function apply(theme, persist) {
    document.documentElement.setAttribute("data-theme", theme);
    input.checked = theme === "dark";
    if (themeColor) themeColor.setAttribute("content", colors[theme]);
    if (!persist) return;
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {}
  }

  apply(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light", false);

  input.addEventListener("change", () => {
    apply(input.checked ? "dark" : "light", true);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const stored = storedTheme();
    if (stored === "light" || stored === "dark") return;
    apply(event.matches ? "dark" : "light", false);
  });
}

function bindNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const links = [...nav.querySelectorAll("a[href^='#']")];

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function updateCurrent() {
    const line = 120;
    let currentId = "";
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= line) currentId = section.id;
    });
    links.forEach((link) => {
      if (currentId && link.getAttribute("href") === `#${currentId}`) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  document.addEventListener("scroll", updateCurrent, { passive: true });
  updateCurrent();

  document.getElementById("shop-link").href = profile.url;
}

renderProfile();
renderFormula();
renderEssentials();
renderUse();
renderFooter();
bindTheme();
bindNav();
