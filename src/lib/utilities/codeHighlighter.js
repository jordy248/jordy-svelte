import fs from 'fs';

import { parse } from'node-html-parser';
import { getHighlighter } from 'shiki';
// import shiki from 'shiki';

// const THEME = 'dracula';
const THEME = JSON.parse(fs.readFileSync('./src/lib/utilities/synthwave-color-theme.json', 'utf-8'));

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHTML(code) {
    return code.replace(
        /[{}`]/g,
        (character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character]),
    );
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
 function makeFocusable(html) {
    const root = parse(html);
    root.querySelector('pre').setAttribute('tabIndex', '0');
    return root.toString();
  }

/**
 * Returns array of line numbers to be highlghted
 * @param {string} rangeString - range string to be parsed (e.g. {1,3-5,8})
 * @returns {number[]}
 */
 function rangeParser(rangeString) {
    const result = [];
    const ranges = rangeString.split(',');
    ranges.forEach((element) => {
      if (element.indexOf('-') === -1) {
        result.push(parseInt(element, 10));
      } else {
        const limits = element.split('-');
        const start = parseInt(limits[0], 10);
        const end = parseInt(limits[1], 10);
        for (let i = start; i <= end; i += 1) {
          result.push(i);
        }
      }
    });
    return result;
  }

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */
async function highlighter(code, lang, meta) {
  const shikiHighlighter = await getHighlighter({
    theme: THEME,
  });

  let html;

  if (!meta) {
    html = shikiHighlighter.codeToHtml(code, {
      lang,
    });
  } else {
    const highlightMeta = /{([\d,-]+)}/.exec(meta)[1];
    const highlightLines = rangeParser(highlightMeta);

    html = shikiHighlighter.codeToHtml(code,{
      lang,
      lineOptions: highlightLines.map((element) => ({
        line: element,// line number
        classes:['highlight-line'],
      })),
    });
  }

  html = makeFocusable(html);
  return escapeHTML(html);
}

export default highlighter;