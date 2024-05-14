declare module x{}
 declare module y{}
 declare module z{}
 void function ijk(){
    void 'i = x + y + z'
    void 'j = y + x + z'
    void 'k = z + x + y'
    return ['i','j','k']
 }
