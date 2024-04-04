import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { GoogleMapsModule} from '@angular/google-maps';
import { Observable, from } from 'rxjs';


interface Employee {
  id: number;
  lat: number;
  lng: number;
}

interface Bus {
  id: number;
  capacity: number;
  maxTime: number;
  limitCapacityCharge: number;
  assignedEmployees: Employee[];
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  title = 'angular-maps-app';
  center = { lat: 35.77892906738601, lng: -5.771606752564974 };
  zoom = 12;

  markers: { id: number; lat: number; lng: number; options?: google.maps.MarkerOptions; }[] = [
    { id: 1, lat: 35.73452040692653, lng: -5.896345177523544, options: { icon: { path: google.maps.SymbolPath.CIRCLE, fillColor: 'blue', fillOpacity: 1, scale: 10 } } },
    { id: 2, lat: 35.729187191506064, lng: -5.834588128398543, options: { icon: { path: google.maps.SymbolPath.CIRCLE, fillColor: 'green', fillOpacity: 1, scale: 10 } } },
    { id: 3, lat: 35.76620317629421, lng: -5.855994564229098, options: { icon: { path: google.maps.SymbolPath.CIRCLE, fillColor: 'red', fillOpacity: 1, scale: 10 } } },
    // Reste des marqueurs sans options
    { id: 4, lat: 35.76709136441268, lng: -5.847142470306043  , options: {}},
    { id: 5, lat: 35.761769637175135, lng: -5.846464008743048  , options: {}},
    { id: 6, lat: 35.76004052932674, lng: -5.843202912899375  , options: {}},
    { id: 7, lat: 35.75644148764917, lng: -5.85696976062627  , options: {}},
    { id: 8, lat: 35.75282422830847, lng: -5.861739646083654  , options: {}},
    { id: 9, lat: 35.750829488169224, lng: -5.863409320810074  , options: {}},
    { id: 10, lat: 35.748382348116756, lng: -5.864004281581222  , options: {}},
    { id: 11, lat: 35.747771216917194, lng: -5.863722924594836  , options: {}},
    { id: 12, lat: 35.74449105587223, lng: -5.857683015134604  , options: {}},
    { id: 13, lat: 35.73590945946448, lng: -5.836384704856079  , options: {}},
    { id: 14, lat: 35.740930623166875, lng: -5.831469664072298  , options: {}},
    { id: 15, lat: 35.738402190757164, lng: -5.8280313398256895  , options: {}},
    { id: 16, lat: 35.73553834118709, lng: -5.825939069740387  , options: {}},
    { id: 17, lat: 35.76276844323075, lng: -5.838940596285819  , options: {}},
    { id: 18, lat: 35.75860693956491, lng: -5.828683830071586  , options: {}},
    { id: 19, lat: 35.76221479445194, lng: -5.823850181734442  , options: {}},
    { id: 20, lat: 35.75620349018914, lng: -5.815945127348076  , options: {}},
    { id: 21, lat: 35.77011322581969, lng: -5.814240593951372  , options: {}},
    { id: 22, lat: 35.76214173217624, lng: -5.801359243647172  , options: {}},
    { id: 23, lat: 35.755153785306696, lng: -5.801340492941665  , options: {}},
    { id: 24, lat: 35.77338350946695, lng: -5.769662743080331  , options: {}},
    { id: 25, lat: 35.74792043802803, lng: -5.826108390921465, options: {} },
    { id: 26, lat: 35.749061296226195, lng: -5.82398224890241, options: {} },
    { id: 27, lat: 35.7488602139946, lng: -5.822154982192685, options: {} },
    { id: 28, lat: 35.746547731800185, lng: -5.821773011180475, options: {} },
    { id: 29, lat: 35.74424092142319, lng: -5.820722735949973, options: {} },
    { id: 30, lat: 35.74492336326918, lng: -5.819407984247616, options: {} },
    { id: 31, lat: 35.74217929576055, lng: -5.817604948145766, options: {} },
    { id: 32, lat: 35.741276271257014, lng: -5.8139815049613075, options: {} },
    { id: 33, lat: 35.74169707604322, lng: -5.809750179043849, options: {} },
    { id: 34, lat: 35.75386514238703, lng: -5.793182582642442, options: {} },
    { id: 35, lat: 35.75304695947615, lng: -5.79667134535609, options: {} },
    { id: 36, lat: 35.73672675642778, lng: -5.883294940108168, options: {} },
    { id: 37, lat: 35.73559918894041, lng: -5.877397158052169, options: {} },
    { id: 38, lat: 35.74205106182455, lng: -5.877223761664669, options: {} },
    { id: 39, lat: 35.72568113376641, lng: -5.810833317801103, options: {} },
    { id: 40, lat: 35.726587130081185, lng: -5.8103339159916825, options: {} },
    { id: 41, lat: 35.77892906738601, lng: -5.771606752564974, options: {} },
  ];

  buses: Bus[] = [
    { id: 101, capacity: 20, maxTime: 45, limitCapacityCharge: 0.9, assignedEmployees: [], start: { lat: 35.73452040692653, lng: -5.896345177523544 }, end: { lat: 35.77892906738601, lng: -5.771606752564974 } },
    { id: 202, capacity: 20, maxTime: 45, limitCapacityCharge: 0.9, assignedEmployees: [], start: { lat: 35.729187191506064, lng: -5.834588128398543 }, end: { lat: 35.77892906738601, lng: -5.771606752564974 } },
    { id: 303, capacity: 20, maxTime: 45, limitCapacityCharge: 0.9, assignedEmployees: [], start: { lat: 35.76620317629421, lng: -5.855994564229098 }, end: { lat: 35.77892906738601, lng: -5.771606752564974 } }
  ];


  constructor() {
   
  }

  ngOnInit() {}

  showShortestDirections() {
    // Calculate shortest directions for each bus
    this.buses.forEach((bus) => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      if (this.map && this.map.googleMap) {
        directionsRenderer.setMap(this.map.googleMap);
      }
      
      const waypoints = bus.assignedEmployees.map((employee) => ({
        location: new google.maps.LatLng(employee.lat, employee.lng),
        stopover: true
      }));
  
      const request = {
        origin: new google.maps.LatLng(bus.start.lat, bus.start.lng),
        destination: new google.maps.LatLng(bus.end.lat, bus.end.lng),
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      };
  
      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          const route = result.routes[0];
          const legs = route.legs;
  
          // Assign the calculated route to the bus
          bus.assignedEmployees.forEach((employee, index) => {
            employee.lat = legs[index].end_location.lat();
            employee.lng = legs[index].end_location.lng();
          });
  
          // Store the calculated directions
         
          directionsRenderer.setDirections(result);
          directionsRenderer.setOptions({ suppressMarkers: true, polylineOptions: { strokeColor: this.getColorForBus(bus.id) } });
        }
      });
    });
  }
  
  getColorForBus(busId: number): string {
    switch (busId) {
      case 101:
        return 'blue';
      case 202:
        return 'green';
      case 303:
        return 'red';
      default:
        return 'black';
    }
  }
}
