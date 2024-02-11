import { expect, test } from "vitest";
import { Sheet, SheetConfig } from "src/domain/sheet";
import { Cell } from "src/domain/cell";



test("creates 2x2 cells sheet", () => {
    const sheet = new Sheet(new SheetConfig(2, 2));

    expect(sheet.cells).toEqual([
        [new Cell(""), new Cell("")],
        [new Cell(""), new Cell("")]
    ]);
});
