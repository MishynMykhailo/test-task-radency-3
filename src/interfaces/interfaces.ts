export interface IStatictics {
  name: string;
  active: number;
  archive: number;
}

export interface INote {
  id: string;
  name: string;
  created: string;
  category: string;
  content?: string;
  date?: string[];
  archive: boolean;
}

export interface InewNote {
  name: string;
  category: string;
  content?: string;
  date?: string[];
}

export interface IValidParam {
  id: string;
}
