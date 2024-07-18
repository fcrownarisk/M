import '../operator/add'
import '../operator/minus'
export function tree_i(){
    `x1 :add + minus`
    `y1 :add - minus`

    `z1 :add :: minus`
    `z2 :minus :: add`

    `y2 :add ++ add`
    `x2 :minus -- minus`
   return tree_i
}
