export interface ICity {
  uuid: string
  cityName: string
  count: number
}

export interface NaviOptions {
  name: string
  href: string
  current: boolean
}

export interface IFormData {
  cityName: string
  count?: string
}

export type PageOptions = { 
    page: string;
    title: string;    
}
