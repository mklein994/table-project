import { GtConfig } from '@angular-generic-table/core';
import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';
import { ModuleItem } from '../summer-service-locations';

import { SearchHeaderComponent } from './search-header/search-header.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  config: GtConfig<ModuleItem>;
  data: ModuleItem[];

  constructor(private backendService: BackendService) {
    this.config = {
      settings: [
        { objectKey: 'summerServiceId' }, // number (eg. 1)
        { objectKey: 'installDate' }, // Date (eg. "2018-02-21T00:00:00")
        { objectKey: 'installedById' }, // number (eg. null)
        { objectKey: 'installedByName' }, // string (eg. "")
        { objectKey: 'removedDate' }, // Date (eg. null)
        { objectKey: 'removedById' }, // number (eg. null)
        { objectKey: 'removedByName' }, // string (eg. "")
        { objectKey: 'hydrantAssetNumber' }, // string (eg. "W-HY70025368")
        { objectKey: 'meterNumber' }, // string (eg. "8675309")
        { objectKey: 'meterSizeCode' }, // string (eg. "SIZE8")
        { objectKey: 'meterSizeDescription' }, // string (eg. null)
        { objectKey: 'startMeterReading' }, // string (eg. "123456.7")
        { objectKey: 'endMeterReading' }, // string (eg. "123456.8")
        { objectKey: 'location' }, // string (eg. null)
        { objectKey: 'serviceRequestNumber' }, // string (eg. "987654321")
        { objectKey: 'contact' }, // string (eg. "Joe Smith")
        { objectKey: 'telephoneNumber' }, // string (eg. "204-555-1234")
        { objectKey: 'geography' }, // string (eg. "yaqoHrm{oQ")
        { objectKey: 'modifiedBy' }, // string (eg. null)
        { objectKey: 'modifiedDate' }, // Date (eg. "0001-01-01T00:00:00")
        { objectKey: 'modifiedGeography' }, // string (eg. null)
        { objectKey: 'version' }, // number (eg. 0)
        { objectKey: 'createdDate' }, // Date (eg. "2018-01-14T00:00:00")
      ],
      fields: [
        {
          // number (eg. 1)
          name: 'Summer Service Id',
          objectKey: 'summerServiceId',
          header: { type: SearchHeaderComponent },
        }, {
          // Date (eg. "2018-02-21T00:00:00")
          name: 'Install Date',
          objectKey: 'installDate',
          header: { type: SearchHeaderComponent },
          render: (row) => new Date(row.installDate)
            .toLocaleDateString(navigator.language),
        }, {
          // number (eg. null)
          name: 'Installed By Id',
          objectKey: 'installedById',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "")
          name: 'Installed By Name',
          objectKey: 'installedByName',
          header: { type: SearchHeaderComponent },
        }, {
          // Date (eg. null)
          name: 'Removed Date',
          objectKey: 'removedDate',
          header: { type: SearchHeaderComponent },
        }, {
          // number (eg. null)
          name: 'Removed By Id',
          objectKey: 'removedById',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "")
          name: 'Removed By Name',
          objectKey: 'removedByName',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "W-HY70025368")
          name: 'Hydrant Asset Number',
          objectKey: 'hydrantAssetNumber',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "8675309")
          name: 'Meter Number',
          objectKey: 'meterNumber',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "SIZE8")
          name: 'Meter Size Code',
          objectKey: 'meterSizeCode',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. null)
          name: 'Meter Size Description',
          objectKey: 'meterSizeDescription',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "123456.7")
          name: 'Start Meter Reading',
          objectKey: 'startMeterReading',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "123456.8")
          name: 'End Meter Reading',
          objectKey: 'endMeterReading',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. null)
          name: 'Location',
          objectKey: 'location',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "987654321")
          name: 'Service Request Number',
          objectKey: 'serviceRequestNumber',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. "Joe Smith")
          name: 'Contact',
          objectKey: 'contact',
          header: { type: SearchHeaderComponent },
          // render: (row) => JSON.stringify(row.contact),
        }, {
          // string (eg. "204-555-1234")
          name: 'Telephone Number',
          objectKey: 'telephoneNumber',
          header: { type: SearchHeaderComponent },
          search: function(row) {
            return row.telephoneNumber === null
              ? null
              : row.telephoneNumber.replace(/[-() .+]/g, '');
          },
        }, {
          // string (eg. "yaqoHrm{oQ")
          name: 'Geography',
          objectKey: 'geography',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. null)
          name: 'Modified By',
          objectKey: 'modifiedBy',
          header: { type: SearchHeaderComponent },
        }, {
          // Date (eg. "0001-01-01T00:00:00")
          name: 'Modified Date',
          objectKey: 'modifiedDate',
          header: { type: SearchHeaderComponent },
        }, {
          // string (eg. null)
          name: 'Modified Geography',
          objectKey: 'modifiedGeography',
          header: { type: SearchHeaderComponent },
        }, {
          // number (eg. 0)
          name: 'Version',
          objectKey: 'version',
          header: { type: SearchHeaderComponent },
        }, {
          // Date (eg. "2018-01-14T00:00:00")
          name: 'Created Date',
          objectKey: 'createdDate',
          header: { type: SearchHeaderComponent },
        },
      ],
    };

    this.data = [];
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.backendService.getSummerServiceLocations()
      .subscribe(
        data => this.data = data[0].features[0].items,
        error => console.warn(error)
      );
  }
}
