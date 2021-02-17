import { lazy } from "react";

const layoutSections = [
    {
        "id": "layout_one_section",
        "component": lazy(() => import("./OneColSection")),
        "regions": [
            { "id": "content" }
        ]
    },
    {
        "id": "layout_twocol_section",
        "component": lazy(() => import("./TwoColSection")),
        "regions": [
            { "id": "first" },
            { "id": "second" }
        ]
    },
    {
        "id": "layout_threecol_section",
        "component": lazy(() => import("./ThreeColSection")),
        "regions": [
            { "id": "first" },
            { "id": "second" },
            { "id": "third" }
        ]
    }
];

export default layoutSections;