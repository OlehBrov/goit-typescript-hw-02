/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

enum Bool {
  ENABLE = 'enable',
  DISASBLE = 'disable'
}

let union: string | number;
let literal: Bool;