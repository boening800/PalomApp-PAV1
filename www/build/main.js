webpackJsonp([7],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider');
    }
    // Registro de usuario
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            // El usuario se ha creado correctamente. 
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    // Login de usuario
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('inicio cargado');
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\inicio\inicio.html"*/'<!--\n\n  Generated template for the InicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="PalomApp">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>PalomApp</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>Bienvenido Papu ! </h1>\n\n  <p>Este es una aplicacion llamada PalomApp </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\inicio\inicio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_geolocation_service__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapaPage = (function () {
    function MapaPage(navCtrl, navParams, geolocator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocator = geolocator;
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //obtener ubicacion del usuario para centrar ahi el mapa
        this.geolocator.get().then(function (result) {
            //cargar mapa
            _this.LoadMap(result.coords.latitude, result.coords.longitude);
            console.log(result);
        }).catch(function (err) { return console.log(err); });
    };
    MapaPage.prototype.LoadMap = function (lat, lng) {
        var location = new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* GoogleMapsLatLng */](lat, lng);
        new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* GoogleMap */]("map", {
            'controls': {
                'compass': true,
                'myLocationButton': true,
                'indoorPicker': true,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            },
            'camera': {
                'latLng': location,
                'tilt': 30,
                'zoom': 15,
                'bearing': 50
            }
        });
    };
    return MapaPage;
}());
MapaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mapa',template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\mapa\mapa.html"*/'<!--\n\n  Generated template for the MapaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="PalomApp">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mapa</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\mapa\mapa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_geolocation_service__["a" /* GeolocationService */]])
], MapaPage);

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlatoPage = (function () {
    function PlatoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlatoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlatoPage');
    };
    return PlatoPage;
}());
PlatoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-plato',template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\plato\plato.html"*/'<!--\n  Generated template for the PlatoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="PalomApp">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>plato</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\plato\plato.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PlatoPage);

//# sourceMappingURL=plato.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plato_plato__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userID = this.navParams.get('userID');
        console.log(this.userID);
    }
    MenuPage.prototype.goToplato = function (menuID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plato_plato__["a" /* PlatoPage */], { menuID: menuID });
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MenuPage');
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="PalomApp">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="user">\n    <img src="../assets/imgPlato/plato.jpg">\n    <h1>MENU LUNES</h1>\n  </div>\n  <ion-list>\n\n    <ion-item (click)="goToplato(1)">\n      <ion-thumbnail item-start>\n      <img src="../assets/imgPlato/plato.jpg">\n      </ion-thumbnail>\n      <h2>ARROZ CON POLLO</h2>\n    </ion-item>\n\n    <ion-item (click)="goToplato(2)">\n      <ion-thumbnail item-start>\n      <img src="../assets/imgPlato/plato.jpg">\n      </ion-thumbnail>\n      <h2>PAPA A LA HUANCAYNA</h2>\n    </ion-item>\n\n    <ion-item (click)="goToplato(3)">\n      <ion-thumbnail item-start>\n      <img src="../assets/imgPlato/plato.jpg">\n      </ion-thumbnail>\n      <h2>SECO DE CARNE</h2>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CafeteriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CafeteriaPage = (function () {
    function CafeteriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CafeteriaPage.prototype.goToMenu = function (userID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */], { userID: userID });
    };
    CafeteriaPage.prototype.ionViewDidLoad = function () {
        console.log('cafeteria cargada');
    };
    return CafeteriaPage;
}());
CafeteriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cafeteria',template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\cafeteria\cafeteria.html"*/'<!--\n\n  Generated template for the CafeteriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="PalomApp">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cafetería</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item (click)="goToMenu(1)">\n\n        <ion-avatar item-left>\n\n            <img src="./assets/imgPlato/plato.jpg">\n\n          </ion-avatar>\n\n          <h2>LUNES</h2>\n\n          <p>Desccripcion 1</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="goToMenu(2)">\n\n        <ion-avatar item-left>\n\n            <img src="./assets/imgPlato/plato.jpg">\n\n          </ion-avatar>\n\n          <h2>MARTES</h2>\n\n          <p>Desccripcion 2</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="goToMenu(3)">\n\n        <ion-avatar item-left>\n\n            <img src="./assets/imgPlato/plato.jpg">\n\n          </ion-avatar>\n\n          <h2>MIERCOLES</h2>\n\n          <p>Desccripcion 3</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="goToMenu(4)">\n\n        <ion-avatar item-left>\n\n            <img src="./assets/imgPlato/plato.jpg">\n\n          </ion-avatar>\n\n          <h2>JUEVES</h2>\n\n          <p>Desccripcion 4</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="goToMenu(5)">\n\n        <ion-avatar item-left>\n\n            <img src="./assets/imgPlato/plato.jpg">\n\n          </ion-avatar>\n\n          <h2>VIERNES</h2>\n\n          <p>Desccripcion 5</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="goToMenu(6)">\n\n        <ion-avatar item-left>\n\n            <img src="./assets/imgPlato/plato.jpg">\n\n          </ion-avatar>\n\n          <h2>SABADO</h2>\n\n          <p>Desccripcion 6</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\cafeteria\cafeteria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CafeteriaPage);

