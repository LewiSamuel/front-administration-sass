export interface iPost{
    id: number | string,
  Titulo?: string | "",
  Descr?: string | "",
  u?: number | 0,
}

export interface iPostSave{ 
  Titulo?: string | "",
  Descr?: string | "",
  u?: number | 0,
}

export interface iPostSearch{ 
  id: number | string,
  Titulo?: string | "",
  Descr?: string | "",
  u?: number | 0,
}


export interface iPostUpdateField{
  id: number | string,
  field: string,
  value: string | number | boolean,
}

export interface iPostUpdate{
  id: number, 
  Titulo?: string | "",
  Descr?: string | "",
  u?: number | 0,
}

export interface iPostList{ 
  id?: number,
  Titulo?: string | "",
  Descr?: string | "",
  u?: number | 0,
}

export interface iPostListOne{
  id: number, 
  Titulo?: string | "",
  Descr?: string | "",
  u?: number | 0,
}

export interface iPostDelete{
  id: number | string
}
