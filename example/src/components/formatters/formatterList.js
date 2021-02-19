import { lazy } from "react";

const formatterList = [
    {
        "id": "string",
        "component": lazy(() => import("./StringFormatter"))
    },
    {
        "id": "basic_string",
        "component": lazy(() => import("./BasicStringFormatter"))
    },
    {
        "id": "text_default",
        "component": lazy(() => import("./TextDefaultFormatter"))
    },
    {
        "id": "email_mailto",
        "component": lazy(() => import("./EmailFormatter"))
    },
    {
        "id": "boolean",
        "component": lazy(() => import("./BooleanFormatter"))
    },
    {
        "id": "timestamp",
        "component": lazy(() => import("./TimestampFormatter"))
    },
    {
        "id": "timestamp_ago",
        "component": lazy(() => import("./TimestampAgoFormatter"))
    },
    {
        "id": "number_decimal",
        "component": lazy(() => import("./DecimalFormatter"))
    },
    {
        "id": "entity_reference_entity_view",
        "component": lazy(() => import("./EntityReferenceEntityFormatter"))
    },
    {
        "id": "image",
        "component": lazy(() => import("./ImageFormatter"))
    }
];

export default formatterList;