//# sourceMappingURL=cafeteria.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaboratorioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LaboratorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaboratorioPage = (function () {
    function LaboratorioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LaboratorioPage.prototype.ionViewDidLoad = function () {
        console.log('laboratorio cargado');
    };
    return LaboratorioPage;
}());
LaboratorioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-laboratorio',template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\laboratorio\laboratorio.html"*/'<!--\n\n  Generated template for the LaboratorioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="PalomApp">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Laboratorio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\laboratorio\laboratorio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LaboratorioPage);

//# sourceMappingURL=laboratorio.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.user = { email: '', password: '' };
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signin = function () {
        var _this = this;
        this.auth.registerUser(this.user.email, this.user.password)
            .then(function (user) {
            // El usuario se ha creado correctamente
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    SignUpPage.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="PalomApp">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Ingresar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Correo UCSS</ion-label>\n    <ion-input \n    [(ngModel)]="user.email" \n    name="email" \n    type="text" \n    autocapitalize="off" \n    required></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input \n      [(ngModel)]="user.password" \n      name="password" \n      type="password" \n      required></ion-input>\n  </ion-item>\n  <div class="form-item">\n    <button \n    ion-button \n    (click)="login()" \n    type="submit" \n    color="PalomApp" \n    block>Iniciar Sesión</button>\n\n    <button \n    ion-button \n    (click)="signin()" \n    type="submit" \n    color="PalomApp" \n    block\n  >Dar de alta\n  </button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cafeteria/cafeteria.module": [
		836,
		6
	],
	"../pages/inicio/inicio.module": [
		832,
		5
	],
	"../pages/laboratorio/laboratorio.module": [
		837,
		4
	],
	"../pages/mapa/mapa.module": [
		833,
		3
	],
	"../pages/menu/menu.module": [
		835,
		2
	],
	"../pages/plato/plato.module": [
		834,
		1
	],
	"../pages/sign-up/sign-up.module": [
		838,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GeolocationService = (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.get = function () {
        return __WEBPACK_IMPORTED_MODULE_1_ionic_native__["a" /* Geolocation */].getCurrentPosition();
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], GeolocationService);

//# sourceMappingURL=geolocation.service.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyDScTwv805ZEwrs-_-9ENVH1apuR9uvtec",
    authDomain: "palomapp-8ae4d.firebaseapp.com",
    databaseURL: "https://palomapp-8ae4d.firebaseio.com",
    projectId: "palomapp-8ae4d",
    storageBucket: "palomapp-8ae4d.appspot.com",
    messagingSenderId: "60436519000"
};
//# sourceMappingURL=firebase-config.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__ = __webpack_require__(466);




//var config = 
__WEBPACK_IMPORTED_MODULE_2_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__["a" /* firebaseConfig */]);
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geolocation_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_firebase_config__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cafeteria_cafeteria__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_laboratorio_laboratorio__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_plato_plato__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cafeteria_cafeteria__["a" /* CafeteriaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_laboratorio_laboratorio__["a" /* LaboratorioPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_plato_plato__["a" /* PlatoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/plato/plato.module#PlatoPageModule', name: 'PlatoPage', segment: 'plato', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cafeteria/cafeteria.module#CafeteriaPageModule', name: 'CafeteriaPage', segment: 'cafeteria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/laboratorio/laboratorio.module#LaboratorioPageModule', name: 'LaboratorioPage', segment: 'laboratorio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cafeteria_cafeteria__["a" /* CafeteriaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_laboratorio_laboratorio__["a" /* LaboratorioPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_plato_plato__["a" /* PlatoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_geolocation_service__["a" /* GeolocationService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mapa_mapa__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cafeteria_cafeteria__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_laboratorio_laboratorio__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__["a" /* InicioPage */];
        this.pages = [
            { titulo: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__["a" /* InicioPage */], icon: 'home' },
            { titulo: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_6__pages_mapa_mapa__["a" /* MapaPage */], icon: 'map' },
            { titulo: 'Cafeteria', component: __WEBPACK_IMPORTED_MODULE_7__pages_cafeteria_cafeteria__["a" /* CafeteriaPage */], icon: 'cafe' },
            { titulo: 'Laboratorio', component: __WEBPACK_IMPORTED_MODULE_8__pages_laboratorio_laboratorio__["a" /* LaboratorioPage */], icon: 'desktop' },
            { titulo: 'Ingresar', component: __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */], icon: 'log-in' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToPage = function (page) {
        this.nav.setRoot(page);
        console.log('pagina cargada');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('NAV'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\app\app.html"*/'\n\n<ion-menu [content]="NAV">\n\n    <ion-content> \n\n    <img src="./assets/images/portadainicial.png"> \n\n        <ion-list>\n\n            <button color="PalomApp" ion-item *ngFor="let page of pages" (click)="goToPage(page.component)" menuClose>\n\n                <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n\n                {{ page.titulo }}\n\n            </button>\n\n        </ion-list>     \n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #NAV [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Miguel\Documents\PAV1\PalomApp\PalomApp-PAV1\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _e || Object])
], MyApp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ })

},[467]);
//# sourceMappingURL=main.js.map