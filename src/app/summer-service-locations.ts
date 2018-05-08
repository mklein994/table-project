import { GtRow } from '@angular-generic-table/core';

export interface ModuleData {
  moduleCode: string;
  features: { items: ModuleItem[] };
}

export interface ModuleItem extends GtRow {
  summerServiceId: number; // 1,
  installDate: Date; // "2018-02-21T00:00:00",
  installedById: number; // null,
  installedByName: string; // "",
  removedDate: Date; // null,
  removedById: number; // null,
  removedByName: string; // "",
  hydrantAssetNumber: string; // "W-HY70025368",
  meterNumber: string; // "8675309",
  meterSizeCode: string; // "SIZE8",
  meterSizeDescription: string; // null,
  startMeterReading: string; // "123456.7",
  endMeterReading: string; // "123456.8",
  location: string; // null,
  serviceRequestNumber: string; // "987654321",
  contact: string; // "Joe Smith",
  telephoneNumber: string; // "204-555-1234",
  geography: string; // "yaqoHrm{oQ",
  modifiedBy: string; // null,
  modifiedDate: Date; // "0001-01-01T00:00:00",
  modifiedGeography: string; // null,
  version: number; // 0,
  createdDate: Date; // "2018-01-14T00:00:00"
}

export interface SummerServiceLocations {
  [index: number]: ModuleData;
}
