////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Frida Framework by Shikifuyin
// Version : 1.0
// Requirements : V8 engine, latest version (8.4+), ECMAScript ES2020+ compliance
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// File : ./FridaLib/Native/Native.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Description : Module aggregation
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Re-Exports
export * from './Integer64';
export * from './UInteger64';
export * from './Pointer';
export * from './FunctionPtr';

export { CPUContext } from './CPUContext';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Imports
import * as X86 from "./X86/X86";
import * as X64 from "./X64/X64";
import * as ARM from "./ARM/ARM";
import * as ARM64 from "./ARM64/ARM64";
import * as MIPS from "./MIPS/MIPS";
import * as C from './CCode';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exports
export {
    X86,
    X64,
    ARM,
    ARM64,
    MIPS,
    C
};
