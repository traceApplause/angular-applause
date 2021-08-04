
import { ChangeDetectorRef, Component} from '@angular/core';
import { Tester } from './models/tester';
import { DeviceService } from './services/device.service';
import { TesterService } from './services/tester.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-applause';

    allDeviceList: String[] = [];
    allCountryList: String[] = [];
    selectedCountries: string;
    selectedDevices: string;
    testerList: Tester[];

    constructor(private deviceService: DeviceService, private testerService: TesterService,
                private changeDetector: ChangeDetectorRef){}

    ngOnInit(): void {
      this.listCountries();
      this.listDevices();
      this.selectedCountries = 'ALL';
      this.selectedDevices = 'ALL';
      this.listTesters(this.selectedCountries, this.selectedDevices);
    }

    listCountries() {
      this.testerService.getCountryList().subscribe(
        data => {          
          this.allCountryList = data;        
        }
      )
    }

    listDevices() {
      this.deviceService.getDeviceList().subscribe(
        data => {
          this.allDeviceList = data;
        }
      )
    }

    listTesters(countries: string, devices: string) {
      this.testerService.getTesters(countries, devices).subscribe(
        data => {
          this.testerList = data;
        }
      )
    }

    changeCountryFilter() {
      this.testerService.getTesters(this.selectedCountries, this.selectedDevices);
      this.listTesters(this.selectedCountries, this.selectedDevices);
    }

    changeDeviceFilter() {
      this.testerService.getTesters(this.selectedCountries, this.selectedDevices);
      this.listTesters(this.selectedCountries, this.selectedDevices);
    }
}
