import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule, GoogleMap, MapInfoWindow } from '@angular/google-maps';

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
    // Rest of the markers without options
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
    { id: 41, lat: 35.77892906738601, lng: -5.771606752564974  , options: {}},
];

  
  buses = [
    { id: 101, capacity: 20, maxTime: 45, limitCapacityCharge: 0.9, start: {id : 1 , lat: 35.73452040692653, lng: -5.896345177523544 }, end: { id : 41 , lat: 35.77892906738601, lng: -5.771606752564974 } },
    { id: 202, capacity: 20, maxTime: 45, limitCapacityCharge: 0.9, start: {id : 2 , lat: 35.729187191506064, lng: -5.834588128398543 }, end: { id : 41 , lat: 35.77892906738601, lng: -5.771606752564974 } },
    { id: 303, capacity: 20, maxTime: 45, limitCapacityCharge: 0.9, start: {id : 3 , lat: 35.76620317629421, lng: -5.855994564229098 }, end: { id : 41 , lat: 35.77892906738601, lng: -5.771606752564974 } }
  ];

  constructor() {}

  ngOnInit() {
    
  }

  showShortestDirections() {
    const distances = this.calculateAllDistances();
  
    this.buses.forEach(bus => {
      const path: any[] = [];
      let currentMarkerIndex = this.markers.findIndex(marker => marker.id === bus.start.id);
      let remainingCapacity = bus.capacity * bus.limitCapacityCharge;
      let totalTime = 0;
      const visitedMarkers: boolean[] = new Array(this.markers.length).fill(false);
  
      path.push(this.markers[currentMarkerIndex]);
  
      while (path.length < this.markers.length) {
        let nearestIndex = -1; 
        let nearestDistance = Infinity;
        for (let i = 0; i < this.markers.length; i++) {
          if (!visitedMarkers[i] && distances[currentMarkerIndex][i] !== undefined) {
            const distance = distances[currentMarkerIndex][i];
            const timeToNextMarker = distance * 60 / 50; // Assuming speed of 50 km/h
            if (distance < nearestDistance && totalTime + timeToNextMarker <= bus.maxTime && remainingCapacity >= 1) {
              nearestIndex = i;
              nearestDistance = distance;
            }
          }
        }
  
        if (nearestIndex === -1) {
          break;
        }
  
        currentMarkerIndex = nearestIndex;
        path.push(this.markers[currentMarkerIndex]);
        visitedMarkers[currentMarkerIndex] = true;
        remainingCapacity -= 1;
        totalTime += nearestDistance * 60 / 50;
      }
      
      // Add the end point as the last waypoint
      path.push(this.markers.find(marker => marker.id === bus.end.id));
  
      this.displayDirections(path, bus.id);
    });
  }
  

  calculateAllDistances(): number[][] {
    const distances: number[][] = [];
    for (let i = 0; i < this.markers.length; i++) {
      distances[i] = [];
      for (let j = 0; j < this.markers.length; j++) {
        distances[i][j] = this.calculateDistance(this.markers[i], this.markers[j]);
      }
    }
    return distances;
  }

  calculateDistance(marker1: any, marker2: any): number {
    const lat1 = marker1.lat;
    const lon1 = marker1.lng;
    const lat2 = marker2.lat;
    const lon2 = marker2.lng;

    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  displayDirections(waypoints: any[], busId: number) {
    const start = waypoints[0];
    const end = waypoints[waypoints.length - 1];
    const waypointsLatLng = waypoints.slice(1, waypoints.length - 1).map(marker => new google.maps.LatLng(marker.lat, marker.lng));

    const request = {
      origin: start,
      destination: end,
      waypoints: waypointsLatLng,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    };

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    if (this.map.googleMap) directionsRenderer.setMap(this.map.googleMap);

    const directionsWaypoints: google.maps.DirectionsWaypoint[] = waypointsLatLng.map(marker => ({
      location: { lat: marker.lat(), lng: marker.lng() },
      stopover: true
    }));

    const directionsRequest: google.maps.DirectionsRequest = {
      origin: start,
      destination: end,
      waypoints: directionsWaypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(directionsRequest, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
        directionsRenderer.setOptions({ suppressMarkers: true, polylineOptions: { strokeColor: this.getColorForBus(busId) } });
      } else {
        console.error('Directions request failed due to ' + status);
      }
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
