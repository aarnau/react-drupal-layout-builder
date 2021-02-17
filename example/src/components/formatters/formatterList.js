import { lazy } from "react";

const formatterList = [
    {
        "id": "string",
        "component": lazy(() => import("./StringFormatter"))
    },
    {
        "id": "text_default",
        "component": lazy(() => import("./TextDefaultFormatter"))
    },
    {
        "id": "boolean",
        "component": lazy(() => import("./BooleanFormatter"))
    },
    {
        "id": "number_decimal",
        "component": lazy(() => import("./DecimalFormatter"))
    },
    {
        "id": "entity_reference_entity_view",
        "component": lazy(() => import("./EntityReferenceEntityFormatter"))
    }
];

export default formatterList;