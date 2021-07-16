import { makeAutoObservable } from "mobx";
export default class Store {
  constructor() {
    this._isAuth = false;
    this._name = "";
    this._autos = [
      { 0: "Shevrolet", 1: "LLP", 2: 1990 },
      { 0: "Tayota", 1: "LLCkp", 2: 1993 },
      { 0: "Honda", 1: "xxkp", 2: 2000 },
    ];

    makeAutoObservable(this);
  }

  setName(name) {
    this._name = name;
  }
  setAuth(bool) {
    this._isAuth = bool;
  }
  get name() {
    return this._name;
  }
  get isAuth() {
    return this._isAuth;
  }
  setAutos(auto) {
    this._autos.push(auto);
  }
  get auto() {
    return this._autos;
  }

  //   setTypes(types) {
  //     this._types = types;
  //   }
  //   setBrands(brands) {
  //     this._brands = brands;
  //   }
  //   setDevices(device) {
  //     this._devices = device;
  //   }
  //   setSelectedType(type) {
  //     this._selectedType = type;
  //   }
  //   setSelectedBrand(brand) {
  //     this._selectedBrand = brand;
  //   }

  //   get types() {
  //     return this._types;
  //   }
  //   get brands() {
  //     return this._brands;
  //   }
  //   get device() {
  //     return this._devices;
  //   }
  //   get selectedType() {
  //     return this._selectedType;
  //   }
  //   get selectedBrand() {
  //     return this._selectedBrand;
  //   }
}
