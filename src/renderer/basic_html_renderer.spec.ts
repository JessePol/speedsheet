import { expect, test } from "vitest";
import { Sheet, SheetConfig } from "src/domain/sheet";
import { BasicHTMLRenderer } from "src/renderer/basic_html_renderer";


test("creates 2x2 cells sheet grid css", () => {
  const cfg = new SheetConfig(2, 2);
  const sheet = new Sheet(cfg);
  const renderer = new BasicHTMLRenderer("sheet", sheet);

  const gridCSS = renderer.renderCSSGrid(cfg);

  const expectedCSS = ".sheet {\n"
    + `    display: grid;\n`
    + `    grid-template-columns: [C0] 40px [C1] 40px;\n`
    + `    grid-template-rows: [R0] 25px [R1] 25px;\n`
    + "}";

  expect(gridCSS).toEqual(expectedCSS);
});
