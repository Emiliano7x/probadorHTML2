class SwitchTemas {
  constructor({ defaultTheme = 'dark', onToggle = null, position = 'top-right' } = {}) {
    this.defaultTheme = defaultTheme;
    this.onToggle = onToggle;
    this.position = position;
    this.id = 'switch-tema';
    this.checked = defaultTheme === 'light';
  }

  init() {
    this._crearEstilos();
    this._crearSwitch();
    this._aplicarTema(this.defaultTheme);
    this._escucharToggle();
  }

  _crearSwitch() {
    const wrapper = document.createElement('div');
    wrapper.className = `switch-wrapper ${this.position}`;
    wrapper.innerHTML = `
      <input type="checkbox" id="${this.id}" ${this.checked ? 'checked' : ''} />
      <label for="${this.id}" class="switch-label" title="Cambiar tema">🌙</label>
    `;
    document.body.appendChild(wrapper);
  }

  _crearEstilos() {
    const css = `
      .switch-wrapper {
        position: fixed;
        z-index: 9999;
        padding: 8px;
      }
      .switch-wrapper.top-right { top: 20px; right: 20px; }
      .switch-wrapper.bottom-left { bottom: 20px; left: 20px; }

      .switch-label {
        font-size: 22px;
        cursor: pointer;
        transition: transform 0.3s ease;
        user-select: none;
      }
      .switch-label:hover {
        transform: scale(1.2);
      }

      .light-theme {
        --bg-color: #f9f9f9;
        --text-color: #222;
        --container-bg: #fff;
        --input-bg: #eee;
        --accent-color: #006aff;
      }

      .dark-theme {
        --bg-color: #2c2f3a;
        --text-color: #f2f2f2;
        --container-bg: #3c3f4f;
        --input-bg: #1e1e2e;
        --accent-color: #00c3ff;
      }

      body {
        background-color: var(--bg-color);
        color: var(--text-color);
      }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  _escucharToggle() {
    const checkbox = document.getElementById(this.id);
    checkbox.addEventListener('change', () => {
      const nuevoTema = checkbox.checked ? 'light' : 'dark';
      this._aplicarTema(nuevoTema);
      if (this.onToggle) this.onToggle(nuevoTema);
    });
  }

  _aplicarTema(tema) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${tema}-theme`);
  }
}