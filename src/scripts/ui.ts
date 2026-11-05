function setupNav() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  if (!header || !toggle || toggle.dataset.ready === "1") return;
  toggle.dataset.ready = "1";

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  header.querySelectorAll<HTMLButtonElement>("[data-subtoggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const li = button.closest("li");
      if (!li) return;
      const open = li.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    header.querySelectorAll("li.is-open").forEach((li) => li.classList.remove("is-open"));
  });
}

function setupVideo() {
  const video = document.querySelector<HTMLVideoElement>("[data-hero-video]");
  const button = document.querySelector<HTMLButtonElement>("[data-hero-pause]");
  if (!video || video.dataset.ready === "1") return;
  video.dataset.ready = "1";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wide = window.matchMedia("(min-width: 960px)").matches;
  if (reduce || !wide) return;
  const src = video.dataset.src;
  if (!src) return;
  video.src = src;
  video.play().then(() => {
    if (button) button.hidden = false;
  }).catch(() => {});
  button?.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      button.textContent = "Pausar vídeo";
    } else {
      video.pause();
      button.textContent = "Reproducir vídeo";
    }
  });
}

function setupForms() {
  document.querySelectorAll<HTMLFormElement>("[data-form]").forEach((form) => {
    if (form.dataset.ready === "1") return;
    form.dataset.ready = "1";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const honey = form.querySelector<HTMLInputElement>('[name="empresa_web"]');
      if (honey && honey.value) return;
      const data = new FormData(form);
      const lines: string[] = [];
      data.forEach((value, key) => {
        if (key === "empresa_web" || key === "privacidad") return;
        lines.push(`${key}: ${String(value)}`);
      });
      const subject = form.dataset.subject || "Consulta Acusttel";
      window.location.href = `mailto:info@acusttel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      const status = form.querySelector("[data-status]");
      if (status) status.textContent = "Se ha preparado el correo a info@acusttel.com. Si no se abre, escríbanos directamente.";
    });
  });
}

function setupFilters() {
  const bar = document.querySelector<HTMLElement>("[data-filters]");
  if (!bar || bar.dataset.ready === "1") return;
  bar.dataset.ready = "1";
  const cards = document.querySelectorAll<HTMLElement>("[data-cats]");
  bar.querySelectorAll<HTMLButtonElement>("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "todos";
      bar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      cards.forEach((card) => {
        const cats = card.dataset.cats || "";
        const show = filter === "todos" || cats.split(" ").includes(filter);
        card.hidden = !show;
      });
    });
  });
}

setupNav();
setupVideo();
setupForms();
setupFilters();
