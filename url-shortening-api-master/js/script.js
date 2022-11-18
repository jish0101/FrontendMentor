// Mobile toggle js

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const primaryHeader = document.querySelector(".primary-header");

mobileNavToggle.addEventListener("click", () => {
  navList.toggleAttribute("data-expanded");
  if (navList.hasAttribute("data-expanded")) {
    primaryHeader.setAttribute("data-overlay", true);
    mobileNavToggle.setAttribute("aria-expanded", true);
  } else {
    primaryHeader.removeAttribute("data-overlay");
    mobileNavToggle.setAttribute("aria-expanded", false);
  }
});

// Shorten api intergartion

const longLink = document.querySelector(".url-input");

const handleSubmit = document.querySelector(".submit-url");

const shortUrlSection = document.querySelector(".short-url");

const urlContainer = document.querySelector('.url-container');

const urlInput = document.querySelector('.url-input');

handleSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

const submit = async () => {
  if (longLink.value !== "") {
    const shortUrl = await getShortUrl(longLink);
    if (shortUrl) {
      createUrlContainer(shortUrl);
    } else {
      showError(true);
    }
  } else {
    showError(true);
  }
};

const getShortUrl = async (longLink) => {
  const result = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${longLink.value}`
  );
  const data = await result.json();
  let shortUrl = "";
  if (data.ok) {
    if (
      data.result.full_short_link2 === "" ||
      data.result.full_short_link2 === undefined
    ) {
      shortUrl = data.result.full_short_link;
    } else {
      shortUrl = data.result.full_short_link2;
    }
    return shortUrl;
  } else {
    return false;
  }
};

const createUrlContainer = (shortUrl) => {
  const container = document.importNode(linkTemplate.content, true);
  const urlPara = container.querySelector(".long-link");
  urlPara.innerText = longLink.value;
  const linkToUrl = container.querySelector(".link-to-url");
  linkToUrl.setAttribute("href", `${shortUrl}`);
  linkToUrl.textContent = shortUrl;
  longLink.value = "";
  const copyUrlBtn = container.querySelector(".copy-url-btn");
  copyUrlBtn.addEventListener("click", () => {
    copyText(shortUrl);
  });
  shortUrlSection.append(container);
};

const showError = (boolean) => {
  if (boolean) {
    urlContainer.setAttribute("data-type", "error");
    urlInput.setAttribute("data-type", "error");
  } else {
    urlContainer.removeAttribute("data-type");
    urlInput.removeAttribute("data-type");
  }
};

const copyText = async (text) => {
  await navigator.clipboard.writeText(text);
  const copyUrlBtn = document.querySelectorAll(".copy-url-btn");
  copyUrlBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn);
      btn.setAttribute("data-type", "clicked");
      btn.innerText = "Copied!";
    });
  });
};
