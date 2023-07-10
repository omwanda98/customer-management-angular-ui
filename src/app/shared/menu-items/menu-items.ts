import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [

  { state: 'dashboard', name: 'MyBalance', type: 'link', icon: 'av_timer' },
  { state: 'ministatement', type: 'link', name: 'ministatement', icon: 'crop_7_5' },
  { state: 'deposit', type: 'link', name: ' Deposit', icon: 'view_comfy' },
  { state: 'transfer', type: 'link', name: 'transfer', icon: 'view_list' },
  { state: 'withdraw', type: 'link', name: 'withdraw', icon: 'view_headline' },
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
