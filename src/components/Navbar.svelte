<script>
  export let isHomePage = true;
  let isOpen = false;
  let isScrolled = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="fixed-top">
  <div
    role="banner"
    class="navbar w-nav"
    class:scrolled={isScrolled || isOpen}
    class:dark-mode={!isHomePage}
  >
    <div class="container w-container">
      <div class="w-layout-grid navbar-grid">
        <a href="/" aria-current="page" class="brand w-nav-brand w--current">
          <img
            loading="lazy"
            src="/images/maestrat-nature-logo.svg"
            alt="Maestrat Nature Logo"
            class="navbar-logo"
          />
        </a>
        <nav
          role="navigation"
          class="nav-menu w-nav-menu"
          class:w--open={isOpen}
        >
          <a
            href="/#about"
            class="nav-link w-nav-link"
            on:click={() => (isOpen = false)}>About</a
          >
          <a
            href="/#info"
            class="nav-link w-nav-link"
            on:click={() => (isOpen = false)}>Info</a
          >
          <a
            href="mailto:info@campingmaestrat.com"
            class="nav-link w-nav-link btn-contact"
            on:click={() => (isOpen = false)}>Contact</a
          >
        </nav>
        <div
          class="menu-button w-nav-button"
          on:click={toggleMenu}
          aria-label="menu"
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === "Enter" && toggleMenu()}
        >
          <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .navbar {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: transparent;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    margin: 0 auto;
    border-radius: 0;
  }

  /* Initial state (Transparent background) */
  .navbar:not(.scrolled):not(.dark-mode) .navbar-logo {
    filter: brightness(0) invert(1); /* Makes the logo white */
    transition: filter 0.4s ease;
  }

  .navbar:not(.scrolled):not(.dark-mode) .nav-link {
    color: white; /* White text on hero image */
  }

  .navbar:not(.scrolled):not(.dark-mode) .nav-link::after {
    background-color: white; /* White underline */
  }

  /* Dark mode initial state (for non-home pages) */
  .navbar.dark-mode:not(.scrolled) .navbar-logo {
    filter: none; /* Original colors */
    transition: filter 0.4s ease;
  }

  .navbar.dark-mode:not(.scrolled) .nav-link {
    color: var(--brand--green); /* Green text */
  }

  .navbar.dark-mode:not(.scrolled) .nav-link::after {
    background-color: var(--brand--green); /* Green underline */
  }

  /* Scrolled state (White background) */
  .navbar.scrolled {
    background-color: #ffffff;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: calc(100% - 2rem);
    margin-top: 1rem;
    border-radius: 1rem;
  }

  .navbar.scrolled .navbar-logo {
    filter: none; /* Original logo colors */
    transition: filter 0.4s ease;
  }

  .navbar.scrolled .nav-link {
    color: var(--brand--light); /* Green text on white background */
  }

  .nav-link {
    position: relative;
    transition: color 0.3s ease;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--brand--green);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Special style for contact button to override underline */
  .nav-link.btn-contact::after {
    display: none;
  }

  .btn-contact {
    transition:
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.3s ease,
      box-shadow 0.3s ease !important;
  }

  .btn-contact:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(23, 70, 19, 0.2);
  }

  /* Mobile menu toggle styles */
  @media screen and (max-width: 991px) {
    .nav-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      padding: 1rem;
      flex-direction: column;
      gap: 1rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      border-radius: 1rem;
      margin-top: 0.5rem;
      height: auto !important;
      max-height: 80vh;
      overflow-y: auto;
    }

    .nav-menu.w--open {
      display: flex;
    }

    /* Ensure text is visible in mobile menu regardless of scroll state */
    .nav-menu .nav-link {
      color: var(--brand--green) !important;
    }

    .menu-button {
      display: block !important;
      cursor: pointer;
    }

    .hamburger-icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 28px;
      height: 20px;
    }

    .hamburger-icon span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--brand--green);
      border-radius: 2px;
      transition: all 0.3s ease;
    }
  }

  /* Desktop - ensure hamburger is hidden */
  @media screen and (min-width: 992px) {
    .menu-button {
      display: none !important;
    }
  }
</style>
