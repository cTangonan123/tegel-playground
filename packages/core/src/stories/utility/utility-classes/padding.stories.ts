import type { Meta } from '@storybook/html';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

const meta: Meta = {
  title: 'Utilities/Utility Classes/Padding',
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
      showToolbar: true,
    },
  },
};

export default meta;
export const Padding = {
  render: () => {
    const code = `
      .tds-u-p0 {
        padding: 0 !important;
      }

      .tds-u-pt0 {
        padding-top: 0 !important;
      }

      .tds-u-pr0 {
        padding-right: 0 !important;
      }

      .tds-u-pb0 {
        padding-bottom: 0 !important;
      }

      .tds-u-pl0 {
        padding-left: 0 !important;
      }

      .tds-u-p1 {
        padding: 8px !important;
      }

      .tds-u-pt1 {
        padding-top: 8px !important;
      }

      .tds-u-pr1 {
        padding-right: 8px !important;
      }

      .tds-u-pb1 {
        padding-bottom: 8px !important;
      }

      .tds-u-pl1 {
        padding-left: 8px !important;
      }

      .tds-u-p2 {
        padding: 16px !important;
      }

      .tds-u-pt2 {
        padding-top: 16px !important;
      }

      .tds-u-pr2 {
        padding-right: 16px !important;
      }

      .tds-u-pb2 {
        padding-bottom: 16px !important;
      }

      .tds-u-pl2 {
        padding-left: 16px !important;
      }

      .tds-u-p3 {
        padding: 24px !important;
      }

      .tds-u-pt3 {
        padding-top: 24px !important;
      }

      .tds-u-pr3 {
        padding-right: 24px !important;
      }

      .tds-u-pb3 {
        padding-bottom: 24px !important;
      }

      .tds-u-pl3 {
        padding-left: 24px !important;
      }
    `;

    const highlightedCode = hljs.highlight(code, { language: 'css' }).value;

    return `<pre><code class="hljs">${highlightedCode}</code></pre>`;
  },
};
