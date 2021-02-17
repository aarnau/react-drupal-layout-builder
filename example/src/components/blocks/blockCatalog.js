import { lazy } from "react";

const blockCatalog = [
    {
        "id": "inline_block:basic",
        "component": lazy(() => import("./BasicBlock"))
    },
    {
        "id": "dynamicList",
        "component": lazy(() => import("./DynamicListBlock"))
    },
    {
        "id": "slider",
        "component": lazy(() => import("./SliderBlock"))
    },
    {
        "id": "content",
        "component": lazy(() => import("./ContentBlock"))
    },
];

export default blockCatalog;