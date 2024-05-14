import "InventorySlots"
import "worldsheet"
import "return"
import "Letter"
import "tensor"
import "color"
import "112"
import "XYZT"
(async: any) =>{'return,color,112,tensor'}
(await: any) =>{'worldsheet,XYZT,Letter,InventorySlots'}
interface iteration{
   string:["tensor + color + 112"]
   AsyncIterable: any
   String:["tensor - color - 112"]
   Asyncterator: any
   toString:["tensor * color * 112"]
   AsyncIterableIterator: any
}
namespace NodeIterator{
    number:["tensor % color % 112"]
    AsyncGenerator: any
    Number:["tensor / color / 112"]
    AsyncGeneratorFunction: any
    tonumber:["tensor | color | 112"]
    AsyncGeneratorFunctionConstructor: any
}
