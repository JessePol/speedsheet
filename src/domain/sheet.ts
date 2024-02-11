import { Cell } from "src/domain/cell";

export class SheetConfig {
    public constructor (
        public rowCount: number,
        public columnCount: number
    ) {}
}


export class Sheet {
    private _cells: Cell[][] = [];

    public constructor(public config: SheetConfig) {
        for (let i = 0; i < config.rowCount; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < config.columnCount; j++) {
                row.push(new Cell(""));
            }
            this._cells.push(row);
        }
    }

    public get cells() {
        return this._cells;
    }
}