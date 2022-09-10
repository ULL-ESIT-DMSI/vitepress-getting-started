# Vitepress: Problems Found

## Node.js version

Was getting errors like 


```
import { setDefaultResultOrder } from 'node:dns';
         ^^^^^^^^^^^^^^^^^^^^^
SyntaxError: The requested module 'node:dns' does not provide an export named 'setDefaultResultOrder'
```

The problem was I was using node v16. Switched to v18 and fixed.


## URLs: final slash

Is not the same

http://localhost:5173/temas/tema0-presentacion/

Than

http://localhost:5173/temas/tema0-presentacion

which is interpreted as

http://localhost:5173/temas/tema0-presentacion.html

## Learning

See also dthe <docs/debug/index.md> file