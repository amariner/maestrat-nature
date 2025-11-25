<script>
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<div class="fixed-top">
  <div role="banner" class="navbar w-nav">
    <div class="container w-container">
      <div class="w-layout-grid navbar-grid">
        <a href="/" aria-current="page" class="brand w-nav-brand w--current">
          <img
            loading="lazy"
            src="/images/logo-maestrat-web.png"
            alt=""
            class="navbar-logo"
          />
          <img
            loading="lazy"
            src="/images/Sunny-Lake-Black.svg"
            alt="Logo"
            class="navbar-logo-hide"
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
    }

    .nav-menu.w--open {
      display: flex;
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
