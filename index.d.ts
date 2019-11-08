export as namespace nodeDbf;

export interface Header {
  filename: string;
  encoding: string;
  type: string;
  dateUpdated: Date;
  numberOfRecords: number;
  start: number;
  recordLength: number;
  fields: Field[];
}

export const enum FieldType {
  BINARY = "B",
  CHAR = "C",
  DATE = "D",
  NUMERIC = "N",
  LOGICAL = "L",
  MEMO = "M",
  TIMESTAMP = "@",
  LONG = "I",
  AUTO_INCREMENT = "+",
  FLOAT = "F",
  DOUBLE = "O",
  OLE = "G",
}

export interface Field {
  name: string;
  type: FieldType;
  displacement: number;
  length: number;
  decimalPlaces: number;
}

export interface Record {
}

export default class Parser {
  constructor (filename: string);
  on (event: "start", handler: () => void): void;
  on (event: "end", handler: () => void): void;
  on (event: "header", handler: (header: Header) => void): void;
  on (event: "record", handler: (record: Record) => void): void;
  parse (): void;
}
