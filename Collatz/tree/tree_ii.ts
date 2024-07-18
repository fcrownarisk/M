import '../operator/multiply'
import '../operator/div'
export function tree_ii(){
     `x3 :multiply * div`
     `y3 :multiply / div`

     `z3 :multiply :: div`
     `z4 :div :: multiply`
    
     `y4 :multiply ** multiply`
     `x4 :div // div`
    return tree_ii
}
