const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector("[data-header]");

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderNavigation() {
  SITE_DATA.navigation.forEach((item) => {
    const link = createElement("a", "", item.label);
    link.href = `#${item.target}`;
    link.dataset.navLink = item.target;
    nav.appendChild(link);
  });
}

function renderProgram() {
  const grid = document.querySelector("[data-program-grid]");
  SITE_DATA.program.forEach((item) => {
    const card = createElement("article", "program-card");
    const title = createElement("h3", "", item.title);
    const list = createElement("ul");

    item.points.forEach((point) => {
      list.appendChild(createElement("li", "", point));
    });

    card.append(title, list);
    grid.appendChild(card);
  });
}

function renderNews() {
  const grid = document.querySelector("[data-news-grid]");
  SITE_DATA.news.slice(0, 3).forEach((item) => {
    const article = createElement("article", "news-card");
    const date = createElement("time", "", new Date(item.date).toLocaleDateString("sk-SK"));
    date.dateTime = item.date;
    article.append(date, createElement("h3", "", item.title), createElement("p", "", item.text));

    if (item.link) {
      const link = createElement("a", "text-link", "Čítať viac");
      link.href = item.link;
      article.appendChild(link);
    }

    grid.appendChild(article);
  });
}

function renderLists() {
  const aboutList = document.querySelector("[data-about-points]");
  SITE_DATA.about.points.forEach((point) => aboutList.appendChild(createElement("li", "", point)));

  const supportList = document.querySelector("[data-support-options]");
  SITE_DATA.support.options.forEach((option) => supportList.appendChild(createElement("li", "", option)));

  const legalList = document.querySelector("[data-legal-list]");
  [SITE_DATA.legal.sponsor, SITE_DATA.legal.supplier, SITE_DATA.legal.transparentAccount, SITE_DATA.legal.candidate].forEach(
    (item) => legalList.appendChild(createElement("li", "", item))
  );
}

function hydrateContent() {
  setText("[data-candidate-name]", SITE_DATA.candidate.name);
  setText("[data-slogan]", SITE_DATA.candidate.slogan);
  setText("[data-intro]", SITE_DATA.candidate.intro);
  setText("[data-about-kicker]", SITE_DATA.about.kicker);
  setText("[data-about-title]", SITE_DATA.about.title);
  setText("[data-about-text]", SITE_DATA.about.text);
  setText("[data-program-intro]", SITE_DATA.programIntro);
  setText("[data-why-title]", SITE_DATA.why.title);
  setText("[data-why-text]", SITE_DATA.why.text);
  setText("[data-why-quote]", SITE_DATA.why.quote);
  setText("[data-support-title]", SITE_DATA.support.title);
  setText("[data-support-text]", SITE_DATA.support.text);
  setText("[data-contact-name]", SITE_DATA.candidate.name);
  setText("[data-contact-note]", SITE_DATA.contact.note);
  setText("[data-legal-note]", SITE_DATA.legal.note);
  setText("[data-privacy-text]", SITE_DATA.privacy.text);
  setText("[data-footer-name]", SITE_DATA.candidate.name);
  setText("[data-year]", new Date().getFullYear().toString());

  const image = document.querySelector("[data-candidate-image]");
  image.src = SITE_DATA.candidate.image;
  image.alt = SITE_DATA.candidate.imageAlt;

  const email = document.querySelector("[data-contact-email]");
  email.href = `mailto:${SITE_DATA.contact.email}`;
  email.querySelector("strong").textContent = SITE_DATA.contact.email;

  const phone = document.querySelector("[data-contact-phone]");
  phone.href = `tel:${SITE_DATA.contact.phone.replace(/\s/g, "")}`;
  phone.querySelector("strong").textContent = SITE_DATA.contact.phone;

  document.querySelector("[data-contact-facebook]").href = SITE_DATA.contact.facebook;
}

function setupMenu() {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupActiveNavigation() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll("[data-nav-link]")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.dataset.navLink === entry.target.id);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupHeaderShadow() {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  });
}

renderNavigation();
hydrateContent();
renderProgram();
renderNews();
renderLists();
setupMenu();
setupActiveNavigation();
setupHeaderShadow();
