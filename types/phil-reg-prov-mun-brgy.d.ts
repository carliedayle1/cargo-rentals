declare module "phil-reg-prov-mun-brgy" {
  // Add type declarations for the module's exports here
  export function getRegions(): any[];
  export function getProvinces(regionCode: string): any[];
  export function getMunicipalities(provinceCode: string): any[];
  export function getBrgyList(munCode: string): any[];
}
