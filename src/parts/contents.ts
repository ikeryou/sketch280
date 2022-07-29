import { Conf } from "../core/conf";
import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _id:number;
  private _item:Array<Item> = [];

  constructor(opt:any) {
    super(opt)

    this._id = opt.id;

    const num = Conf.instance.ITEM_NUM;
    for(let i = 0; i < num; i++) {
      const itemEl = document.createElement('span');
      itemEl.classList.add('item');
      this.getEl().append(itemEl);

      const item = new Item({
        id:i,
        el:itemEl,
        txt:'?',
        color:'#CEFFFF'
      });
      this._item.push(item);
    }

    this._resize();
  }


  protected _update(): void {
    super._update();
  }


  protected _resize(): void {
    super._resize();

    const sw = Func.instance.sw();
    const sh = Func.instance.sh();

    this._item.forEach((val) => {
      let x = this._id * ((sw / 4)) + sw * 0.25;
      let y = sh * 0.5;

      if(sh > sw) {
        x = sw * 0.5
        y = this._id * (sh / 4) + sh * 0.25;
      }

      Tween.instance.set(val.getEl(), {
        x:x,
        y:y
      });
    });
  }
}