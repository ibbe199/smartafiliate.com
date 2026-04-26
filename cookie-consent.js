(function () {
  function injectUnifiedCardSizing() {
    if (document.getElementById('unified-card-sizing-upgrade')) return;
    const style = document.createElement('style');
    style.id = 'unified-card-sizing-upgrade';
    style.textContent = `
      /* توحيد مقاسات كروت الأدوات والصور في جميع الصفحات */
      .tools-grid,
      .tool-grid,
      .cards-grid:has(.tool-card) {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
        gap: 2.1rem !important;
        align-items: stretch !important;
      }

      .tool-card {
        width: 100% !important;
        min-height: 430px !important;
        padding: 2rem 1.75rem !important;
        border-radius: 30px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        text-align: center !important;
        overflow: hidden !important;
        box-shadow: 0 22px 55px rgba(15,23,42,.12) !important;
      }

      .tool-preview {
        width: 100% !important;
        height: 210px !important;
        min-height: 210px !important;
        max-height: 210px !important;
        border-radius: 24px !important;
        margin: 0 0 1.45rem !important;
        padding: 1.25rem !important;
        overflow: hidden !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        gap: .75rem !important;
        text-align: center !important;
      }

      .tool-preview img,
      .tool-preview picture,
      .tool-preview svg {
        max-width: 100% !important;
        max-height: 100% !important;
        object-fit: cover !important;
      }

      .preview-icon {
        width: 72px !important;
        height: 72px !important;
        min-width: 72px !important;
        min-height: 72px !important;
        font-size: 2.1rem !important;
        border-radius: 22px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .preview-title {
        font-size: 1.4rem !important;
        line-height: 1.35 !important;
        font-weight: 950 !important;
      }

      .preview-subtitle {
        font-size: 1.04rem !important;
        line-height: 1.7 !important;
        max-width: 95% !important;
      }

      .tool-card h3 {
        font-size: 1.5rem !important;
        line-height: 1.55 !important;
        font-weight: 900 !important;
        margin: .25rem 0 .9rem !important;
        color: #0b1f3a !important;
      }

      .tool-card p {
        font-size: 1.06rem !important;
        line-height: 1.9 !important;
        color: #475569 !important;
        margin: 0 auto 1.45rem !important;
        max-width: 94% !important;
      }

      .tool-link,
      .tool-card .tool-link {
        align-self: center !important;
        font-size: 1.02rem !important;
        padding: .85rem 1.45rem !important;
        border-radius: 999px !important;
        font-weight: 900 !important;
        min-width: 150px !important;
      }

      /* صفحات فيها 4 أعمدة كانت تجعل الصور صغيرة: نخليها 3 أعمدة مريحة */
      @media (min-width: 1100px) {
        .tools-grid,
        .tool-grid,
        .cards-grid:has(.tool-card) {
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
      }

      @media (max-width: 900px) {
        .tools-grid,
        .tool-grid,
        .cards-grid:has(.tool-card) {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
        }
      }

      @media (max-width: 700px) {
        .tools-grid,
        .tool-grid,
        .cards-grid:has(.tool-card) {
          grid-template-columns: 1fr !important;
          gap: 1.35rem !important;
        }
        .tool-card {
          min-height: auto !important;
          padding: 1.55rem !important;
          border-radius: 24px !important;
        }
        .tool-preview {
          height: 180px !important;
          min-height: 180px !important;
          max-height: 180px !important;
          border-radius: 20px !important;
        }
        .preview-icon {
          width: 60px !important;
          height: 60px !important;
          min-width: 60px !important;
          min-height: 60px !important;
          font-size: 1.75rem !important;
        }
        .preview-title { font-size: 1.2rem !important; }
        .preview-subtitle { font-size: .96rem !important; }
        .tool-card h3 { font-size: 1.28rem !important; }
        .tool-card p { font-size: .98rem !important; }
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', injectUnifiedCardSizing);
})();
