import { Sheet, SheetConfig } from "src/domain/sheet";
import { Cell } from "src/domain/cell";

export class BasicHTMLRenderer {
  private element: HTMLElement;
  private sheet: Sheet;

  public constructor(element: HTMLElement, sheet: Sheet) {
    this.element = element;
    this.sheet = sheet;
  }

  public renderSheet() {
    const sheet = document.createElement("article");
    sheet.classList.add("sheet");
    this.element.appendChild(sheet);

    for (let y = 0; y < this.sheet.config.rowCount; y++) {
      for (let x = 0; x < this.sheet.config.columnCount; x++) {
        const cell = new Cell("test")
        this.renderCell(cell, sheet);
      }
    }

    this.renderCSS();
  }

  public renderCSS() {
    const style = document.createElement("style");
    style.textContent = this.renderCSSGrid(this.sheet.config);
    document.head.appendChild(style);
  }

  public renderCSSGrid(config: SheetConfig): string {
    // this should be dynamic later
    const cellWidth = "40px";
    const cellHeight = "25px";

    let gridTemplateColumnsCSS = "";
    for (let i = 0; i < config.columnCount; i++) {
      gridTemplateColumnsCSS += `[C${i}] ${cellWidth} `;
    }

    let gridTemplateRowsCSS = "";
    for (let i = 0; i < config.rowCount; i++) {
      gridTemplateRowsCSS += `[R${i}] ${cellHeight} `;
    }

    const style = ".sheet {\n"
        + `    display: grid;\n`
        + `    grid-template-columns: ${gridTemplateColumnsCSS.trim()};\n`
        + `    grid-template-rows: ${gridTemplateRowsCSS.trim()};\n`
        + "}";
    
    return style;
  }

  private renderCell(cell: Cell, element: HTMLElement) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.textContent = cell.value.toString();
    element.appendChild(cellElement);
  }
}