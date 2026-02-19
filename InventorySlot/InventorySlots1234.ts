import './XYZT/x1y1z1t1'
import './XYZT/x2y2z2t2'
import './XYZT/x3y3z3t3'
import './return/returnnnnn'
import './return/returnnnnnn'
import './return/returnnnnnnn'
function InventorySlots1() {
    return [
        {axis: 'x', items: '-- -- -- --'},
        {axis: 'y', items: '|| || || ||'},
        {axis: 'z', items: '~~ ~~ ~~ ~~'},
        {axis: 't', items: '\\ \\ \\ \\'},
    ]
}

function InventorySlots2(){
    return [
        {axis: 'x1', items: '?? ?? ?? ??'},
        {axis: 'y1', items: '$$ $$ $$ $$'},
        {axis: 'z1', items: '!! !! !! !!'},
        {axis: 't1', items: '@@ @@ @@ @@'},
    ]
}

function InventorySlots3() {
    return [
        {axis: 'x2', items: '<><> <><> <><> <><>'},
        {axis: 'y2', items: '()() ()() ()() ()()'},
        {axis: 'z2', items: '[][] [][] [][] [][]'},
        {axis: 't2', items: '{}{} {}{} {}{} {}{}'},
    ]
}

function InventorySlots4(){
    return [
        { axis: 'x3', items: '++ ++ ++ ++' },
        { axis: 'y3', items: '-- -- -- --' },
        { axis: 'z3', items: '** ** ** **' },
        { axis: 't3', items: '%% %% %% %%' },
    ]
}
console.log('InventorySlots1','InventorySlots2','InventorySlots3','InventorySlots4')
