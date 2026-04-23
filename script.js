(() => {
  const data = window.SITE_DATA;
  const yearNode = document.getElementById("current-year");

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  if (!data) {
    return;
  }

  document.title = `${data.profile.name} | ${data.profile.title}`;

  const linkMap = {
    "GitHub": data.links.github,
    "Google Scholar": data.links.scholar,
    "LinkedIn": data.links.linkedin,
    "Email": data.links.email,
    "Download CV": data.profile.cv,
    "Download Full CV": data.profile.cv
  };

  document.querySelectorAll("a").forEach((anchor) => {
    const label = anchor.textContent.trim();
    if (linkMap[label]) {
      anchor.setAttribute("href", linkMap[label]);
    }
  });

  const setMeta = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value) {
      node.setAttribute("content", value);
    }
  };

  setMeta('meta[name="description"]', data.profile.intro);
  setMeta('meta[property="og:title"]', `${data.profile.name} | ${data.profile.title}`);
  setMeta('meta[property="og:description"]', data.profile.intro);
  setMeta('meta[property="og:image"]', data.profile.image);

  document.querySelectorAll(".abs-button").forEach((button) => {
    const targetId = button.getAttribute("aria-controls");
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) {
      return;
    }

    button.addEventListener("click", () => {
      const isOpen = !target.hasAttribute("hidden");
      target.toggleAttribute("hidden", isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });
})();
