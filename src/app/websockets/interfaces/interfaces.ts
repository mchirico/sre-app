export interface Trade {
    data: {
      p: number;
    }[];
    type: string;
  }
  
  export interface Status {
    data: {
      name: string;
      p: number;
      code: string;
      n: string;
    }[];
    type: string;
  }