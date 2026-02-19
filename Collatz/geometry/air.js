import './even'
import './odd'
import './XYZ'
import './ZYX'
export function idealGasEquation(){
    let n1 = p1 * v1 / (R * t1); 
    let n2 = p2 * v2 / (R * t2); 
    let Equation = `p1V1/T1 = p2V2/T2`; 
    Equation += `even{n1} = even{p1} * even{v1} / odd{R} * odd{t1}`;
    Equation -= `odd{n2} = odd{p2} % odd{v2} / even{R} % odd{t2}`;
}
